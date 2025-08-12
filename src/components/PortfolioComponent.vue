<template>
    <div class="wrap_projects grid gap-25 width-100">
        <WorkComponent
            v-for="(work, index) in PortfolioArr"
            v-show="index < quantity || quantity == 0"
            :text="work.text"
            :title="work.title"
            :img="work.img"
            :technologies="work.technologies"
        ></WorkComponent>
        <div > </div>
    </div>
</template>

<script lang="ts" setup>
    import WorkComponent from '@/components/WorkComponent.vue';
    
    // props
    const props = defineProps({
        quantity: {
            type: Number,
            default: 0
        }
    })

    // array of works
    const PortfolioArr = [
        {
            title: "Wedding",
            img: "wedding.svg",
            technologies: ['', '2', '3'],
            text: "lorem lorem lorem lorem lorem lorem lorem lorem"
        },
        {
            title: "Грузоперевозки BlackTaxi",
            img: "black-taxi.svg",
            technologies: ['1', '2', '3'],
            text: "lorem lorem lorem lorem lorem lorem lorem lorem"
        },
        {
            title: "AI Revolution",
            img: "ai.svg",
            technologies: ['1', '2', '3'],
            text: "lorem lorem lorem lorem lorem lorem lorem lorem"
        },
        {
            title: "TulpanStore - цветочный магазин",
            img: "flowers.svg",
            technologies: ['1', '2', '3'],
            text: "lorem lorem lorem lorem lorem lorem lorem lorem"
        },
        {
            title: "Мой Край - достопримечательности Липецка",
            img: "Lipetsk.svg",
            technologies: ['1', '2', '3'],
            text: "lorem lorem lorem lorem lorem lorem lorem lorem"
        },
        {
            title: "Партия Пенсионеров - региональное отделение",
            img: "pensioners.svg",
            technologies: ['1', '2', '3'],
            text: "lorem lorem lorem lorem lorem lorem lorem lorem"
        },
        {
            title: "Junior Skills - образовательная платформа",
            img: "junior-skills.svg",
            technologies: ['1', '2', '3'],
            text: "lorem lorem lorem lorem lorem lorem lorem lorem"
        },
        {
            title: "Кибербезопасный новый год - адвент календарь для КИБЕРПРОТЕКТ",
            img: "kyberprotect.svg",
            technologies: ['1', '2', '3'],
            text: "lorem lorem lorem lorem lorem lorem lorem lorem"
        },

    ]
</script>

<style scoped>
    .wrap_projects{
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 768px) {
        .wrap_projects{
            grid-template-columns: 1fr;
        }
    }
</style>