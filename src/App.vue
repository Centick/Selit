<template>
    <!--  Шаблон страницы  -->
    <RouterView/>
    <!-- <RouterLink to="/">Home</RouterLink> -->
    <SkillsComponent/>
</template>

<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router';
    import SkillsComponent from '@/components/SkillsComponent.vue'
</script>