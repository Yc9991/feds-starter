<script setup lang="ts" generic="T">
import { DxForm, DxSimpleItem, DxGroupItem, DxButtonItem, DxValidationRule } from 'devextreme-vue/form'
import type { TableForm } from '@/types'

const { odataForm: formHelper } = useHelper()

const { input } = defineProps<TableForm<T>>()

const formList = computed(() => {
    if (input.list) {
        //@ts-ignore
        return formHelper().ignoreData<T>({ item: input.list, include: input.include, exclude: input.exclude })
    }
})

const emit = defineEmits<{
    submit: [dom: Event]
}>()

let submit = (dom: Event) => {
    emit('submit', dom)
}
</script>
<template>
    <form @submit.prevent="submit">
        <DxForm v-bind="form" :form-data="formList">
            <!-- @vue-ignore -->
            <DxSimpleItem v-for="(value, key) in formList" :key="key" :data-field="String(key)"
                v-bind="input.custom?.[key]">
                <DxValidationRule v-if="input.validation?.hasOwnProperty(key)" v-bind="input.validation?.[key]" />
            </DxSimpleItem>


            <!-- @vue-ignore -->
            <DxGroupItem :col-span="form?.colCount">
                <DxButtonItem :button-options="{
                    text: 'Simpan', icon: 'save', useSubmitBehavior: true
                }" />

            </DxGroupItem>
        </DxForm>
    </form>
</template>