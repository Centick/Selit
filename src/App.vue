<template>
    <!--  Шаблон страницы  -->
    <RouterView
        @skills_modal = isOpenedSkillsModal()
    />
    
    <SkillsComponent
        v-show="skills_is_showed"
        @close_skills_modal = closeSkillsModal()
    />
</template>

<script setup lang="ts">
    import { Ref, ref } from 'vue';
    import { RouterLink, RouterView } from 'vue-router';
    import SkillsComponent from '@/components/SkillsComponent.vue';

    const skills_is_showed: Ref<boolean> = ref(false);

    const isOpenedSkillsModal = () => {
        skills_is_showed.value = true;
    }

    const closeSkillsModal = () => {
        skills_is_showed.value = false;
    }
</script>