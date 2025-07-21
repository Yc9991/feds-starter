<script setup lang="ts">
import datagridConfig from '@/datas/datagrid'
import { staticDataRegion } from '@/datas'
import { DxSelection, DxScrolling, DxPaging, DxSearchPanel } from 'devextreme-vue/data-grid'
import type { ExampleTypes, TableForm } from '@/types';
import { DxSimpleItem } from 'devextreme-vue/form'


const exampleStore = useExampleStore()


// @ts-ignore
const tableFormOption = computed<TableForm<ExampleTypes>>(() => {
    return {
        form: {  },
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


</script>
<template>

    <div class="p-3 overflow-auto h-[80vh]">
        <TableForm v-if="exampleStore.dataCurrent" @submit="exampleStore.fetching().submit" v-bind="tableFormOption">
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