<template>
    <div class="wrap_projects grid gap-25 width-100">
        <WorkComponent
            v-for="(work, index) in PortfolioArr"
            :key="index"
            data-aos="fade-up"
            :data-aos-delay="200 * (index % 2)"
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
    import {onMounted} from "vue";
    
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
            title: "The Wedding",
            img: "wedding.svg",
            technologies: ['Landing', 'Дизайн', 'Брендинг'],
            text: "Сайт для приглашения близких на свадебное мероприятие"
        },
        {
            title: "Грузоперевозки BlackTaxi",
            img: "black-taxi.svg",
            technologies: ['Многостроничный сайт', 'Дизайн', 'Брендинг'],
            text: "Сайт таксомоторной компания с функциональностью заказа такси "
        },
        {
            title: "AI Revolution",
            img: "ai.svg",
            technologies: ['AI', 'Многостроничный сайт', 'Дизайн'],
            text: "Информационный веб-сервис c функцией чата с нейросетью"
        },
        {
            title: "TulpanStore - цветочный магазин",
            img: "flowers.svg",
            technologies: ['Интернет-магазин', 'Дизайн', 'Оплата'],
            text: "Интернет-магазин для цветочной компании TulpanStore"
        },
        {
            title: "Мой Край: достопримечательности Липецка",
            img: "Lipetsk.svg",
            technologies: ['Landing', 'Дзайн'],
            text: "Информационный сайт для липецкой области"
        },
        {
            title: "Партия Пенсионеров - региональное отделение",
            img: "pensioners.svg",
            technologies: ['Landing', 'Разработка', 'UI/UX'],
            text: "Многостраничный сайт для организации Партии Пенсионеров"
        },
        {
            title: "Junior Skills",
            img: "junior-skills.svg",
            technologies: ['Образование', 'Дизайн', 'Разработка', 'Пользователи'],
            text: "Образовательная платформа для учащихся IT-cube"
        },
        {
            title: "Кибербезопасный новый год ",
            img: "kyberprotect.svg",
            technologies: ['Landing', 'Календарь', 'Дизайн'],
            text: "Адвент календарь для компании КИБЕРПРОТЕКТ"
        },
    ];

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