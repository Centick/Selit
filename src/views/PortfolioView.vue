<template>
    <section class="section">
        <div class="container">
            <nav class="grid grid-row gap-15 width-100 justify-content-start navigation">
                <router-link :to="'/'" class="link header_link">Главная</router-link>
                <span>/</span>
                <router-link :to="'/portfolio'" class="link header_link">Кейсы</router-link>
            </nav>
            <h1 class="h1 width-100">Кейсы</h1>
            <PortfolioComponent/>
            
        </div>
    </section>
</template>

<script lang="ts" setup>
    import PortfolioComponent from '@/components/PortfolioComponent.vue';

    const emits = defineEmits(['loaded']);
    emits('loaded');
</script>

<style scoped>

</style>