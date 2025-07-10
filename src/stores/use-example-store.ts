import DataSource from 'devextreme/data/data_source';
import type { ExampleTypes, FetchLoading } from '@/types/index'
import type { DxDataGrid } from 'devextreme-vue/data-grid'
import type { DxDataGridTypes } from 'devextreme-vue/data-grid'
import FlexibleColumnLayout from "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js"


export const useExampleStore = defineStore('use-example-store', () => {

    const data = ref<DataSource<ExampleTypes> | null>()
    const dataCurrent = ref<ExampleTypes | null>(null)
    const refDatagridExample = ref<DxDataGrid | null>(null)


    const layout = ref<FlexibleColumnLayout['layout']>('OneColumn')


    const loading = ref<FetchLoading<'get'>>({
        get: true
    })

    function rowClick(dom: DxDataGridTypes.RowDblClickEvent<ExampleTypes>) {
        const data = dom.data
        dataCurrent.value = data
        layout.value = 'TwoColumnsStartExpanded'

        
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
            }
        }
    }


    return {
        refDatagridExample,
        data,
        fetching,
        dataCurrent,
        rowClick,
        layout,
        loading

    }

})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useExampleStore, import.meta.hot))