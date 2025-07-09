<script setup lang="ts" generic="T,I">
import DxButton from 'devextreme-vue/button';
import type { Col } from '@/types'

interface RowData {
    [key: string]: any
}

const props = defineProps<{
    row: RowData
    detailKey?: string
    column: Col<T>[],
    detailColumn?: Col<I>[]
}>()

const showDetail = ref(false)
const toggleDetail = () => (showDetail.value = !showDetail.value)


const filteredEntries = computed(() => {
    return props.column.filter((e) => e.dataField != props.detailKey)
})


const hasDetail = computed(() => {
    const key = props.detailKey
    if (!key || !(key in props.row)) return false
    const val = props.row[key]
    return val !== null && val !== undefined && val !== '' && (!Array.isArray(val) || val.length > 0)
})

const colspan = computed(() => props.column.length + (hasDetail.value ? 1 : 0))


const detailData = computed(() => {
    const key = props.detailKey
    if (!key || !(key in props.row)) return []

    const val = props.row[key]
    if (!Array.isArray(val)) return []

    const allowedFields = props.detailColumn?.map(col => col.dataField) ?? []

    // Insert fake indent field at the beginning
    return val.map(detail => {
        const cleaned = Object.fromEntries(
            Object.entries(detail).filter(([key]) => !key.startsWith('@'))
        )

        const filtered = Object.fromEntries(
            //@ts-ignore
            Object.entries(cleaned).filter(([key]) => allowedFields.includes(key))
        )

        return {
            ...filtered
        }
    })
})
</script>

<template>
    <template v-if="row">
        <tr class="main-row" role="row">
            <template v-for="col in filteredEntries" :key="col.dataField">
                <td role="gridcell">
                    <slot v-if="$slots[`data_${String(col.dataField)}`]" :name="`data_${String(col.dataField)}`" />

                    <div v-else>
                        {{ row[String(col.dataField)] }}
                    </div>
                </td>
            </template>
            <td v-if="hasDetail" role="gridcell">
                <DxButton :text="showDetail ? 'Hide' : 'Show'" :type="showDetail ? 'danger' : 'success'"
                    styling-mode="contained" @click="toggleDetail()" />
            </td>
        </tr>
        <tr v-if="hasDetail && showDetail && detailKey" class="notes-row" role="row">
            <td :colspan="colspan" role="gridcell">
                <slot name="_details" :row="row" :details="detailData" :detailColumn="detailColumn" />
            </td>
        </tr>
    </template>
</template>
