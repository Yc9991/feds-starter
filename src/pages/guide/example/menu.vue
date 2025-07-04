
<script setup lang="ts">
const modalStore = useModalStore()


</script>

<template>
    state di halaman berbeda {{ modalStore.title }}

    <input class="border" type="text" v-model="modalStore.title">
</template>