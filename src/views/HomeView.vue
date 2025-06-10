<template>
    <!--  Главная страница  -->
    <header>
        <div class="container align-content-center grid grid-row justify-content-space-between">
            <!-- <img src="" alt="img"> -->
             <!-- пока так (до лого) -->
            <h3 class="h3"><span style="color: var(--colorMain);" class="h3">S</span>elit</h3>
            <nav class="grid grid-row align-content-center justify-content-space-between gap-30">
                <a class="link" href="#">Кейсы</a>
                <a class="link" href="#">Разработка</a>
                <a class="link" href="#">Услуги</a>
                <a class="link" href="#">О нас</a>
                <a class="link" href="#">Контакты</a>
            </nav>
            <button class="btn btn-header">Обсудить проект</button>
        </div>
    </header>

    <main>
        <section class="section section-banner">
            <div class="container container-banner grid grid-column gap-25 justify-items-start align-content-start">
                <h1 class="h1">Проектируем, поддерживаем и развиваем WEB-Проекты</h1>
                <div class="grid grid-row gap-10">
                    <span class="link link-banner">Landing</span>
                    <span class="link link-banner">Интернет магазины</span>
                    <span class="link link-banner">Корпоративные сайты</span>
                    <span class="link link-banner">Сайт-каталог</span>
                    <span class="link link-banner">E-commerce</span>
                </div>
            </div>
        </section>
    </main>
</template>

<script lang="ts" setup>

</script>

<style scoped>
    /* .btn-header{
        border: 1px var(--colorMain);
        color: var(--colorWhite);
    } */

    .section-banner{
        width: 100vw;
        height: 100vh;
    }

    h1{
        width: 70%;
    }

    .link-banner{
        padding: 10px 18px;
        border: 1px rgba(128, 128, 128, 0.5) solid;
        border-radius: var(--borderRadius);
    }
</style>