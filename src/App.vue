<template>
    <HeaderComponent/>

    <!--  Шаблон страницы  -->
    <RouterView/>

    <Cursor/>
    
</template>

<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router';
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import Cursor from '@/components/CursorComponent.vue'

    document.title = "SELIT — Разработка цифровых решений для ваших задач"
</script>

<style>
    
</style>