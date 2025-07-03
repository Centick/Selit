<template>
    <!--  Шаблон страницы  -->
    <RouterView
        @skills_modal = isOpenedSkillsModal()
    />
    
    <SkillsComponent
        :class="{'skills_active': skills_is_showed, 'skills_not_active': !skills_is_showed}"
        @close_skills_modal = closeSkillsModal()
    />

    <Cursor/>
    
</template>

<script setup lang="ts">
    import { Ref, ref } from 'vue';
    import { RouterLink, RouterView } from 'vue-router';
    import SkillsComponent from '@/components/SkillsComponent.vue';
    import Cursor from '@/components/CursorComponent.vue'

    const skills_is_showed: Ref<boolean> = ref(false);

    const isOpenedSkillsModal = () => {
        skills_is_showed.value = true;
    }

    const closeSkillsModal = () => {
        skills_is_showed.value = false;
    }
</script>

<style>
    .skills_active{
        right: 0;
        transition: right .3s ease;
    }
    .skills_not_active{
        right: -100vw;
        transition: right .6s ease;
    }
    .skills_active .container{
        box-shadow: 0 0 100vw 100vw rgb(0, 0, 0, .25);
        transition: box-shadow 1s ease;
    }
    .skills_not_active .container{
        box-shadow: 0 0 100vw 0 rgb(0, 0, 0, 0);
        transition: box-shadow .1s ease;
    }
</style>