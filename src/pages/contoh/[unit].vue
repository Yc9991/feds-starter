<script setup lang="ts">

const route = useRoute()
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
            Change route query
        </button>
        Di sini halaman {{ route.path }} unit {{ route.params.unit }}
    </div>
</template>