<script setup lang="ts">
import 'devextreme/dist/css/dx.fluent.blue.light.css'
import datagridConfig from '@/datas/datagrid'
import { staticDataExample } from '@/datas'
import { DxDataGrid, DxHeaderFilter, DxPager, DxPaging, DxSearch, DxSorting, DxColumn, DxSearchPanel, DxGrouping, DxGroupPanel } from 'devextreme-vue/data-grid'
const exampleStore = useExampleStore()
exampleStore.fetching().get()

</script>
<template>
    <div class="w-full">
        <DxDataGrid :ref="(dom: any) => exampleStore.refDatagridExample = dom" :data-source="exampleStore.data"
            v-bind="datagridConfig.example">

            <DxColumn v-for="col in (staticDataExample as any)" :key="col.dataField" v-bind="col" />

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