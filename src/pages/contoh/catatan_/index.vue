<script setup lang="ts">
import DxButton from 'devextreme-vue/button';

const route = useRoute();
const count = ref(0);
</script>
<template>
    <div>
        
        Di sini halaman {{ route?.path }}
        <br />

        <DxButton @click="count++"  type="success">
            Tambah {{ count }}
        </DxButton>

        <br />

        <RouterLink to="/123">Pergi ke halaman unit contoh</RouterLink>
    </div>
</template>