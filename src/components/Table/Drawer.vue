<script setup lang="ts">
import { StringCollection } from "@odata2ts/odata-query-objects";
import FlexibleColumnLayout from "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js"

const layout = defineModel<FlexibleColumnLayout['layout']>('layout', { required: true })


defineProps<{
    midColumnTitle?: string
}>()


let expandDetail = () => {
    if (layout.value == 'MidColumnFullScreen') {
        layout.value = 'TwoColumnsMidExpanded'
    } else {
        layout.value = 'MidColumnFullScreen'
    }
}

let closeDetail = () => {
    if (['MidColumnFullScreen', 'TwoColumnsMidExpanded'].includes(layout.value)) {
        layout.value = 'OneColumn'
    }
}

</script>




<template>
    <ui5-flexible-column-layout :layout="layout" class="bg-white">
        <div class="col" slot="startColumn">

            <slot name="startColumn" />

        </div>


        <div class="col" slot="midColumn">

            <div class="flex flex-row justify-between  items-center  border-b flex-wrap overflow-hidden">
                <ui5-title level="H2" class="font-bold">
                    {{ midColumnTitle }}
                </ui5-title>
                <div class="flex flex-row gap-3 items-center">

                    <slot name="midColumnButton" />

                    <VBtn color="primary" variant="text" icon="mdi-arrow-expand" @click="expandDetail()">
                    </VBtn>
                    <VBtn color="primary" variant="text" icon="mdi-close" @click="closeDetail()">
                    </VBtn>
                </div>
            </div>

            <slot name="midColumn" />

        </div>

    </ui5-flexible-column-layout>
</template>