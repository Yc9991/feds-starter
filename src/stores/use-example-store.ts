import DataSource from 'devextreme/data/data_source';
// import datagridConfig from '@/datas/datagrid'
import type { ExampleTypes, RegionTypes, FetchLoading, TableForm } from '@/types/index'
import type { DxDataGrid } from 'devextreme-vue/data-grid'
import type { DxDataGridTypes } from 'devextreme-vue/data-grid'
import FlexibleColumnLayout from "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js"


export const useExampleStore = defineStore('use-example-store', () => {

    const { odataForm: formHelper } = useHelper()

    const data = ref<DataSource<ExampleTypes> | null>()
    const dataCurrent = ref<ExampleTypes | null>(null)

    const dataDefault: ExampleTypes = {
        Address: "",
        City: "",
        CompanyName: "",
        ContactName: "",
        ContactTitle: "",
        Country: "",
        CustomerID: "",
        Fax: "",
        Phone: "",
        PostalCode: "",
        Region: '',
        Orders: []
    }

    const refDatagridExample = ref<DxDataGrid | null>(null)
    const dataRegion = ref<RegionTypes[]>([])
    const layout = ref<FlexibleColumnLayout['layout']>('OneColumn')
    const formType = ref<'Add' | 'Edit' | 'Delete'>('Add')
    const loading = ref<FetchLoading<'get' | 'order'>>({
        get: true,
        order: false
    })


    // @ts-ignore
    const formOption = computed<TableForm<ExampleTypes>>(() => {
        return {
            form: {},
            input: {
                list: dataCurrent.value,
                group: [
                    {
                        caption: 'Perusahaan',
                        keys: ['CompanyName'],
                        colCount: 6
                    },
                    {
                        caption: 'Kontak',
                        keys: ['ContactName', 'ContactTitle', 'Phone'],
                        colCount: 6
                    },
                    {
                        caption: 'Alamat',
                        keys: ['Address', 'City', 'Region', 'PostalCode', 'Country'],
                        colCount: 6,
                        visibleIndex: 1
                    },
                ],
                custom: {
                    Orders: {
                        visible: false,
                    },

                    CustomerID: {
                        editorOptions: {
                            disabled: true
                        },
                        visibleIndex: 0
                    },
                    CompanyName: {
                        dataField: 'CompanyName',
                        label: {
                            text: 'Nama Perusahaan',
                        },
                        colSpan: 6
                    },
                    ContactName: {
                        dataField: 'ContactName',
                        label: {
                            text: 'Nama Kontak',
                        },
                        colSpan: 3
                    },
                    Phone: {
                        dataField: 'Phone',
                        label: {
                            text: 'Telepon',
                        },
                        colSpan: 6
                    },
                    ContactTitle: {
                        dataField: 'ContactTitle',
                        label: {
                            text: 'Judul Kontak',
                        },
                        colSpan: 3
                    },
                    Address: {
                        dataField: 'Address',
                        label: {
                            text: 'Alamat',
                        },
                        colSpan: 6,
                        visibleIndex: 5
                    },
                    City: {
                        dataField: 'City',
                        label: {
                            text: 'Kota',
                        },
                        colSpan: 3
                    },
                    Region: {
                        dataField: 'Region',
                        label: {
                            text: 'Region',
                        },
                        colSpan: 3,
                        isRequired: true,
                        name: 'Region',
                        editorType: 'dxDropDownBox',
                    },
                    Country: {
                        dataField: 'Country',
                        label: {
                            text: 'Negara',
                        },
                        colSpan: 3,
                    },
                    PostalCode: {
                        dataField: 'PostalCode',
                        label: {
                            text: 'Kode Pos',
                        },
                        colSpan: 3
                    },

                },
                validation: {
                    CompanyName: {
                        type: 'required',
                        message: 'Nama Perusahaan harus diisi'
                    }
                }

            }
        }
    })

    let resetData = () => {
        dataCurrent.value = null
    }

    let openAdd = () => {
        resetData()
        layout.value = 'TwoColumnsStartExpanded'
        formType.value = 'Add'
        dataCurrent.value = dataDefault as ExampleTypes
    }

    function openEdit(dom: DxDataGridTypes.RowDblClickEvent<ExampleTypes>) {
        resetData()
        formType.value = 'Edit'
        dataCurrent.value = formHelper().ignoreData<ExampleTypes>({ item: dom.data, exclude: ['Orders'] }) as ExampleTypes
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
            // const extractedData = formHelper().extractData<ExampleTypes>({ dom: data })

            if (formType.value == 'Add') {

                //Call fetch add here
            }

            if (formType.value == 'Edit') {

                //Call fetch add here
            }

            // await formHelper().submit<ExampleTypes>({
            //     url: '/odata/Customers',
            //     item: extractedData,
            //     type: 'Edit',
            //     datagridConfig: datagridConfig.example,
            //     datagridRef: refDatagridExample.value
            // })
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
        openEdit,
        layout,
        loading,
        openAdd,
        resetData,
        formOption

    }

})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useExampleStore, import.meta.hot))