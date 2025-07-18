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


const defaultInput = (key: (keyof T)): TableForm<T>['input']['custom'] => {

    var inputItem: InstanceType<typeof DxSimpleItem>['$props'] = {}

    if (!input.custom?.[key]?.editorType) {

        var editorType: InstanceType<typeof DxSimpleItem>['$props']['editorType'] | undefined = 'dxTextBox'

        if (input.list?.[key] instanceof Date) {
            editorType = 'dxDateBox'
        }

        if (typeof input.list[key] === 'string') {
            editorType = 'dxTextBox'
        }
        if (typeof input.list[key] === 'number') {
            editorType = 'dxNumberBox'
        }

        if (String(input.list[key]).length >= 100) {
            editorType = 'dxTextArea'
        }

        inputItem = { editorType }
    }

    return inputItem
}

let slotName = (key: (keyof T)): `Data_${string & keyof T}` => {
    return `Data_${String(key)}` as `Data_${string & keyof T}`
}

</script>
<template>
    <form @submit.prevent="submit">
        <DxForm v-bind="form" :form-data="formList" v-if="formList">
            <!-- @vue-ignore -->

            <template v-for="(value, key) in formList" :key="key">
                <slot v-if="$slots[slotName(key)]" :name="slotName(key)" />
                <DxSimpleItem v-else :data-field="String(key)"
                    v-bind="{ ...input.custom?.[key], ...defaultInput(key) }">
                    <DxValidationRule v-if="input.validation?.hasOwnProperty(key)" v-bind="input.validation?.[key]" />

                </DxSimpleItem>

            </template>

            <!-- <slot /> -->

            <!-- @vue-ignore -->
            <DxGroupItem :col-span="form?.colCount">
                <DxButtonItem :button-options="{
                    text: 'Simpan', icon: 'save', useSubmitBehavior: true
                }" />

            </DxGroupItem>
        </DxForm>
    </form>
</template>