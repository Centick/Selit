<template>
    <section @click.prevent="close()" class="section modal__section grid justify-items-end">
        <div @click.prevent="container_clicked()" class="container modal__container grid justify-content-start gap-20">
            <img @click.prevent="close()" class="cross" src="../assets/img/icons/cross.svg" alt="img">
            <h3 class="h2 width-100">Технологии</h3>
            <p>Раздел «Технологии» отражает наши инструменты и решения. Постоянно осваивая новинки, мы достигаем лучших результатов. Применяем проверенные и инновационные методы, адаптированные под каждый проект. Клиенты получают актуальные знания благодаря регулярному обновлению раздела.</p>
            <div class="skills_wrap width-100 gap-10">
                <div class="skills_block grid grid-row align-items-start justify-content-space-between justify-items-start gap-50">
                    <span class="skills_title">Frontend</span>
                    <div class="flex-wrap gap-10 align-items-center">
                        <span>JavaScript</span>
                        <div class="ball-mainColor"></div>
                        <span>TypeScript</span>
                        <div class="ball-mainColor"></div>
                        <span>Vue.js</span>
                        <div class="ball-mainColor"></div>
                        <span>React</span>
                    </div>
                </div>
                
                <div class="skills_block grid grid-row align-items-start justify-content-space-between gap-75">
                    <span class="skills_title grid">Backend</span>
                    <div class="flex-wrap gap-10 align-items-center">
                        <span>PHP8</span>
                        <div class="ball-mainColor"></div>
                        <span>Laravel</span>
                        <div class="ball-mainColor"></div>
                        <span>Django</span>
                        <div class="ball-mainColor"></div>
                        <span>Node.js</span>
                    </div>
                </div>

                <div class="skills_block grid grid-row align-items-start justify-content-space-between gap-50">
                    <span class="skills_title">База данных</span>
                    <div class="flex-wrap gap-10 align-items-center">
                        <span>MySQL</span>
                        <div class="ball-mainColor"></div>
                        <span>SQLite</span>
                    </div>
                </div>

                <div class="skills_block grid grid-row align-items-start  justify-content-space-between gap-100">
                    <span class="skills_title">Дизайна</span>
                    <div class="flex-wrap gap-10 align-items-center">
                        <span>Figma</span>
                        <div class="ball-mainColor"></div>
                        <span>Photoshop</span>
                        <div class="ball-mainColor"></div>
                        <span>Illustrator</span>
                    </div>
                </div>

                <div class="skills_block grid grid-row align-items-start justify-content-space-between gap-50">
                    <span class="skills_title">CMS</span>
                    <div class="flex-wrap gap-10 align-items-center">
                        <span>Wordpress</span>
                    </div>
                </div>

                <div class="skills_block grid grid-row align-items-start justify-content-space-between gap-50">
                    <span class="skills_title">Другое</span>
                    <div class="flex-wrap gap-10 align-items-center">
                        <span>asd</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    // import { ref } from 'vue'

    import {ref, Ref} from "vue";

    const emits = defineEmits(['close']);

    const is_container_clicked: Ref<boolean> = ref(false);

    const close = () => {
        if(!is_container_clicked.value){
            emits('close');
        }
    };

    const container_clicked = () => {
        is_container_clicked.value = true;
        setTimeout(() => {
            is_container_clicked.value = false;
        }, 100);
    };
    
</script>

<style scoped>
    .skills_block{
        padding: 30px 0;
        border-bottom: 2px solid var(--colorGrey);
    }

    .skills_title{
        font-size: 22px;
        /* color: ; */
    }

    .ball-mainColor{
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: var(--colorMain);
    }

    .flex-wrap{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        /* max-width: 90%; */
    }
</style>