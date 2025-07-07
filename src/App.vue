<template>
    <HeaderComponent/>

    <!--  Шаблон страницы  -->
    <RouterView/>

    <Cursor/>

    <FooterComponent/>
    
</template>

<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router';
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue'
    import Cursor from '@/components/CursorComponent.vue'
    

    document.title = "Разработка цифровых решений для ваших задач"
</script>

<style>
    
</style>