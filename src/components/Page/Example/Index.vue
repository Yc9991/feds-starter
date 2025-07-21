<script setup lang="ts">

import datagridConfig from '@/datas/datagrid'
import { DxLoadPanel } from 'devextreme-vue/load-panel';
import { staticDataExample, staticDataRegion, staticDataOrder } from '@/datas'
import { DxDataGrid, DxSelection, DxScrolling, DxMasterDetail, DxHeaderFilter, DxPager, DxPaging, DxSearch, DxSorting, DxColumn, DxSearchPanel, DxGrouping, DxGroupPanel } from 'devextreme-vue/data-grid'
import { useUtils } from '@/composables/use-utils'

const exampleStore = useExampleStore()


const { overrideRefTemplate } = useUtils()

const refDatagridExample = ref<DxDataGrid | null>(null)

onMounted(() => overrideRefTemplate(exampleStore, 'refDatagridExample', refDatagridExample.value))


</script>
<template>

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