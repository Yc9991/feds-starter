<script setup lang="ts" generic="T">
import type { DataGrid } from '@/types';
import DxDropDownBox from 'devextreme-vue/drop-down-box';
import { DxDataGrid, DxSelection, DxFilterRow, DxScrolling, DxMasterDetail, DxHeaderFilter, DxPager, DxPaging, DxSearch, DxSorting, DxColumn, DxSearchPanel, DxGrouping, DxGroupPanel, type DxDataGridTypes } from 'devextreme-vue/data-grid'

defineProps<{
    dropdown: DxDropDownBox,
    datagrid: {
        dataSource: any,
        columns: any[],
        config: DataGrid

    }
}>()

const input = defineModel<number>('input', { required: true })
const open = ref(false)

let selectionChange = (dom: DxDataGridTypes.SelectionChangedEvent) => {
    input.value = dom.currentSelectedRowKeys[0].RegionDescription
}
</script>
<template>
    <DxDropDownBox v-model:value="input" v-model:opened="open" :input-attr="{ 'aria-label': 'Owner' }"
        :defer-rendering="true"  :show-clear-button="true" :data-source="datagrid.dataSource"
        v-bind="dropdown" placeholder="Select data...">

        <template #content>
            <DxDataGrid :data-source="datagrid.dataSource" v-bind="datagrid.config"
                @selection-changed="selectionChange">
                <DxColumn v-for="col in datagrid.columns" :key="col.dataField" v-bind="col" />

               <slot/>
            </DxDataGrid>
        </template>
    </DxDropDownBox>
</template>