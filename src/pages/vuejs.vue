<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false)

</script>
<template>
    <div class="p-6">

        <button @click="open = true">
            Open Modal
        </button>

        <div v-if="open" class=" fixed inset-0 z-50  w-full inset-0 ">
            <div class="relative w-full mx-auto h-full flex items-start justify-center py-12">
                <div class="absolute bg-black/30 inset-0">

                </div>
                <div class="relative bg-white rounded-lg shadow-md border border-gray-200 w-80 h-auto">
                    <div class="flex items-center justify-between p-3  border-b rounded-t border-gray-200">
                        <h3 class="text-xl font-semibold text-gray-900">
                            Modal
                        </h3>
                        <button type="button" @click="open = false"
                            class="cursor-pointer text-gray-400 bg-transparent  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center ">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close</span>
                        </button>
                    </div>
                    <div class="p-3 break-words">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
