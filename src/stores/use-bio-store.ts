//definisi pinia store untuk use-modal-store
export const useBioStore = defineStore('use-bio-store', () => {


    interface Data {
        name: string;
        age: number | null;
        job: string;
    }
    const currentData = ref<Data>({
        name: '',
        age: null,
        job: ''
    })

    const openModal = ref(false)

    const data = ref<Data[]>([
        { name: 'Alice', age: 25, job: 'Software Developer' },
        { name: 'Bob', age: 30, job: 'Graphic Designer' },
        { name: 'Charlie', age: 28, job: 'Data Analyst' },
        { name: 'Diana', age: 35, job: 'Project Manager' },
        { name: 'Evan', age: 22, job: 'Marketing Specialist' },
        { name: 'Fiona', age: 27, job: 'UI/UX Designer' },
        { name: 'George', age: 32, job: 'DevOps Engineer' },
        { name: 'Hana', age: 29, job: 'Quality Assurance' },
        { name: 'Ian', age: 26, job: 'System Administrator' },
        { name: 'Julia', age: 31, job: 'Product Owner' }
    ]);

    function openEditModal({ item }: {item: Data}) {
        openModal.value = true
        currentData.value = item
    }

    return {
        data,
        openModal,
        currentData,
        openEditModal
    }

})