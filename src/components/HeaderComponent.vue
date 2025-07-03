<template>
    <header>
        <div class="container align-content-center grid grid-row align-items-center justify-content-space-between">
            <!-- <img src="" alt="img"> -->
             <!-- пока так (до лого) -->
            <h3 class="h3"><span style="color: var(--colorMain);" class="h3">S</span>elit</h3>
            <nav class="grid grid-row align-content-center justify-content-space-between gap-30">
                <a class="link header_link" href="#">Кейсы</a>
                <a class="link header_link" href="#">Разработка</a>
                <a class="link header_link" href="#">Услуги</a>
                <a class="link header_link" href="#">О нас</a>
                <a class="link header_link" href="#">Контакты</a>
            </nav>
            <a class="link">Обсудить проект</a>
        </div>
    </header>
</template>
    
<script lang="ts" setup>
    
</script>

<style scoped>
    header{
        background-color: var(--colorWhite);
        z-index: 5;
    }

    .header_link{
        position: relative;
    }

    .header_link::after{
        position: absolute;
        content: '';
        background-color: var(--colorMain);
        width: 0%;
        height: 1px;
        bottom: 1px;
        left: 0;
        transition: 0.2s ease-in all;
    }

    .header_link:hover::after{
        width: 100%;
    }
</style>