<script setup lang="ts">
import datagridConfig from '@/datas/datagrid'
import { staticDataRegion } from '@/datas'
import { DxSelection, DxScrolling, DxPaging, DxSearchPanel } from 'devextreme-vue/data-grid'
import { DxSimpleItem } from 'devextreme-vue/form'

const exampleStore = useExampleStore()
</script>
<template>
    <div class="p-3 overflow-auto h-[80vh]" v-if="exampleStore.dataCurrent">
        <TableForm  @submit="exampleStore.fetching().submit" v-bind="exampleStore.formOption">
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