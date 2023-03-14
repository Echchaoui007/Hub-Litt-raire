<script setup>
    import { ref } from 'vue';
    import { Link,userPage } from '@inertiajs/vue3';


    import Magnify from 'vue-material-design-icons/Magnify.vue'
    import Home from 'vue-material-design-icons/Home.vue'
    import HomeOutline from 'vue-material-design-icons/HomeOutline.vue'
    import TelevisionPlay from 'vue-material-design-icons/TelevisionPlay.vue'
    import StorefrontOutline from 'vue-material-design-icons/StorefrontOutline.vue'
    import AccountGroup from 'vue-material-design-icons/AccountGroup.vue'
    import ControllerClassicOutline from 'vue-material-design-icons/ControllerClassicOutline.vue'
    import DotsGrid from 'vue-material-design-icons/DotsGrid.vue'
    import FacebookMessenger from 'vue-material-design-icons/FacebookMessenger.vue'
    import Bell from 'vue-material-design-icons/Bell.vue'
    import Logout from 'vue-material-design-icons/Logout.vue'

    import { userGeneralStore } from '@/stores/general';
    import { storeToRefs } from 'pinia';
    const useGeneral = useGeneralStore()
    const { isPostOverlay,isCropperModal,isImageDisplay} = storeToRefs(useGeneral)


    const user     = userPage().props.auth.user

    let   showMenu = ref(false)


</script>

<template>
   
    <div 
    id   ="MainNav"
    class="fixed z-50 w-full flex items-center justify-between h-[56px] bg-white shadow-xl border-b">

        <div id="NavLeft" class="flex items-center justify-start w-[260px]">
            <Link href="/" class="pl-3 min-w-[55px]">
                book
            </Link>
            
        </div>
    </div>
    <slot />
</template>
