
//definisi pinia store untuk use-modal-store
export const useModalStore = defineStore('use-modal-store', () => {

    const open = ref<boolean>(false)
    const title = ref<string>('')

    return {
        open,
        title
    }

})