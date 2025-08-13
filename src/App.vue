<template>
    <HeaderComponent @openApplication="isOpenedApplicationModal"/>

    <!--  Шаблон страницы  -->
    <RouterView @openApplication="isOpenedApplicationModal"/>

    <Cursor/>

    <FooterComponent @openApplication="isOpenedApplicationModal"/>

    <ApplicationComponent
        :class="{'modal_active': application_is_showed, 'modal_not_active': !application_is_showed}"
        @close='closeApplicationModal()'
    />
    
</template>

<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router';
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue'
    import Cursor from '@/components/CursorComponent.vue'
    import {onMounted, ref, type Ref} from "vue";
    import ApplicationComponent from "@/components/ApplicationComponent.vue";

    const application_is_showed: Ref<boolean> = ref(false);

    const isOpenedApplicationModal = () => {
        application_is_showed.value = true;
        document.body.style.overflowY = "hidden";
        console.log(document.body.style)
    }
    const closeApplicationModal = () => {
        application_is_showed.value = false;
        document.body.style.overflowY = "visible";
    }

    
</script>

<style>
</style>