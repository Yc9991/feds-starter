import type { Col, DataGrid } from '@/types'
import DataSource from 'devextreme/data/data_source';
import { DxDataGrid } from 'devextreme-vue/data-grid'



export const useHelper = () => {

    let nodeEnv: 'development' | 'production' = process.env.NODE_ENV as 'development' | 'production'


    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
    const odataApiBaseUrl = import.meta.env.VITE_ODATA_API_BASE_URL;

    function isJSONString(str: string): boolean {
        if (typeof str !== 'string') return false;

        try {
            JSON.parse(str);

            // If JSON.parse doesn't throw, it's valid JSON
            return true;
        } catch (e) {
            return false;
        }
    }



    function safeJSONParse<T = any>(str: string): T | null {
        if (typeof str !== 'string') {
            return null
        }

        try {
            // First layer parse (unwrap JSON string)
            const firstParse = JSON.parse(str);
            if (typeof firstParse === 'string') {
                str = firstParse;
            } else {
                return firstParse
            }
        } catch (e) {
            // string might not be quoted json string, continue below
        }

        // Now we have raw string like: [System.Exception: {...}]
        // Remove [ ] if exist
        if (str.startsWith('[') && str.endsWith(']')) {
            str = str.substring(1, str.length - 1);
        }

        // Try to locate JSON block inside
        const start = str.indexOf('{');
        const end = str.lastIndexOf('}');
        if (start >= 0 && end > start) {
            const innerJson = str.substring(start, end + 1);
            try {
                const finalParse = JSON.parse(innerJson);

                return finalParse
            } catch (innerErr) {
                return null
            }
        }

        return null
    }

    function extractErrorMessage(rawResponse: string | object): string | null {
        function recursiveParse(str: string): any {
            while (typeof str === 'string') {
                try {
                    const parsed = JSON.parse(str);
                    str = parsed;
                } catch {
                    break;
                }
            }
            return str;
        }

        function findDeepestMessage(obj: any): string | null {
            if (typeof obj === 'string') {
                const parsed = recursiveParse(obj);
                if (typeof parsed === 'object') {
                    return findDeepestMessage(parsed);
                }
                return parsed as string;
            }

            if (Array.isArray(obj)) {
                for (const item of obj) {
                    const msg = findDeepestMessage(item);
                    if (msg) return msg;
                }
            }

            if (typeof obj === 'object' && obj !== null) {
                for (const key of Object.keys(obj)) {
                    if (/^messages?$/i.test(key)) {
                        const msg = findDeepestMessage(obj[key]);
                        if (msg) return msg;
                    }
                }
            }

            return null;
        }

        const parsed = typeof rawResponse === 'string' ? recursiveParse(rawResponse) : rawResponse;

        if (typeof parsed === 'object' && parsed !== null && parsed.Message) {
            const nestedMessage = findDeepestMessage(parsed.Message);
            return nestedMessage ?? parsed.Message;
        }

        return typeof parsed === 'string' ? parsed : null;
    }


    const createGroupTemplate = <T = {}>(columns: Col<T>[], template: { items: string[] }[]): Col<T>[] => {
        return columns.map((e) => {
            const isGroup = template.find((el) => el.items.includes(String(e.dataField)));
            return { ...e, ...(isGroup ? { groupCellTemplate: `${String(e.dataField)}GroupTemplate` } : {}) };
        }) as Col<T>[]
    }

    const odataForm = () => {
        type AnyObject = Record<string, any>;
        type IgnoreDataOptions<T> =
            | { item: T; exclude: (keyof T)[]; include?: never }
            | { item: T; include: (keyof T)[]; exclude?: never };

        function ignoreData<T extends AnyObject>(options: IgnoreDataOptions<T>): Partial<T> {
            const { item } = options;

            if (options.exclude) {
                const result = { ...item };
                for (const key of options.exclude) {
                    delete result[key];
                }
                return result;
            }

            if (options.include) {
                const result = {} as Partial<T>;
                for (const key of options.include) {
                    result[key] = item[key];
                }
                return result;
            }

            return item;

        }

        let extractData = <T extends any>({ dom }: { dom: HTMLFormElement }): T => {

            const form = dom
            const data: Record<string, string> = {}
            Array.from(form.elements).filter((el) => (el as HTMLInputElement).name).forEach((e) => {
                const inputElement = e as HTMLInputElement;
                if (inputElement.value) {
                    data[inputElement.name] = inputElement.value;
                }
            })

            return data as T;
        }




        const submit = async <T extends object | object[]>({
            item,
            type,
            datagridConfig,
            datagridRef,
            url
        }: { url: string, item: T, type: 'Add' | 'Edit', datagridConfig: DataGrid<T>, datagridRef?: DxDataGrid | null }) => {

            //@ts-ignore
            if (!item[datagridConfig.keyExpr] && type == 'Add') delete item[datagridConfig.keyExpr]


            //@ts-ignore
            var payload = { data: item, keyName: datagridConfig.keyExpr }
            var method = 'POST'

            if (type == 'Edit') {
                //@ts-ignore
                payload = { data: item, keyValue: item?.[String(datagridConfig.keyExpr)], keyName: datagridConfig.keyExpr }
                method = 'PUT'
            }

            console.log({
                url,
                //@ts-ignore
                method,
                //@ts-ignore
                payload
            })

            const { data: resultData } = await useMyFetchOData<T>({
                url,
                //@ts-ignore
                method,
                //@ts-ignore
                payload,
            })

            if (resultData) {
                //@ts-ignore
                delete resultData["@odata.context"]

                if (type == 'Add') {
                    // notif({ type: 'success', message: 'Data berhasil ditambahkan!' })
                }

                if (type == 'Edit' && resultData) {
                    // notif({ type: 'success', message: 'Data berhasil diedit!' })
                }
                if (datagridRef) datagridRef?.instance?.refresh()
            }
        }



        return {
            extractData,
            ignoreData,
            submit
        }
    }

    return {
        odataForm,
        createGroupTemplate,
        isJSONString,
        safeJSONParse,
        nodeEnv,
        extractErrorMessage,
        apiBaseUrl,
        odataApiBaseUrl

    }

}