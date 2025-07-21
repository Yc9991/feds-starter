<script setup lang="ts">


const props = withDefaults(defineProps<{
    onClick?: Function,
    shortcut?: string,
}>(), {

})

const keys = useMagicKeys()
const chooseSelectEl = ref<HTMLElement>()

watch(keys[String(props?.shortcut)], (v) => {
    if (v && props.shortcut && props.onClick) props.onClick()
})
</script>
<template>
    <div ref="chooseSelectEl" class="flex flex-nowrap relative">
        <slot/>
    </div>
</template>
