<script setup lang="ts" generic="T">
import { DxForm, DxSimpleItem, DxGroupItem, DxButtonItem, DxRequiredRule } from 'devextreme-vue/form'
import { DxButton } from 'devextreme-vue/button'

const { form } = useHelper()

const { input } = defineProps<{
    input: {
        list: T,
        include?: (keyof T)[],
        exclude?: (keyof T)[]
    },
    schema?: any
}>()

const formList = computed(() => {
    if (input.list) {
        //@ts-ignore
        return form().ignoreData<T>({ item: input.list, include: input.include, exclude: input.exclude })
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
        <DxForm :col-count="2" :form-data="formList">
            <slot />
        </DxForm>
        <div class="flex justify-end">
            <DxButton text="Simpan" icon="save" :useSubmitBehavior="true">
            </DxButton>
        </div>
    </form>
</template>