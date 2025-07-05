<template>
    <HeaderComponent/>

    <!--  Шаблон страницы  -->
    <RouterView/>
    

    <Cursor/>
    
</template>

<script setup lang="ts">
    import {onMounted, Ref, ref} from 'vue';
    import { RouterLink, RouterView } from 'vue-router';
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import Cursor from '@/components/CursorComponent.vue'

</script>

<style>
    
</style>