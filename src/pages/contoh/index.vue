<script setup lang="ts">

const route = useRoute();
</script>
<template>
    <div>
        Di sini halaman {{ route.path }}
    </div>
</template>