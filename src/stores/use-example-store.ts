import DataSource from 'devextreme/data/data_source';
import type { ExampleTypes, OrderTypes, RegionTypes, FetchLoading } from '@/types/index'
import type { DxDataGrid } from 'devextreme-vue/data-grid'
import type { DxDataGridTypes } from 'devextreme-vue/data-grid'
import FlexibleColumnLayout from "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js"


export const useExampleStore = defineStore('use-example-store', () => {

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
        const data = dom.data
        dataCurrent.value = data
        layout.value = 'TwoColumnsStartExpanded'
    }

    let fetchGetRegion = async () => {
        const {data } = await useMyFetchOData<RegionTypes[]>({
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
                key: 'UserName',
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


    let fetching = () => {
        return {
            get: async () => {

                await fetchGet()
            },
            getRegion: async () =>  await fetchGetRegion()
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