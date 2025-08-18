<template>
    <HeaderComponent @openApplication="isOpenedApplicationModal"/>

    <!--  Шаблон страницы  -->
    <RouterView @loaded="isLoaded = true" @openApplication="isOpenedApplicationModal"/>

    <Cursor
    v-if="!isCursor"
    />

    <PreloaderComponent v-if="!isLoaded"></PreloaderComponent>

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
    import {onMounted, onBeforeUnmount, ref, type Ref} from "vue";
    import ApplicationComponent from "@/components/ApplicationComponent.vue";
    import PreloaderComponent from "@/components/PreloaderComponent.vue";
    import AOS from 'aos';

    const application_is_showed: Ref<boolean> = ref(false);

    const isLoaded: Ref<boolean> = ref(false);

    const isOpenedApplicationModal = () => {
        application_is_showed.value = true;
        document.body.style.overflowY = "hidden";
    }
    const closeApplicationModal = () => {
        application_is_showed.value = false;
        document.body.style.overflowY = "visible";
    }

    document.title = "Разработка цифровых решений для ваших задач";

    onMounted(() => {
        AOS.init();
    });


    // Cursor убирается если width < 1024px
    const isCursor = ref(false);

    function checkScreenSize() {
        isCursor.value = window.innerWidth < 1024;
    }

    onMounted(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', checkScreenSize);
    });

    
</script>

<style>
</style>