<script setup lang="ts">

import datagridConfig from '@/datas/datagrid'
import { DxLoadPanel } from 'devextreme-vue/load-panel';
import { staticDataExample, staticDataRegion, staticDataOrder } from '@/datas'
import { DxDataGrid, DxSelection, DxScrolling, DxMasterDetail, DxHeaderFilter, DxPager, DxPaging, DxSearch, DxSorting, DxColumn, DxSearchPanel, DxGrouping, DxGroupPanel } from 'devextreme-vue/data-grid'
import { useUtils } from '@/composables/use-utils'
import type { ExampleTypes, TableForm } from '@/types';
import { DxSimpleItem, DxValidationRule } from 'devextreme-vue/form'
import { DxValidator, DxRequiredRule } from 'devextreme-vue/validator';


const exampleStore = useExampleStore()

exampleStore.fetching().get()
exampleStore.fetching().getRegion()
const { overrideRefTemplate } = useUtils()
const { odataForm } = useHelper()

const refDatagridExample = ref<DxDataGrid | null>(null)

onMounted(() => overrideRefTemplate(exampleStore, 'refDatagridExample', refDatagridExample.value))

// @ts-ignore
const tableFormOption = computed<TableForm<ExampleTypes>>(() => {
    return {
        form: { activeStateEnabled: true },
        input: {
            list: exampleStore.dataCurrent,
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

const handleSubmit = (event: Event) => {
    const data = event.target as HTMLFormElement;



    if (data) {
        // console.log(data[5], data[6])

        const result = odataForm().extractData({ dom: data })
        console.log(result)
    }

}


</script>
<template>
    <div class="w-full overflow-hidden">
        <TableDrawer v-model:layout="exampleStore.layout" :midColumnTitle="exampleStore.dataCurrent?.CompanyName">
            <template #startColumn>
                <div class="px-3">
                    <!-- <DxLoadPanel :position="{ of: '#datagrid-example' }" v-model:visible="exampleStore.loading.get"
                        shading-color="rgba(0,0,0,0.2)" /> -->
                    <DxDataGrid id="datagrid-example" @rowDblClick="exampleStore.rowClick" ref="refDatagridExample"
                        :data-source="exampleStore.data" v-bind="datagridConfig.example">
                        <DxColumn v-for="col in staticDataExample" :key="col.dataField" v-bind="col" />

                        <DxMasterDetail :enabled="true" template="masterDetailTemplate" />

                        <template #masterDetailTemplate="{ data: dataMaster }">
                            <DxDataGrid :data-source="dataMaster.data.Orders" v-bind="datagridConfig.order">
                                <DxColumn v-for="cols in staticDataOrder" :key="cols.dataField" v-bind="cols" />
                            </DxDataGrid>
                        </template>

                        <template #RegionTemplate="{ data: rowData }">
                            <TableDropdown
                                :dropdown="{ disabled: true, valueExpr: 'RegionDescription', displayExpr: 'RegionDescription' }"
                                :datagrid="({ config: datagridConfig.region, columns: staticDataRegion, dataSource: exampleStore.dataRegion })"
                                v-model:input="rowData.data.Region">
                                <DxSearchPanel width="100%" placeholder="Cari..." :visible="true" />
                                <DxSelection mode="single" />
                                <DxPaging :enabled="true" :page-size="10" />
                                <DxScrolling mode="virtual" />
                            </TableDropdown>
                        </template>

                        <!-- This is how to create custom data -->
                        <template #CountryTemplate>
                            <v-timeline direction="horizontal" line-inset="1" truncate-line="both">
                                <v-timeline-item size="20" fill-dot dot-color="primary">
                                    <template #icon>
                                        <v-icon color="white" size="20" icon="mdi-map-marker" />
                                    </template>
                                </v-timeline-item>
                                <v-timeline-item size="20" fill-dot dot-color="primary">
                                    <template #icon>
                                        <v-icon color="white" size="20" icon="mdi-map-marker" />
                                    </template>
                                </v-timeline-item>
                                <v-timeline-item size="20" fill-dot dot-color="primary">
                                    <template #icon>
                                        <v-icon color="white" size="20" icon="mdi-map-marker" />
                                    </template>
                                </v-timeline-item>
                            </v-timeline>
                        </template>

                        <DxSearchPanel placeholder="Cari..." :visible="true" />
                        <DxGroupPanel :visible="true" />
                        <DxGrouping :auto-expand-all="true" />
                        <DxSorting mode="multiple" />
                        <DxHeaderFilter :visible="true">
                            <DxSearch :enabled="true" />
                        </DxHeaderFilter>
                        <DxPaging :page-size="10" />
                        <DxPager :visible="true" :allowed-page-sizes="[5, 10, 'all']" :show-page-size-selector="true"
                            :show-info="true" :show-navigation-buttons="true" />
                    </DxDataGrid>
                </div>
            </template>

            <template #midColumn>
                <div class="p-3 overflow-auto h-[80vh]">
                    <TableForm v-if="exampleStore.dataCurrent" @submit="handleSubmit" v-bind="tableFormOption">
                        <template #Data_Region="{ option }">
                            <DxSimpleItem v-bind="option">
                                <!-- <DxValidationRule name="Region" type="required" message="Harus diisi!" /> -->
                                <TableDropdown
                                    :dropdown="{ name: 'Region', valueExpr: 'RegionDescription', width: '100%', displayExpr: 'RegionDescription' }"
                                    :datagrid="({ config: datagridConfig.region, columns: staticDataRegion, dataSource: exampleStore.dataRegion })"
                                    v-model:input="exampleStore.dataCurrent.Region">

                                    <DxSearchPanel width="100%" placeholder="Cari..." :visible="true" />

                                    <DxSelection mode="single" />
                                    <DxPaging :enabled="true" :page-size="10" />
                                    <DxScrolling mode="virtual" />
                                </TableDropdown>


                            </DxSimpleItem>
                        </template>
                    </TableForm>
                </div>
            </template>

            <template #midColumnButton>
                <VBtn @click="exampleStore.layout = 'ThreeColumnsMidExpanded'" color="primary" variant="tonal">Open
                    Column 3</VBtn>
                <VBtn color="primary" variant="text" icon="mdi-plus"></VBtn>
            </template>

            <template #endColumnButton>
                <VBtn color="primary" variant="text" icon="mdi-information"></VBtn>
            </template>

            <template #endColumn>
                <div class="p-3">
                    kebuka
                </div>
            </template>
        </TableDrawer>
    </div>

</template>