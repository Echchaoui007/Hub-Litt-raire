import { defineStore } from "pinia";

export const userGeneralStore = defineStore('general',{
    state:() => ({
        isPostOverlay: false,
        isCropperModel: false,
        isImageDisplay: null,
    }),
    persist :true,
})