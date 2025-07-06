<template>
    <header :class="{'header_shadowed': is_header_shadowed}">
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
            <a class="link link-special weight-700" @click.prevent="isOpenedApplicationModal()">Обсудить проект <img src="@/assets/img/icons/arrow.svg" alt=""></a>
        </div>
    </header>

    <ApplicationComponent
        :class="{'modal_active': application_is_showed, 'modal_not_active': !application_is_showed}"
        @close='closeApplicationModal()'
    />
</template>
    
<script lang="ts" setup>
    import {onMounted, ref, Ref} from "vue";
    import ApplicationComponent from "./ApplicationComponent.vue";

    const is_header_shadowed: Ref<boolean> = ref(false);
    const application_is_showed: Ref<boolean> = ref(false);

    const checkPositionForHeader = () => {
        is_header_shadowed.value = window.scrollY >= 50;
    };

    onMounted(()=>{
        window.addEventListener('scroll', checkPositionForHeader);
        checkPositionForHeader();
    });

    const isOpenedApplicationModal = () => {
        application_is_showed.value = true;
        document.body.style.overflowY = "hidden";
        console.log(document.body.style)
    }
    const closeApplicationModal = () => {
        application_is_showed.value = false;
        document.body.style.overflowY = "visible";
    }
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
        bottom: 0px;
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
</style>