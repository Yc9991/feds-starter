<script setup lang="ts">

const modalStore = useModalStore()

const typeInput = ref<string>('bg-red')

function ubahBinding() {
    if(typeInput.value == 'bg-red'){
        typeInput.value = 'bg-blue'
    }else if(typeInput.value == 'bg-blue'){
        typeInput.value = 'bg-red'
    }
}
</script>
<template>
    <div class="p-6 flex flex-col">

        <button @click="ubahBinding()">
            Ubah binding
        </button>
        
        <button @click="modalStore.open = true">
            Buka modal
        </button>

        <ModalPopup :fullScreen="true" :title="modalStore.title" v-model:open="modalStore.open">
            <template #desc>
                <p class="text-red">
                    deskripsi modal
                </p>
            </template>
        </ModalPopup>

        <input type="text" :class="typeInput" class="border" v-model="modalStore.title">

        <RouterLink to="/example/menu">Pindah halaman</RouterLink>
    </div>
</template>
