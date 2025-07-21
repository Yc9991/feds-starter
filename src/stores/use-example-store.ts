import DataSource from 'devextreme/data/data_source';
import datagridConfig from '@/datas/datagrid'
import type { ExampleTypes, RegionTypes, FetchLoading } from '@/types/index'
import type { DxDataGrid } from 'devextreme-vue/data-grid'
import type { DxDataGridTypes } from 'devextreme-vue/data-grid'
import FlexibleColumnLayout from "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js"


export const useExampleStore = defineStore('use-example-store', () => {

    const { odataForm: formHelper } = useHelper()

    const data = ref<DataSource<ExampleTypes> | null>()
    const dataCurrent = ref<ExampleTypes | null>(null)
    const refDatagridExample = ref<DxDataGrid | null>(null)
    const dataRegion = ref<RegionTypes[]>([])

    const layout = ref<FlexibleColumnLayout['layout']>('OneColumn')


    const loading = ref<FetchLoading<'get' | 'order'>>({
        get: true,
        order: false
    })

    function rowClick(dom: DxDataGridTypes.RowDblClickEvent<ExampleTypes>) {

        const item = formHelper().ignoreData<ExampleTypes>({ item: dom.data, exclude: ['Orders'] })

        dataCurrent.value = item as ExampleTypes
        layout.value = 'TwoColumnsStartExpanded'
    }

    let fetchGetRegion = async () => {
        const { data } = await useMyFetchOData<RegionTypes[]>({
            url: '/Regions',
            type: 'data',
            selfProxy: '/odata',
            options: {
                key: 'RegionID',
                requireTotalCount: true,
                pageSize: 10,
                paginate: true,
            }
        })

        if (data) {
            dataRegion.value = data
            loading.value.order = false
        }
    }

    let fetchGet = async () => {
        const { dataSource } = await useMyFetchOData<ExampleTypes[]>({
            url: '/Customers',
            selfProxy: '/odata',
            options: {
                key: 'CustomerID',
                requireTotalCount: true,
                pageSize: 10,
                paginate: true,
                expand: ['Orders'],
                // filter: ['Region', '=', null]
            }
        })

        if (dataSource) {
            data.value = dataSource
            loading.value.get = false
        }
    }

    const fetchSubmit = async (event: Event) => {
        const data = event.target as HTMLFormElement;

        if (data) {
            const result = formHelper().extractData<ExampleTypes>({ dom: data })

            await formHelper().submit<ExampleTypes>({
                url: '/odata/Customers',
                item: result,
                type: 'Edit',
                datagridConfig: datagridConfig.example,
                datagridRef: refDatagridExample.value
            })
        }
    }


    let fetching = () => {
        return {
            get: async () => {

                await fetchGet()
            },
            submit: async (event: Event) => await fetchSubmit(event),
            getRegion: async () => await fetchGetRegion()
        }
    }


    return {
        refDatagridExample,
        data,
        dataRegion,
        fetching,
        dataCurrent,
        rowClick,
        layout,
        loading

    }

})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useExampleStore, import.meta.hot))