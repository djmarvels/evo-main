import { defineStore } from 'pinia';

export const storePage = defineStore({
    id: 'page',
    state: () => ({
        caution: false,
    }),
    getters: {
        getCaution: state => state.caution,
    },
    actions: {
        setCaution(status: boolean) {
            this.caution = status;
        },
    }
});