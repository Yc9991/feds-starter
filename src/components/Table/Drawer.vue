<script setup lang="ts">
import FlexibleColumnLayout from "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js"
import { useHead } from "@unhead/vue";

const layout = defineModel<FlexibleColumnLayout['layout']>('layout', { required: true })

defineProps<{
    midColumnTitle?: string,
    endColumnTitle?: string
}>()

useHead({
    htmlAttrs: {
        class: () => layout.value != 'OneColumn' ? 'overflow-hidden' : 'overflow-auto'
    },
})


let expandDetail = ({ type }: { type: 'end' | 'mid' }) => {
    const full = type == 'mid' ? 'MidColumnFullScreen' : 'EndColumnFullScreen'
    const expaned = type == 'mid' ? 'TwoColumnsMidExpanded' : 'ThreeColumnsEndExpanded'

    if (layout.value == full) {
        layout.value = expaned
    } else {
        layout.value = full
    }
}

let closeDetail = ({ type }: { type: 'end' | 'mid' }) => {
    const logic = type == 'mid' ? ['MidColumnFullScreen', 'TwoColumnsMidExpanded', 'TwoColumnsStartExpanded', 'TwoColumnsEndExpanded'] :
        ['EndColumnFullScreen', 'ThreeColumnsMidExpanded', 'ThreeColumnsStartExpanded', 'ThreeColumnsEndExpanded']

    if (logic.includes(layout.value)) {
        if (type == 'mid') {
            layout.value = 'OneColumn'
        }
        if (type == 'end') {
            layout.value = 'TwoColumnsStartExpanded'
        }
    }
}

</script>




<template>
    <ui5-flexible-column-layout :layout="layout" class="bg-white">
        <div class="col" slot="startColumn">

            <slot name="startColumn" />

        </div>


        <div class="col min-h-screen" slot="midColumn">

            <div class="flex flex-row justify-between  items-center  border-b flex-wrap overflow-hidden px-3">
                <ui5-title level="H2" class="font-bold">
                    {{ midColumnTitle }}
                </ui5-title>
                <div class="flex flex-row gap-3 items-center">
                    <slot name="midColumnButton" />
                    <VBtn color="primary" variant="text" icon="mdi-arrow-expand" @click="expandDetail({ type: 'mid' })">
                    </VBtn>
                    <VBtn color="primary" variant="text" icon="mdi-close" @click="closeDetail({ type: 'mid' })">
                    </VBtn>
                </div>
            </div>

            <slot name="midColumn" />
        </div>

        <div class="col min-h-screen" slot="endColumn">

            <div class="flex flex-row justify-between  items-center  border-b flex-wrap overflow-hidden px-3">
                <ui5-title level="H2" class="font-bold">
                    {{ endColumnTitle }}
                </ui5-title>
                <div class="flex flex-row gap-3 items-center flex-wrap">

                    <slot name="endColumnButton" />

                    <VBtn color="primary" variant="text" icon="mdi-arrow-expand" @click="expandDetail({ type: 'end' })">
                    </VBtn>
                    <VBtn color="primary" variant="text" icon="mdi-close" @click="closeDetail({ type: 'end' })">
                    </VBtn>
                </div>
            </div>


            <slot name="endColumn" />
        </div>

    </ui5-flexible-column-layout>
</template>