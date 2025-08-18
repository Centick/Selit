<template>
    <section class="section error404__section">
        <div class="container grid grid-column gap-15 align-items-center justify-items-center">
            <h1 class="text-align-center error_num weight-700">Ошибка 404</h1>
            <p class="text-align-center h6">Страница не найдена или находится в блоке/архиве/на проверке</p>
            <router-link :to="'/'" class="btn" ><span class="h6 span_btn" > < Вернуться</span></router-link>
        </div>
    </section>

</template>

<script lang="ts" setup>

    const emits = defineEmits(['loaded']);
    emits('loaded');
</script>

<style scoped>
    .error404__section{
        width: 100vw;
        height: 100vh;
    }

    .error_num{
        font-size: 100px;
    }

    @media (max-width: 576px) {
        .error_num{
            font-size: 90px;
        }
    }
</style>