<script setup lang="ts" generic="T">
import { DxForm, DxSimpleItem, DxGroupItem, DxButtonItem, DxValidationRule } from 'devextreme-vue/form'

import type { TableForm } from '@/types'

const props = defineProps<TableForm<T>>()
const { odataForm, validateAllSchema, clearSchemaValidation, validateAllSchemaCheck } = useHelper()
const emit = defineEmits<{
    submit: [dom: Event]
}>()

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

const dxForm = ref<DxForm | null>(null)
const errorRef = ref<Record<string, { valid: boolean, message: string }>>({})

function setCustomError({ errors }: { errors: { dataField: string; message: string }[] }) {
    const formEl = dxForm.value?.instance?.element()
    if (!formEl) return

    for (const { dataField, message } of errors) {
        const inputEl = formEl.querySelector(`input[name="${dataField}"]`)
        if (!inputEl) {
            console.warn(`Input with name="${dataField}" not found`)
            continue
        }

        const itemContainer = inputEl.closest('.dx-field-item')
        if (!itemContainer) {
            console.warn(`Container for ${dataField} not found`)
            continue
        }

        const editorEl = itemContainer.querySelector('.dx-texteditor, .dx-dropdowneditor, .dx-selectbox')
        if (!editorEl) {
            console.warn(`Editor for ${dataField} not found`)
            continue
        }

        editorEl.classList.add('dx-invalid')

        // Remove previous error message if exists
        itemContainer.querySelector('.dx-invalid-message')?.remove()

        const errorMessage = document.createElement('div')
        errorMessage.className = 'dx-invalid-message dx-overlay'
        errorMessage.innerText = message
        itemContainer.appendChild(errorMessage)
    }
}

let validate = async (dom: Event) => {
    const formInstance = dxForm.value?.instance
    if (formInstance) {



        const schemaKeys = Object.keys(props.input.schema.fields)
        const data = dom.target as HTMLFormElement;
        const extractedData = odataForm().extractData<T>({ dom: data }) as any

        const input = schemaKeys.reduce((acc, key) => {
            acc[key] = extractedData[key];
            return acc;
        }, {} as Record<string, string>)

        const error = schemaKeys.reduce((acc, key) => {
            acc[key] = { valid: false, message: '' };
            return acc;
        }, {} as Record<string, { valid: boolean, message: string }>)

        errorRef.value = error


        // @ts-ignore
        await validateAllSchema({ schema: props.input.schema, input: input, error: errorRef.value }, async () => {
            clearSchemaValidation({ error: errorRef })
            clearCustomError(schemaKeys)

            emit('submit', dom)
        })

        if (validateAllSchemaCheck(errorRef.value)) {
            setCustomError({ errors: convertErrorMapToArray(errorRef.value) })

        }
    }
}

function clearCustomError(dataFields?: string[]) {
    const formEl = dxForm.value?.instance?.element()
    if (!formEl) return

    const inputs = dataFields?.length
        ? dataFields.flatMap((field) => Array.from(formEl.querySelectorAll(`input[name="${field}"]`)))
        : Array.from(formEl.querySelectorAll(`input[name]`))

    for (const inputEl of inputs) {
        const itemContainer = inputEl.closest('.dx-field-item')
        const editorEl = itemContainer?.querySelector('.dx-texteditor, .dx-dropdowneditor, .dx-selectbox')

        editorEl?.classList.remove('dx-invalid')
        itemContainer?.querySelector('.dx-invalid-message')?.remove()
    }
}


function convertErrorMapToArray(
    errorMap: Record<string, { valid: boolean; message?: string }>
): { dataField: string; message: string }[] {
    return Object.entries(errorMap)
        .filter(([_, v]) => v && v.valid === false)
        .map(([dataField, v]) => {
            return {
                dataField,
                message: String(v.message)
            }
        })
}

</script>
<template>
    <form @submit.prevent="validate" class="relative">
        <DxForm ref="dxForm" v-bind="form" :form-data="input.list" v-if="input.list">

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