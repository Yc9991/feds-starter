<script setup lang="ts" generic="T">
import type { DataGrid } from '@/types';
import DxDropDownBox, { DxDropDownBoxTypes } from 'devextreme-vue/drop-down-box';
import { DxDataGrid, DxColumn, type DxDataGridTypes } from 'devextreme-vue/data-grid'

const { dropdown, datagrid } = defineProps<{
    dropdown: DxDropDownBox,
    datagrid: {
        dataSource: any,
        columns: any[],
        config: DataGrid

    }
}>()

const input = defineModel<any>('input', { required: true })
const open = ref(false)
const datagridRef = ref<DxDataGrid | null>(null)

let selectionChange = (dom: DxDataGridTypes.SelectionChangedEvent) => {

    if (dropdown.valueExpr) {

        //@ts-ignore
        input.value = dom.currentSelectedRowKeys[0][dropdown.valueExpr]
    }
}

const focusedRowKey = ref(null)
const isAttachSearch = ref<boolean>(false)
const isAttachKeyListener = ref<boolean>(false)

const attachSearchKeyListener = (e: DxDataGridTypes.ContentReadyEvent) => {

    if (isAttachSearch.value) return;
    isAttachSearch.value = true;

    // Wait for the DOM to be ready
    setTimeout(() => {

        if (open.value) {

            const searchInput = e.element.querySelector('.dx-datagrid-search-panel input');

            if (searchInput) {

                searchInput.addEventListener('keydown', (ev: any) => {
                    const instance = e.component
                    const visibleData = instance.getDataSource()?.items()

                    if (ev.key === 'Enter') {

                        const inputValue = String(ev.target?.value)
                        const filterData = visibleData?.filter((item: any) => {
                            return Object.values(item).some((value: any) => value.toString().toLowerCase().includes(inputValue.toLowerCase()))
                        })

                        if (filterData?.length > 1) {
                            // Focus the first visible row
                            const firstRowElement = instance?.getRowElement(0)?.[0];

                            if (firstRowElement && !focusedRowKey.value) {
                                focusedRowKey.value = visibleData[0]
                            }
                        }

                        if (filterData?.length == 1 && ev.key === 'Enter') {
                            instance.selectRows([filterData[0]], false)
                            input.value = filterData[0][String(dropdown?.valueExpr)]
                        }

                        if (filterData.length > 1 && isAttachKeyListener.value) {
                            instance.selectRows([focusedRowKey.value], false)
                            input.value = focusedRowKey.value?.[String(dropdown?.valueExpr)]
                        }
                    }

                    if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {

                        if (!focusedRowKey.value) {
                            focusedRowKey.value = visibleData[0]
                        } else {
                            const currentIndex = visibleData.findIndex((item: any) => item[String(dropdown.valueExpr)] === focusedRowKey.value?.[String(dropdown.valueExpr)]);

                            if (ev.key === 'ArrowDown' && (currentIndex + 1) < visibleData.length) {
                                focusedRowKey.value = visibleData[currentIndex + 1]
                            }
                            if (ev.key === 'ArrowUp' && currentIndex > 0) {
                                focusedRowKey.value = visibleData[currentIndex - 1]
                            }

                            isAttachKeyListener.value = true
                        }

                    }
                })
            }
        }
    }, 0)
}

let closed = (dom: DxDropDownBoxTypes.ClosedEvent) => {
    isAttachSearch.value = false
    isAttachKeyListener.value = false
    focusedRowKey.value = null
}


let opened = (dom: DxDropDownBoxTypes.OpenedEvent) => {
    if (input.value) {
        const instance = datagridRef.value?.instance
        const visibleData = instance?.getDataSource()?.items()
        const findItem = visibleData?.find((item: any) => item[String(dropdown.valueExpr)] === input.value)

        focusedRowKey.value = findItem
    }
}

const datagridWidth = computed(() => {
    return datagrid.config.width ? datagrid.config.width : 'auto'
})
</script>
<template>
    <div class="flex">
        <DxDropDownBox @closed="closed" @opened="opened" v-model:value="input" v-model:opened="open"
            :input-attr="{ 'aria-label': dropdown.displayExpr }" :show-clear-button="true"
            :data-source="datagrid.dataSource" v-bind="dropdown" placeholder="Pilih...">
            <slot name="dropdown"></slot>

            <template #content>
                <DxDataGrid @content-ready="attachSearchKeyListener" :data-source="datagrid.dataSource"
                    ref="datagridRef" v-bind="datagrid.config" :focusedRowKey="focusedRowKey"
                    @selection-changed="selectionChange">
                    <DxColumn v-for="col in datagrid.columns" :key="col.dataField" v-bind="col" />

                    <slot />
                </DxDataGrid>
            </template>
        </DxDropDownBox>

    </div>
</template>

<style>


div[role="dialog"][aria-label="Dropdown"] {
    width: auto !important;
}


.dx-popup-content {
    min-width: v-bind(datagridWidth);

}
</style>