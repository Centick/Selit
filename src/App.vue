<template>
    <!--  Шаблон страницы  -->
    <header class="header_relative">
        <RouterLink to="/">Home</RouterLink>
    </header>
    <RouterView />
</template>

<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router';
</script>