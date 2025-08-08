<template>
    <header :class="{'header_shadowed': is_header_shadowed}">
        <div class="container align-content-center grid grid-row align-items-center justify-content-space-between">
            <!-- <img src="" alt="img"> -->
             <!-- пока так (до лого) -->
            <h3 class="h3"><span style="color: var(--colorMain);" class="h3">S</span>elit</h3>
            <nav :class="{'main_menu_active': menu_opened}" class="grid grid-row align-content-center justify-content-space-between gap-25 main_menu">
                <div class="menu__cross" @click="menu_opened = !menu_opened">
                    <img class="width-100" src="../assets/img/icons/cross.svg" alt="cross">
                </div>
                <a class="link header_link" @click="menu_opened = !menu_opened" href="#">Кейсы</a>
                <a class="link header_link" @click="menu_opened = !menu_opened" href="#">Разработка</a>
                <a class="link header_link" @click="menu_opened = !menu_opened" href="#">Услуги</a>
                <a class="link header_link" @click="menu_opened = !menu_opened" href="#">О нас</a>
                <a class="link header_link" @click="menu_opened = !menu_opened" href="#">Контакты</a>
            </nav>
            <a class="link link-special weight-700" @click.prevent="emits('openApplication')">Обсудить проект <img src="@/assets/img/icons/arrow.svg" alt=""></a>
            <div class="menu__burger" @click="menu_opened = !menu_opened">
                <svg viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> </g></svg>
            </div>
        </div>
    </header>
</template>
    
<script lang="ts" setup>
    import {onMounted, ref} from "vue";
    import type { Ref } from "vue";
    import ApplicationComponent from "./ApplicationComponent.vue";

    const menu_opened: Ref<boolean> = ref(false);

    const is_header_shadowed: Ref<boolean> = ref(false);

    const checkPositionForHeader = () => {
        is_header_shadowed.value = window.scrollY >= 50;
    };

    onMounted(()=>{
        window.onscroll = checkPositionForHeader;
        checkPositionForHeader();

        window.addEventListener('click', (e) => {
            console.log(window.outerWidth - 320, e.x);
            if(menu_opened.value && window.innerWidth - 320 > e.x){
                menu_opened.value = false;
            }
        })
    });

    const emits = defineEmits(['openApplication']);
</script>

<style scoped>
    header{
        z-index: 5;
        transition: box-shadow .3s ease, background-color .3s ease;
    }

    .header_link{
        position: relative;
    }

    .header_link::after{
        position: absolute;
        content: '';
        background-color: var(--colorMain);
        width: 0;
        height: 1px;
        bottom: 0;
        left: 0;
        transition: 0.2s ease-in all;
    }

    .header_link:hover::after{
        width: 100%;
    }

    .header_shadowed{
        box-shadow: #dfdfdf 0 1px 5px 0;
        background-color: var(--colorWhite);
    }

    .menu__burger, .menu__cross{
        display: none;
        cursor: pointer;
        width: 30px;
        height: 30px;
    }

    .menu__cross{
        width: 20px;
        height: 20px;
        top: 20px;
        right: 20px;
        position: absolute;
    }

    /* TODO: Доделать бергер меню */
    @media (max-width: 768px) {
        .main_menu{
            grid-auto-flow: row;
            height: 100vh;
            position: fixed;
            top: 0;
            right: -320px;
            width: 320px;
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0) 0 0 0 100vw;
            padding: 50px;
            align-content: start;
            transition: all .3s ease;
            justify-items: start;
        }
        .main_menu_active{
            right: 0;
            box-shadow: rgba(0, 0, 0, 0.3) 0 0 0 100vw;
        }
        .menu__burger, .menu__cross{
            display: block;
        }

        .header_link{
            font-size: var(--h6);
        }
    }
</style>