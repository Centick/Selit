<template>
    <div class="block_project grid grid-column gap-15">
        <img class="view_content width-100" :src="'/src/assets/img/projects/cards/' + img" alt="img">
        <h4 class="h4">{{ title }}</h4>
        <p>{{ text }}</p>
        <div class="wrap_character_project grid grid-row gap-10">
            <span class="block_character_project" v-for="tech in technologies">{{ tech }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps(['img', 'title', 'technologies', 'text']);
</script>

<style scoped>
    /* projects */

    .view_content{
        /* height: 500px; */
        border-radius: var(--borderRadius);
        object-fit: cover;
    }

    .block_character_project{
        padding: 10px 18px;
        border: 1px rgba(128, 128, 128, 0.5) solid;
        border-radius: var(--borderRadius);
        width: fit-content;
    }

    .wrap_character_project{
        width: fit-content;
    }
</style>