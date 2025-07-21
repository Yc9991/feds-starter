<script setup lang="ts" generic="T">
import { DxForm, DxSimpleItem, DxGroupItem, DxButtonItem, DxValidationRule } from 'devextreme-vue/form'
import type { TableForm } from '@/types'

const { odataForm: formHelper } = useHelper()

const { input } = defineProps<TableForm<T>>()

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


const filterGroup = computed(() => {
    if (input.list) {

        const group = Object.fromEntries(
            Object.entries(input.list).filter(([key]) => {
                const dataField = input.custom?.[key as keyof T]?.dataField;
                return input.group?.some(group => group.keys?.includes(String(dataField)));
            })
        );

        const notGroup = Object.fromEntries(
            Object.entries(input.list).filter(([key]) => {
                const dataField = input.custom?.[key as keyof T]?.dataField;
                return !input.group?.some(group => group.keys?.includes(String(dataField)));
            })
        );

        return {
            notGroup: notGroup,
            group: group
        }
    }

    return {
        notGroup: null,
        group: null
    }
})
</script>
<template>



    <form @submit.prevent="submit" class="relative">
        <DxForm v-bind="form" :form-data="input.list" v-if="input.list" >
            <!-- @vue-ignore -->

            <DxGroupItem v-for="val in input?.group" :key="val?.caption" v-bind="val">

                <template v-for="(value, key) in filterGroup.group" :key="key">
                    <template v-if="val.keys.includes(key)">

                        <slot v-if="$slots[slotName(key as keyof T)]" :name="slotName(key as keyof T)"
                            :option="{ ...input.custom?.[key as keyof T], ...defaultInput(key as keyof T) }" />
                        <DxSimpleItem v-else :data-field="String(key)"
                            v-bind="{ ...input.custom?.[key as keyof T], ...defaultInput(key as keyof T) }">
                            <DxValidationRule v-if="input.validation?.hasOwnProperty(key as keyof T)"
                                v-bind="input.validation?.[key as keyof T]" />
                        </DxSimpleItem>
                    </template>

                </template>
            </DxGroupItem>



            <template v-for="(value, key) in filterGroup.notGroup" :key="key">
                <slot v-if="$slots[slotName(key as keyof T)]" :name="slotName(key as keyof T)"
                    :option="{ ...input.custom?.[key as keyof T], ...defaultInput(key as keyof T) }" />
                <DxSimpleItem v-else :data-field="String(key)"
                    v-bind="{ ...input.custom?.[key as keyof T], ...defaultInput(key as keyof T) }">
                    <DxValidationRule v-if="input.validation?.hasOwnProperty(key as keyof T)"
                        v-bind="input.validation?.[key as keyof T]" />

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