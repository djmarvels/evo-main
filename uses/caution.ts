import { storePage } from '../stores/page';
import { onMounted } from 'vue-demi';

export const useCaution = () => {
    const storage = storePage();

    onMounted(() => {
        const storageCaution = localStorage.getItem('closeCaution');
        storage.setCaution(!(storageCaution));
    });
}