<script setup lang="ts">

const count = ref(0)

</script>

<template>
    <button @click="count++">
        Klik
    </button>
    <div>
        deeper routing {{ count }}
    </div>
</template>