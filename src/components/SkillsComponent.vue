<template>
    <section class="section modal__section grid justify-items-end">
        <div class="container modal__container grid justify-content-start gap-20">
            <img @click.prevent="emits('close_skills_modal')" class="cross" src="../assets/img/icons/cross.svg" alt="img">
            <h3 class="h2 width-100">Технологии</h3>
            <p class="width-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores culpa eveniet, cumque beatae in sequi, deserunt inventore voluptate doloribus rem natus incidunt aperiam ad vero saepe ullam dolorum corporis nostrum!</p>
            <div class="skills_wrap width-100 gap-10">
                <div class="skills_block grid grid-row justify-content-space-between">
                    <span class="skills_title">Frontend</span>
                    <div style="max-width: 50%;" class="grid grid-row gap-10">
                        <span>JavaScript</span>
                        <!-- как пример - ромбик -->
                        <span>&#9674;</span>
                        <span>TypeScript</span>
                        <!-- как пример - ромбик -->
                        <span>&#9674;</span>
                        <span>Vue.js</span>
                        <!-- как пример - ромбик -->
                        <span>&#9674;</span>
                        <span>React</span>
                    </div>
                </div>
                
                <div class="skills_block grid grid-row justify-content-space-between">
                    <span class="skills_title">Backend</span>
                    <div style="max-width: 50%;" class="grid grid-row gap-10">
                        <span>PHP8</span>
                        <!-- как пример - ромбик -->
                        <span>&#9674;</span>
                        <span>Laravel</span>
                        <!-- как пример - ромбик -->
                        <span>&#9674;</span>
                        <span>Django</span>
                        <!-- как пример - ромбик -->
                        <span>&#9674;</span>
                        <span>Node.js</span>
                    </div>
                </div>

                <div class="skills_block grid grid-row justify-content-space-between">
                    <span class="skills_title">База данных</span>
                    <div style="max-width: 50%;" class="grid grid-row gap-10">
                        <span>MySQL</span>
                        <span>&#9674;</span>
                        <span>SQLite</span>
                    </div>
                </div>

                <div class="skills_block grid grid-row justify-content-space-between">
                    <span class="skills_title">Дизайна</span>
                    <div style="max-width: 50%;" class="grid grid-row gap-10">
                        <span>Figma</span>
                        <span>&#9674;</span>
                        <span>Photoshop</span>
                        <span>&#9674;</span>
                        <span>Illustrator</span>
                    </div>
                </div>

                <div class="skills_block grid grid-row justify-content-space-between">
                    <span class="skills_title">CMS</span>
                    <div style="max-width: 50%;" class="grid grid-row gap-10">
                        <span>Wordpress</span>
                    </div>
                </div>

                <div class="skills_block grid grid-row justify-content-space-between">
                    <span class="skills_title">Другое</span>
                    <div style="max-width: 50%;" class="grid grid-row gap-10">
                        <span>asd</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    // import { ref } from 'vue'
    
    const emits = defineEmits(['close_skills_modal']);
    
</script>

<style scoped>
    .skills_block{
        padding: 20px 0;
        border-bottom: 2px solid var(--colorGrey);
    }

    .skills_title{
        font-size: 22px;
        /* color: ; */
    }    
</style>