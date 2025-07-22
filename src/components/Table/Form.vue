<script setup lang="ts" generic="T">
import { DxForm, DxSimpleItem, DxGroupItem, DxButtonItem, DxValidationRule } from 'devextreme-vue/form'
import type { TableForm } from '@/types'

const props = defineProps<TableForm<T>>()

const emit = defineEmits<{
    submit: [dom: Event]
}>()

let submit = (dom: Event) => {
    emit('submit', dom)
}


const defaultInput = (key: (keyof T)): TableForm<T>['input']['custom'] => {

    var inputItem: InstanceType<typeof DxSimpleItem>['$props'] = {}

    if (!props.input.custom?.[key]?.editorType) {

        var editorType: InstanceType<typeof DxSimpleItem>['$props']['editorType'] | undefined = 'dxTextBox'

        if (props.input.list?.[key] instanceof Date) {
            editorType = 'dxDateBox'
        }

        if (typeof props.input.list[key] === 'string') {
            editorType = 'dxTextBox'
        }
        if (typeof props.input.list[key] === 'number') {
            editorType = 'dxNumberBox'
        }

        if (String(props.input.list[key]).length >= 100) {
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
    if (props.input.list) {

        const group = Object.fromEntries(
            Object.entries(props.input.list).filter(([key]) => {
                const dataField = props.input.custom?.[key as keyof T]?.dataField;
                return props.input.group?.some(group => group.keys?.includes(String(dataField)));
            })
        );

        const notGroup = Object.fromEntries(
            Object.entries(props.input.list).filter(([key]) => {
                const dataField = props.input.custom?.[key as keyof T]?.dataField;
                return !props.input.group?.some(group => group.keys?.includes(String(dataField)));
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
        <DxForm v-bind="form" :form-data="input.list" v-if="input.list">

            <DxGroupItem v-for="val in input?.group" :key="val?.caption" v-bind="val">
                <!-- @vue-ignore -->
                <template v-for="(value, key) in filterGroup.group" :key="`${val?.caption}${key}`">
                    <template v-if="val.keys.includes(key)">
                        <template v-if="$slots">
                            <slot v-if="$slots[slotName(key as keyof T)]" :name="slotName(key as keyof T)"
                                :option="{ ...input.custom?.[key as keyof T], ...defaultInput(key as keyof T) }" />
                            <DxSimpleItem v-else :data-field="String(key)"
                                v-bind="{ ...input.custom?.[key as keyof T], ...defaultInput(key as keyof T) }">
                                <DxValidationRule v-if="input.validation?.hasOwnProperty(key as keyof T)"
                                    v-bind="input.validation?.[key as keyof T]" />
                            </DxSimpleItem>

                        </template>

                    </template>
                </template>
            </DxGroupItem>
            <!-- @vue-ignore -->
            <template v-for="(value, key) in filterGroup.notGroup" :key="key">
                <template v-if="$slots">
                    <slot v-if="$slots[slotName(key as keyof T)]" :name="slotName(key as keyof T)"
                        :option="{ ...input.custom?.[key as keyof T], ...defaultInput(key as keyof T) }" />
                    <DxSimpleItem v-else :data-field="String(key)"
                        v-bind="{ ...input.custom?.[key as keyof T], ...defaultInput(key as keyof T) }">
                        <DxValidationRule v-if="input.validation?.hasOwnProperty(key as keyof T)"
                            v-bind="input.validation?.[key as keyof T]" />
                    </DxSimpleItem>
                </template>

            </template>

            <!-- <slot /> -->

            <!-- @vue-ignore -->
            <DxGroupItem>
                <DxButtonItem :button-options="{
                    text: 'Simpan', icon: 'save', useSubmitBehavior: true
                }" />

            </DxGroupItem>
        </DxForm>
    </form>
</template>