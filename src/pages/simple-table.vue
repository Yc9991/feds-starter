<script setup lang="ts">


const bioStore = useBioStore()


</script>
<template>

    <table class="table-auto w-full">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(lp, index) in bioStore.data" :key="index">
                <td>{{ lp.name }}</td>
                <td>{{ lp.age }}</td>
                <td>{{ lp.job }}</td>
                <th>
                    <button @click="bioStore.openEditModal({ item: lp })">
                        Edit
                    </button>
                </th>
            </tr>
        </tbody>
    </table>

    <ModalPopup :fullScreen="true" title="Edit Bio" v-model:open="bioStore.openModal">
        <template #desc>
            <p class="text-red">
                {{ bioStore.currentData }}
            </p>
        </template>
    </ModalPopup>

</template>