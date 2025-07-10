<script setup lang="ts">

import datagridConfig from '@/datas/datagrid'
import { DxLoadPanel } from 'devextreme-vue/load-panel';
import { staticDataExample, staticDataOrder } from '@/datas'
import { DxDataGrid, DxHeaderFilter, DxPager, DxPaging, DxSearch, DxSorting, DxColumn, DxSearchPanel, DxGrouping, DxGroupPanel, type DxDataGridTypes } from 'devextreme-vue/data-grid'
import { useUtils } from '@/composables/use-utils'
const exampleStore = useExampleStore()


exampleStore.fetching().get()
const { overrideRefTemplate } = useUtils()

const refDatagridExample = ref<DxDataGrid | null>(null)

onMounted(() => overrideRefTemplate(exampleStore, 'refDatagridExample', refDatagridExample.value))

</script>
<template>
    <div class="w-full">
        <TableDrawer v-model:layout="exampleStore.layout" :midColumnTitle="exampleStore.dataCurrent?.CompanyName">

            <template #startColumn>
                <DxLoadPanel :position="{ of: '#datagrid-example' }" v-model:visible="exampleStore.loading.get"
                    shading-color="rgba(0,0,0,0.2)" />
                <DxDataGrid v-if="exampleStore.data" id="datagrid-example" @rowDblClick="exampleStore.rowClick"
                    ref="refDatagridExample" :data-source="exampleStore.data" v-bind="datagridConfig.example">
                    <DxColumn v-for="col in staticDataExample" :key="col.dataField" v-bind="col" />
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

                    <template #dataRowTemplate="{ data: rowInfo }">
                        <TableCollapse :row="rowInfo.data" :column="staticDataExample" detailKey="Orders"
                            :detailColumn="staticDataOrder">

                            <!-- This is how to make cutsom data with component -->
                            <template #data_Country>
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

                            <!-- This is how to custom data, make sure to use prefix data_ -->
                            <template #data_CustomerID>
                                ID: {{ rowInfo.data.CustomerID }}
                            </template>
                            <template v-slot:option_details="{ details, detailColumn }">
                                <div class="flex flex-col">
                                    <div>
                                        <!-- This is current data, do whatever -->
                                        <!-- {{ rowInfo.data }} -->
                                    </div>
                                    <div class="ml-[100px] ">
                                        <!-- This is table -->
                                        <DxDataGrid :data-source="details" v-bind="datagridConfig.order">
                                            <DxColumn v-for="cols in detailColumn" :key="cols.dataField"
                                                v-bind="cols" />
                                        </DxDataGrid>
                                    </div>
                                </div>
                            </template>
                        </TableCollapse>
                    </template>
                </DxDataGrid>
            </template>

            <template #midColumn>

            </template>
            <template #midColumnButton>
                <VBtn color="primary" variant="tonal">Edit</VBtn>
                <VBtn color="primary" variant="text" icon="mdi-plus"></VBtn>
            </template>



            
        </TableDrawer>




    </div>

</template>