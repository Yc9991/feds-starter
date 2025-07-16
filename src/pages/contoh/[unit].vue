<script setup lang="ts">
const router = useRouter()


onMounted(() => {
    router.push({ query: { tab: 9999 } })
})


let change = () => {
    router.push({ query: { tab: 7777 } })
}
</script>
<template>
    <div>

        <button @click="change()">
            Ganti query Unit menjadi 7777
        </button>
    </div>
</template>