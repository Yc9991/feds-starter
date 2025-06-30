import DataSource from 'devextreme/data/data_source';
import type { ExampleTypes } from '@/types/index'
import type { DxDataGrid} from 'devextreme-vue/data-grid'


export const useExampleStore = defineStore('use-example-store', () => {

    const data = ref<DataSource | null>()
    const refDatagridExample = ref<DxDataGrid | null>(null)

    let fetchGet = async () => {
        const { dataSource } = await useMyFetchOData<ExampleTypes[]>({
            url: '/Customers',
            selfProxy: '/odata',
            options: {
                key: 'UserName',
                requireTotalCount: true,
                pageSize: 10,
                paginate: true,
            }
        })

        if (dataSource) {
            data.value = dataSource
        }


    }


    let fetching = () => {
        return {
            get: () => fetchGet(),
        }
    }


    return {
        refDatagridExample,
        data,
        fetching,

    }

})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useExampleStore, import.meta.hot))