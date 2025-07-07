<template>
    <footer>
        <div class="container grid grid-column width-100 gap-25">
            <div class="grid grid-row width-100 grid-2rows_new gap-25">
                <div class="grid grid-column gap-50">
                    <div>
                        <span class="h6">Свяжитесь с нами</span>
                        <div class="grid grid-2rows">
                            <div class="grid grid-column gap-5 justify-content-start">
                                <a href="mail:hello@selit.ru" class="link footer_link h2">hello@selit.ru</a>
                                <a href="tel:+7 909 223 90 03" class="link footer_link h2">+7&nbsp;909&nbsp;223&nbsp;90&nbsp;03</a>
                                <div class="grid grid-row align-items-center justify-content-start gap-25">
                                    <a href="#" class="link footer_link h4 grid grid-row align-items-center justify-content-start gap-10">
                                        <img class="footer_icon-network" src="@/assets/img/icons/telegramm.svg" alt="img">
                                        Telegramm
                                    </a>
                                    <a href="#" class="link footer_link h4 grid grid-row align-items-center justify-content-start gap-10">
                                        <img class="footer_icon-network" src="../assets/img/icons/whatsapp.svg" alt="img">
                                        Whatsapp
                                    </a>
                                </div>
                            </div>
                            <div class="grid grid-column justify-items-end align-content-start gap-10">
                                <button class="btn btn--white"><span class="h6">Обсудить проект</span></button>
                                <a href="#" class="link footer_link h3">Заполнить Бриф</a>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-row align-items-start justify-content-space-between gap-15">
                        <div class="grid grid-column gap-10 ">
                            <span class="h6">Новигация</span>
                            <nav class="grid grid-column gap-5 align-items-center justify-content-start">
                                <a href="#" class="link footer_link footer_link--mini weight-300">Lorem</a>
                                <a href="#" class="link footer_link footer_link--mini weight-300">Lorem</a>
                                <a href="#" class="link footer_link footer_link--mini weight-300">Lorem</a>
                                <a href="#" class="link footer_link footer_link--mini weight-300">Lorem</a>
                            </nav>
                        </div>
                        <div class="grid grid-column gap-10 ">
                            <span class="h6">О компании</span>
                            <nav class="grid grid-column gap-5 align-items-center justify-content-start">
                                <a href="#" class="link footer_link footer_link--mini weight-300">Selit</a>
                                <a href="#" class="link footer_link footer_link--mini weight-300">Отзывы</a>
                                <a href="#" class="link footer_link footer_link--mini weight-300">Портфолио</a>
                                <a href="#" class="link footer_link footer_link--mini weight-300">Вакансии</a>
                            </nav>
                        </div>
                        <div class="grid grid-column gap-10 ">
                            <span class="h6">Сообщества</span>
                            <nav class="grid grid-column gap-5 align-items-center justify-content-start">
                                <a href="#" class="link footer_link footer_link--mini weight-300 grid grid-row gap-5 align-items-center justify-content-start">
                                    Telegramm
                                    <img class="footer_icon--link" src="@/assets/img/icons/link.svg" alt="img">
                                </a>
                                <a href="#" class="link footer_link footer_link--mini weight-300 grid grid-row gap-5 align-items-center justify-content-start">
                                    Вконтакте
                                    <img class="footer_icon--link" src="@/assets/img/icons/link.svg" alt="img">
                                </a>
                                <a href="#" class="link footer_link footer_link--mini weight-300 grid grid-row gap-5 align-items-center justify-content-start">
                                    YouTube
                                    <img class="footer_icon--link" src="@/assets/img/icons/link.svg" alt="img">
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div class="grid grid-row align-items-start justify-content-space-between gap-15">
                        <p>© 2025 Selit Digital Production</p>
                        <a href="#">Политика конфиденциальности</a>
                    </div>
                </div>
                <div class="wrap_card grid align-items-center justify-items-center">
                    <img src="../assets/img/footer/card.svg" alt="img">
                </div>
            </div>
            <img class="footer_phrase" src="@/assets/img/footer/footer-phrase.svg" alt="img">
        </div>
        </footer>
</template>

<script lang="ts" setup>

</script>

<style scoped>
    footer > .container *{
        color: white;
    }
    
    .grid-2rows_new{
        grid-template-columns: 2fr 1fr;
    }

    .grid-2rows{
        grid-template-columns: 1fr 1fr;
    }

    .footer_communities{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .footer_icon-network{
        width: 24px;
    }

    .footer_icon--link{
        width: 16px;
    }

    .btn--white{
        background-color: var(--colorWhite);
    }

    .btn--white > span{
        color: var(--colorBlack);
    }

    .footer_phrase{
        position: absolute;
        width: 99%;
        bottom: 0;
    }

    .wrap_card > img{
        width: 100%;
    }

    .footer_link{
        position: relative;
        width: fit-content;
    }

    .footer_link::before{
        position: absolute;
        content: '';
        background-color: var(--colorWhite);
        width: 0;
        height: 2px;
        bottom: 0px;
        left: 0;
        transition: 0.2s ease-in all;
    }

    .footer_link--mini::before{
        height: 1px;
    }

    .footer_link:hover::before{
        width: 100%;
    }
</style>