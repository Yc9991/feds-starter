<script setup lang="ts">

const route = useRoute();
</script>
<template>
    <div>
        Di sini halaman {{ route?.path }}

        <br />

        <RouterLink to="/123">Pergi ke halaman unit contoh</RouterLink>
    </div>
</template>