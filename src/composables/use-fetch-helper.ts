import { createFetch } from "@vueuse/core"
import { useCookies } from '@vueuse/integrations/useCookies'
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';
import type { FetchOData } from "@/types"
import { appConfig } from '@/datas'
import { type FetchRequestConfig } from '@odata2ts/http-client-fetch'

const ODATA_URL = import.meta.env.VITE_ODATA_API_BASE_URL ? import.meta.env.VITE_ODATA_API_BASE_URL : `${import.meta.env.VITE_API_BASE_URL}/odata`


export const useMyFetchApi = createFetch({
    fetchOptions: {

    },
    baseUrl: () => {
        const { apiBaseUrl } = useHelper()
        return apiBaseUrl
    },
    combination: 'overwrite',
    options: {
        async beforeFetch({ options }) {

            const cookies = useCookies()
            const token = cookies.get(appConfig.jwtName)

            options.headers = {
                ...options.headers,
                'Content-Type': 'application/json',
                ...((token) && { Authorization: `Bearer ${(token)}` })
            }
            return { options }
        }
    }
})



export const useMyFetchOData = async <T extends object | object[]>({ url, options, params, headers, type = 'datasource', selfProxy }: FetchOData & FetchRequestConfig) => {
    try {
        const cookies = useCookies()
        const token = cookies.get(`jwtToken`)
        const urls = `${selfProxy ? selfProxy : ODATA_URL}${url}`

        //@ts-ignore
        const dataSource = new DataSource({
            ...options,
            store: new ODataStore({
                url: urls ,
                version: 4,
                beforeSend: function (request: any) {
                    request.params = {
                        ...request.params,
                        ...params,
                    }
                    request.headers = {
                        ...request.headers,
                        ...headers,
                        ...((token) && { Authorization: `Bearer ${(token)}` })
                    };
                },
            }),
        })


        //@ts-ignore
        type coll = (keyof T)[]

        let result: T = [] as unknown as T
        let col: coll = []



        if (type == 'data') {

            const { data: resultData } = await useMyFetch<any>(`${url}${url}?top=1`, {
                method: 'GET',
                headers: {
                    ...((token) && { Authorization: `Bearer ${(token)}` })
                }
            })

            if (resultData) {
                if (Array.isArray(resultData.value) && resultData.value.length > 0) {
                    col = Object.keys(resultData.value[0]) as coll
                } else if (!Array.isArray(resultData.value)) {
                    col = Object.keys(resultData.value) as coll
                }

            }

        }

        return { dataSource, data: result, statusCode: 200, error: null, col: col };
    } catch (error: any) {
        console.error('Error loading data:', error);
        return { data: null, dataSource: null, statusCode: Number(error.status) || 500, error, col: null };
    }
}



export async function useMyFetch<T>(url: string, options: RequestInit & { notif?: boolean } | undefined) {
    try {

        const { apiBaseUrl, isJSONString, safeJSONParse, extractErrorMessage } = useHelper()
        const cookies = useCookies()
        const token = cookies.get(appConfig.jwtName)


        const response = await fetch((apiBaseUrl) + url, {
            ...options,
            headers: {
                ...options?.headers,
                'Content-Type': 'application/json',
                ...((token) && { Authorization: `Bearer ${(token)}` })
            }
        });


        if (!response.ok) {
            const errorResponse = await response.json();


            const trullyError = extractErrorMessage(JSON.stringify(errorResponse))
            const error: string = errorResponse.Message || errorResponse.Error || response.statusText
            const checkError = isJSONString(error) ? safeJSONParse(error) : error


            // Check if the response status is in the range of 400-499 (client error)
            if (response.status >= 400 && response.status < 500) {

                if (checkError && options?.notif) {
                    //you can make notification here
                    console.error(trullyError || 'Terjadi kesalahan!')
                }

                return { error: checkError, statusCode: response.status, data: null };
            } else {

                if (checkError && options?.notif) {
                    //you can make notification here
                    console.error(trullyError || 'Terjadi kesalahan!')
                }

                // Handle other errors (status codes outside the range of 400-499) here
                return { error: checkError, statusCode: response.status, data: null };
            }
        } else {

            // Process the successful response here
            let responseData: T | null = null;
            try {
                responseData = await response.json() as T;
            } catch (error) {
            }

            return { data: responseData, statusCode: response.status, error: null };
        }
    } catch (error) {


        return { error };
    }
}