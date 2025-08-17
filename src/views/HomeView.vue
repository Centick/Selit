<template>
    <!--  Главная страница  -->
    <main>
        <section class="section section-banner">
            <div class="container container-banner grid grid-column gap-25 justify-items-center align-content-center">
                <h1 class="h1 banner_h1" data-aos="fade-up"><span class="line">Разрабатываем</span>, продвигаем и развиваем <span class="line">Web&#8209;сервисы</span></h1>
                <p data-aos="fade-up" data-aos-delay="100">Помогаем бизнесу автоматизировать процессы и повышать лояльность клиентов, а стартапам быстро выводить продукт на рынок</p>
                <button class="btn" data-aos="fade-up" data-aos-delay="150" @click.prevent="emits('openApplication')"><span class="h6 span_btn" >Оценить проект</span></button>
                <MarqueeComponent></MarqueeComponent>
            </div>
        </section>

        <section class="section">
            <div class="container grid grid-column">
                <img class="arrow_bg" src="@/assets/img/icons/arrow_bg.svg" alt="Курсор">
                <h2 class="h2 width-100">Услуги</h2>
                <div class="wrap_services grid grid-column width-100">
                    <div data-aos="fade-up" class="block_services grid align-items-start width-100">
                        <h4 class="h4">Разработка</h4>
                        <div class="name_services gap-10">
                            <a class="link service_link" @click.prevent="emits('openApplication')">Landing</a>
                            <a class="link service_link" @click.prevent="emits('openApplication')">eCommerce</a>
                            <a class="link service_link" @click.prevent="emits('openApplication')">Интернет-магазины</a>
                            <a class="link service_link" @click.prevent="emits('openApplication')">Веб-приложений</a>
                            <a class="link service_link" @click.prevent="emits('openApplication')">Многостраничных сайтов</a>
                        </div>
                    </div>
                    <div data-aos="fade-up" class="block_services grid align-items-start width-100">
                        <h4 class="h4">Поддержка</h4>
                        <div class="name_services gap-10">
                            <a class="link service_link" @click.prevent="emits('openApplication')">CMS</a>
                            <a class="link service_link" @click.prevent="emits('openApplication')">Техническое сопровождение</a>
                            <a class="link service_link" @click.prevent="emits('openApplication')">SEO-продвижение</a>
                            <a class="link service_link" @click.prevent="emits('openApplication')">Консалтинг</a>
                        </div> 
                    </div>
                    <div data-aos="fade-up" class="block_services grid align-items-start width-100">
                        <h4 class="h4">Дизайн</h4>
                        <div class="name_services gap-10">
                            <a class="link service_link" @click.prevent="emits('openApplication')">Разработка веб-дизайна</a>
                            <a class="link service_link" @click.prevent="emits('openApplication')">Верстка</a>
                            <a class="link service_link" @click.prevent="emits('openApplication')">Помощь со стилистикой</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <h2 class="h2 width-100">Кейсы</h2>
                <PortfolioComponent
                :quantity = 4
                />
                <router-link :to="'/portfolio'"><button class="btn"><span class="h6 span_btn">Смотреть все проекты</span></button></router-link>
            </div>
        </section>

        <section class="section">
            <div class="container grid grid-column">
                <h2 class="h2 width-100">Компания</h2>
                <div class="grid about_wrap gap-15">
                    <div class="block-about block-about--1 grid grid-column align-content-start gap-15">
                        <h3 class="h3"><span class="text-inherit color-main">Selit</span> - Разработка web-решений под ваши задачи</h3>
                        <p>Мы создаем современные сайты и веб-приложения, которые решают бизнес-задачи наших клиентов. От яркого дизайна и удобного интерфейса до надежной технической реализации — мы воплощаем ваши идеи в эффективные онлайн-инструменты.</p>
                        <button class="btn width-fit-content about__btn align-self-end" @click.prevent="emits('openApplication')"><span class="h6 span_btn">Заполнить форму</span></button>
                        <img class="about-3dObject" src="../assets/img/3d-icons/3d-Selit.svg" alt="img">
                    </div>
                    <div class="grid about_wrap-mini gap-15">
                        <div class="block-about block-about--3 grid grid-column gap-15 align-content-start">
                            <h3 class="h4">Качество услуг</h3>
                            <p>Неограниченное количество бесплатных правок, которые не конфликтуют с исходным техническим заданием </p>
                        </div>
                        <div @click.prevent="isOpenedSkillsModal()" class="block-about block-about--2 grid grid-column gap-15">
                            <h3 class="h4">Наш стек</h3>
                            <p>Мы постоянно развиваемся и открыты к освоению новых технологий, необходимых для реализации проектов, даже если ранее с ними не сталкивались.
                            </p>
                            <div class="about-wrap-skill grid grid-row">
                                <div class="about-skill">
                                    <img src="@/assets/img/icons/skills/figmaIcon.svg" alt="img">
                                </div>
                                <div class="about-skill">
                                    <img src="@/assets/img/icons/skills/laravelIcon.svg" alt="img">
                                </div>
                                <div class="about-skill">
                                    <img src="@/assets/img/icons/skills/nodeIcon.svg" alt="img">
                                </div>
                                <span class="about-skill">
                                    <img src="@/assets/img/icons/skills/DjangoIcon.svg" alt="img">
                                </span>
                                <div class="about-skill">
                                    <img src="@/assets/img/icons/skills/vueIcon.svg" alt="img">
                                </div>
                                <div class="about-skill">
                                    <img src="@/assets/img/icons/skills/dockerIcon.svg" alt="img">
                                </div>
                            </div>
                            <span class="link">Подробнее <span class="arrow text-inherit">&rarr;</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- process -->
        <section class="section process__section">
            <div class="container grid process__container">
                <h2 class="h2 width-100 process__title">Этапы разработки сайта</h2>
                <div class="grid gap-100 process_wrap">
                    <div class="grid grid-column gap-25 align-content-start process__item">
                        <div class="grid grid-column gap-5">
                            <span class="big_number weight-700">1</span>
                            <h3 class="h3">Созваниваемся</h3>
                        </div>
                        <p class="color-gray-dark">После того как вы заполните форму, наш менеджер свяжется с вами в течение 24 часов, чтобы согласовать удобное время для встречи.
                        <br><br>
                        На встрече мы познакомимся и обсудим задачу. Также поговорим о предварительном бюджете и сроках.</p>
                    </div>
                    <div class="grid grid-column gap-25 align-content-start process__item">
                        <div class="grid grid-column gap-5">
                            <span class="big_number weight-700">2</span>
                            <h3 class="h3">Анализ</h3>
                        </div>
                        <p class="color-gray-dark">Проводим анализ проекта. Обсуждаем с клиентом его бизнес-цели и ожидаемый результат работы. А также конечных пользователей, ключевые потребности вашей аудитории. 
                        Анализируем конкурентов и их преимущества, разрабатываем персонализированное решение под ваш запрос</p>
                    </div>
                    <div class="grid grid-column gap-25 align-content-start process__item">
                        <div class="grid grid-column gap-5">
                            <span class="big_number weight-700">3</span>
                            <h3 class="h3">UI/UX Дизайн</h3>
                        </div>
                        <p class="color-gray-dark">Разрабатываем уникальный интерфейс, который подчеркивает образ бренда. Работаем над виуалом опираясь на вашу деятельность.
                        А также заботимся, чтобы пользователям было удобно взаимодействовать с сайтом. 
                        </p>
                    </div>
                    <div class="grid grid-column gap-25 align-content-start process__item">
                        <div class="grid grid-column gap-5">
                            <span class="big_number weight-700">4</span>
                            <h3 class="h3">Разработка</h3>
                        </div>
                        <p class="color-gray-dark">Разработка один из важнейших этапов создания веб-сайта. Мы четко ствим цели и достигаем их. Используем гибки технологии постраивая их под вашу задачу. Четко работем над адаптивом и всеми нужными функциями сайта, ничего лишнего.</p>
                    </div>
                    <div class="grid grid-column gap-25 align-content-start process__item">
                        <div class="grid grid-column gap-5">
                            <span class="big_number weight-700">5</span>
                            <h3 class="h3">Тестирование</h3>
                        </div>
                        <p class="color-gray-dark">Параллельно с разработкой веб-приложения мы тестируем функионал, чтобы в процессе найти и исправить максимальное количество багов, а также обеспечить высокое качество и стабильную работу веб-продукта.</p>
                    </div>
                    <div class="grid grid-column gap-25 align-content-start process__item">
                        <div class="grid grid-column gap-5">
                            <span class="big_number weight-700">6</span>
                            <h3 class="h3">Релиз</h3>
                        </div>
                        <p class="color-gray-dark">Выпускаем веб-приложение в релиз. Согласовываем доменное имя, разворачивем сайт и публикуем на хостинге. Смотрим работоспособность сайта и отдельных функций. Редактирем отклонения и отдаем заказчику.</p>
                    </div>
                </div>
                <div class="grid justify-content-start align-items-start width-100">
                    <button class="btn width-fit-content" @click.prevent="emits('openApplication')"><span class="h6 span_btn">Заполнить форму</span></button>
                </div> 

            </div>
        </section>


        <SkillsComponent
            :class="{'modal_active': skills_is_showed, 'modal_not_active': !skills_is_showed}"
            @close = closeSkillsModal()
        />

        <section class="section why__section">
            <div class="container why__container grid-column justify-items-start gap-25">
                <div class="grid why-inner__card width-100">
                    <h2 class="h2">Факты о Selit</h2>
                    <div class="grid grid-column">
                        <span class="why-big_number"><span class="number_counting text-inherit number_counting_highest weight-700">30</span><span class="text-inherit color-main">+</span></span>
                        <p class="color-gray-dark">проектов реализованно</p>
                    </div>
                </div>
                <div class="grid why-inner__card width-100">
                    <div class="grid grid-column gap-10">
                        <span class="h2"><span class="text-inherit color-main number_counting">3</span> года</span>
                        <p class="color-gray-dark">Делаем приложения для стартапов и бизнеса</p>
                    </div>
                    <div class="grid grid-column gap-10">
                        <span class="h2"><span class="text-inherit number_counting color-main">6</span> человек</span>
                        <p class="color-gray-dark">занимаются вашим проектом днем и ночью</p>
                    </div>
                </div>
                <div class="grid why-inner__card width-100">
                    <div class="grid grid-column gap-10">
                        <span class="h2"><span class="text-inherit number_counting color-main">18</span> побед</span>
                        <p class="color-gray-dark">в различных хакатонах и конкурсах наших разработчиков</p>
                    </div>
                    <div class="grid grid-column gap-10">
                        <span class="h2"><span class="text-inherit number_counting color-main">96</span> процентов</span>
                        <p class="color-gray-dark">уровень удовлетворенности клиентов</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <h2 class="h2 width-100">Наши цены</h2>
                <div class="wrap_price grid gap-15 width-100">
                    <div class="first-price_block">
                        <p>Кратно увеличиваем продажи через создание цифровых продуктов c лушими ценами на рынке</p>
                        <img class="price_arrow" src="../assets/img/icons/price_arrow.svg" alt="arrow">
                        <img class="price_arrow-mini" src="../assets/img/icons/price_arrow_mini.svg" alt="arrow">
                    </div>
                    <div @click.prevent="emits('openApplication')" data-aos="fade-up" class="link price grid align-content-end gap-15">
                        <img class="price-3dObject price-3dObject--lightning" src="../assets/img/3d-icons/3d-lightning.svg" alt="img">
                        <span class="price_time">15-20 дней</span>
                        <div class="grid gap-5">
                            <h3 class="h4 price_title">Лендинг</h3>
                            <p class="weight-300 price-text">Быстрый способ донести информацию до клиентов</p>
                        </div>
                        <text class="weight-700 h6 price_money">от 20 000 ₽</text>
                    </div>
                    <div @click.prevent="emits('openApplication')" data-aos="fade-up" class="link price grid align-content-end gap-15">
                        <span class="price_time">3-4 недели</span>
                        <div class="grid gap-5">
                            <h3 class="h4 price_title">Многостраничный сайт</h3>
                            <p class="weight-300 price-text">Детальная информация о ваших услугах с интуитивным интерфейсом</p>
                        </div>
                        <text class="weight-700 h6 price_money">от 20 000 ₽</text>
                    </div>
                    <div @click.prevent="emits('openApplication')" data-aos="fade-up" class="link price grid align-content-end gap-15">
                        <img class="price-3dObject price-3dObject--arrow" src="../assets/img/3d-icons/3d-arrow.svg" alt="img">
                        <span class="price_time">3-5 недель</span>
                        <div class="grid gap-5">
                            <h3 class="h4 price_title">Интернет-магазин</h3>
                            <p class="weight-300 price-text">Лучший инструмент для ваших онлайн-продаж</p>
                        </div>
                        <text class="h6 price_money">от 20 000 ₽</text>
                    </div>
                    <div @click.prevent="emits('openApplication')" data-aos="fade-up" class="link price grid align-content-end gap-15">
                        <img class="price-3dObject price-3dObject--plat" src="../assets/img/3d-icons/3d-plat.svg" alt="img">
                        <span class="price_time">1-2 месяца</span>
                        <div class="grid gap-5">
                            <h3 class="h4 price_title">eCommerce</h3>
                            <p class="weight-300 price-text">Комерческие порталы для компаний любых масштабов</p>
                        </div>
                        <text class="h6 price_money">от 20 000 ₽</text>
                    </div>
                    <div @click.prevent="emits('openApplication')" data-aos="fade-up" class="link price grid align-content-end gap-15">
                        <span class="price_time">2-3 недели</span>
                        <div class="grid gap-5">
                            <h3 class="h4 price_title">Перенос на CMS</h3>
                            <p class="weight-300 price-text">Улучшие управления сайтом вашими руками</p>
                        </div>
                        <text class="h6 price_money">от 20 000 ₽</text>
                    </div>
                    <div @click.prevent="emits('openApplication')" data-aos="fade-up" class="link price grid align-content-end gap-15">
                        <img class="price-3dObject price-3dObject--star" src="../assets/img/3d-icons/3d-star.svg" alt="img">
                        <span class="price_time">3-5 дней</span>
                        <div class="grid gap-5">
                            <h3 class="h4 price_title">Продвижение</h3>
                            <p class="weight-300 price-text">Актуальные практики улучшения воронки продаж</p>
                        </div>
                        <text class="h6 price_money">от 20 000 ₽</text>
                    </div>
                    <div @click.prevent="emits('openApplication')" data-aos="fade-up" class="link price grid align-content-end gap-15">
                        <span class="price_time">3-5 дней</span>
                        <div class="grid gap-5">
                            <h3 class="h4 price_title">Техническое сопровождение</h3>
                            <p class="weight-300 price-text">Бесперебойная работа всех ваших сервисов</p>
                        </div>
                        <text class="h6 price_money">от 10 000 ₽ / мес</text>
                    </div>
                    <div @click.prevent="emits('openApplication')" data-aos="fade-up" class="link price grid align-content-end gap-15">
                        <span class="price_time">3-5 дней</span>
                        <div class="grid gap-5">
                            <h3 class="h4 price_title">Консалтинг</h3>
                            <p class="weight-300 price-text">Анализ всей структуры сайта </p>
                        </div>
                        <text class="h6 price_money">от 20 000 ₽</text>
                    </div>
                </div>
            </div>
        </section>

        <section class="section faq__section">
            <div class="container faq__container">
                <h2 class="h2 faq__title weight-700">Часто задаваемые вопросы</h2>
                <Accordion value="0" class="accordion__wrap">
                    <AccordionPanel @click.prevent="AOS.refresh()" data-aos="fade-up" value="1" class="accordion__item">
                        <AccordionHeader class="accordion-item__title"><h4 class="span_btn accordion-item-title__text h5 weight-500">Что нужно от меня, чтобы мы начали работу?</h4><div class="accordion__arrow weight-300">+</div></AccordionHeader>
                        <AccordionContent class="accordion-item__content">
                            <p class="accordion-item__text weight-500 text_accardion">
                                От Вас потребуется четкое техническое задание, исходные материалы (если имеются), например, логотип или иные медиафайлы, Ваши пожелания или элементы, которые вы хотели бы видеть.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel @click.prevent="AOS.refresh()" data-aos="fade-up" value="2" class="accordion__item">
                        <AccordionHeader class="accordion-item__title"><h4 class="span_btn accordion-item-title__text h5 weight-500">Можете предложить шаблонный сайт или готовое решение?</h4><div class="accordion__arrow weight-300">+</div></AccordionHeader>
                        <AccordionContent class="accordion-item__content">
                            <p class="accordion-item__text weight-500 text_accardion">
                               Если вам необходим простой стартовый сайт, мы предложим экономичные варианты с использованием готовых шаблонов и конструкторов. Но наша основная специализация — создание уникальных и функциональных веб-решений, ориентированных на долгосрочную перспективу развития вашего бизнеса.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel @click.prevent="AOS.refresh()" data-aos="fade-up" value="3" class="accordion__item">
                        <AccordionHeader class="accordion-item__title"><h4 class="span_btn accordion-item-title__text h5 weight-500">Сколько времени занимает разработка сайта?</h4><div class="accordion__arrow weight-300">+</div></AccordionHeader>
                            <AccordionContent class="accordion-item__content">
                            <p class="accordion-item__text weight-500 text_accardion">
                               Разработка веб-сайта зависит от сложности проекта и включает этапы анализа требований, проектирования, программирования, тестирования и внедрения. Обычно срок варьируется от нескольких недель до месяцев. Простой одностраничник можно запустить за неделю-две, а полноценный корпоративный ресурс потребует порядка одного-трёх месяцев.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel @click.prevent="AOS.refresh()" data-aos="fade-up" value="4" class="accordion__item">
                        <AccordionHeader class="accordion-item__title"><h4 class="span_btn accordion-item-title__text h5 weight-500">Могу ли я вносить правки в процессе разработки?</h4><div class="accordion__arrow weight-300">+</div></AccordionHeader>
                            <AccordionContent class="accordion-item__content">
                            <p class="accordion-item__text weight-500 text_accardion">
                               Безусловно! Ваше мнение крайне важно для нас. По ходу работы мы регулярно демонстрируем промежуточные результаты и согласовываем вносимые изменения. Процесс разработки прозрачен, и вы всегда будете осведомлены обо всех этапах.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel @click.prevent="AOS.refresh()" data-aos="fade-up" value="5" class="accordion__item">
                        <AccordionHeader class="accordion-item__title"><h4 class="span_btn accordion-item-title__text h5 weight-500">Нужно ли заполнять контент самостоятельно или вы берёте это на себя?</h4><div class="accordion__arrow weight-300">+</div></AccordionHeader>
                            <AccordionContent class="accordion-item__content">
                            <p class="accordion-item__text weight-500 text_accardion">
                               Вы вправе решать, кто займётся наполнением сайта информацией. Наша команда готова оказать помощь в подготовке качественного контента, включающего тексты, фотографии, графику и видеоматериалы. Однако вы также можете воспользоваться услугами собственных авторов или специализированных агентств.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel @click.prevent="AOS.refresh()" data-aos="fade-up" value="6" class="accordion__item">
                        <AccordionHeader class="accordion-item__title"><h4 class="span_btn accordion-item-title__text h5 weight-500">Нужна ли поддержка сторонних разработчиков для управления моим сайтом?</h4><div class="accordion__arrow weight-300 ">+</div></AccordionHeader>
                            <AccordionContent class="accordion-item__content">
                            <p class="accordion-item__text weight-500 text_accardion">
                               Нет, абсолютно не обязательно привлекать сторонних специалистов. Наши разработчики предоставляют подробную инструкцию по управлению сайтом, проводят обучение администраторов заказчика и оказывают послепродажную поддержку. Мы стараемся упростить процессы ведения сайта настолько, насколько это возможно.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
        </section>
        
    </main>

    
</template>

<script lang="ts" setup>
    import {onMounted, ref} from "vue";
    import {gsap} from 'gsap';
    import ScrollTrigger from "gsap/ScrollTrigger";
    import type { Ref } from "vue";
    import Accordion from 'primevue/accordion';
    import AccordionPanel from 'primevue/accordionpanel';
    import AccordionHeader from 'primevue/accordionheader';
    import AccordionContent from 'primevue/accordioncontent';
    import SkillsComponent from '@/components/SkillsComponent.vue';
    import MarqueeComponent from "@/components/MarqueeComponent.vue";
    import PortfolioComponent from '@/components/PortfolioComponent.vue';
    import AOS from 'aos';
    import WorkComponent from '@/components/WorkComponent.vue';
    
    document.title = "Selit - Разработка цифровых решений для ваших задач";

    const emits = defineEmits(['openApplication', 'loaded']);

    const skills_is_showed: Ref<boolean> = ref(false);
    
    const isOpenedSkillsModal = () => {
        skills_is_showed.value = true;
        document.body.style.overflowY = "hidden";
    };
    const closeSkillsModal = () => {
        skills_is_showed.value = false;
        document.body.style.overflowY = "visible";
    };

    onMounted(() => {
        // Cursor Parallax
        let cursor = document.querySelector('.arrow_bg');
        window.addEventListener('mousemove', e => {
            cursor.style = `translate: ${(document.documentElement.clientWidth / 2 - e.x) / 25}px ${(document.documentElement.clientHeight / 2 - e.y) / 25}px`;
        });

        gsap.registerPlugin(ScrollTrigger);
        if(window.innerWidth > 576){
            // GSAP Setup
            gsap.to('.block-about--1', {
                scrollTrigger: {
                    trigger: '.block-about--1',
                    start: 'top bottom',
                    end: 'center center',
                    scrub: true,
                },
                x: 0,
                y: 0,
                rotation: 0,
                scale: 1
            });
            gsap.to('.block-about--2', {
                scrollTrigger: {
                    trigger: '.block-about--2',
                    start: 'top bottom',
                    end: 'center center',
                    scrub: true,
                },
                x: 0,
                y: 0,
                rotation: 0,
                scale: 1
            });
            gsap.to('.block-about--3', {
                scrollTrigger: {
                    trigger: '.block-about--3',
                    start: 'top bottom',
                    end: 'center center',
                    scrub: true
                },
                x: 0,
                y: 0,
                rotation: 0,
                scale: 1
            });
        }

        let process_items = gsap.utils.toArray('.process__item');
        // if(window.innerWidth < 380){
        //     gsap.to(process_items, {
        //         xPercent: -133 * (process_items.length - 1),
        //         ease: 'none',
        //         scrollTrigger: {
        //             start: 'top 10%',
        //             trigger: '.process__section',
        //             pin: true,
        //             snap: 1 / (process_items.length - 1),
        //             scrub: 1,
        //             end: () => '+=' + document.querySelector(".process__section").offsetWidth
        //         }
        //     });
        // }
        // else if(window.innerWidth < 576){
        //     gsap.to(process_items, {
        //         xPercent: -122 * (process_items.length - 1),
        //         ease: 'none',
        //         scrollTrigger: {
        //             start: 'top 10%',
        //             trigger: '.process__section',
        //             pin: true,
        //             snap: 1 / (process_items.length - 1),
        //             scrub: 1,
        //             end: () => '+=' + document.querySelector(".process__section").offsetWidth
        //         }
        //     });
        // }
        if(window.innerWidth < 768){
            gsap.to(process_items, {
                xPercent: -107 * (process_items.length - 1),
                ease: 'none',
                scrollTrigger: {
                    start: 'top 15%',
                    trigger: '.process__section',
                    pin: true,
                    snap: 1 / (process_items.length - 1),
                    scrub: 1,
                    end: () => '+=' + document.querySelector(".process__section").offsetWidth
                }
            });
        }
        else if(window.innerWidth < 1024){
            gsap.to(process_items, {
                xPercent: -110 * (process_items.length - 1),
                ease: 'none',
                scrollTrigger: {
                    start: 'top 10%',
                    trigger: '.process__section',
                    pin: true,
                    snap: 1 / (process_items.length - 1),
                    scrub: 1,
                    end: () => '+=' + document.querySelector(".process__section").offsetWidth
                }
            });
        }
        else if(window.innerWidth < 1180){
            gsap.to(process_items, {
                xPercent: -90 * (process_items.length - 1),
                ease: 'none',
                scrollTrigger: {
                    start: 'top 10%',
                    trigger: '.process__section',
                    pin: true,
                    snap: 1 / (process_items.length - 1),
                    scrub: 1,
                    end: () => '+=' + document.querySelector(".process__section").offsetWidth
                }
            });
        }
        else{
            gsap.to(process_items, {
                xPercent: -75 * (process_items.length - 1),
                ease: 'none',
                scrollTrigger: {
                    start: 'top 10%',
                    trigger: '.process__section',
                    pin: true,
                    snap: 1 / (process_items.length - 1),
                    scrub: 1,
                    end: () => '+=' + document.querySelector(".process__section").offsetWidth
                }
            });
        }



        // Counting Numbers
        let numbers = Array.from(document.querySelectorAll('.number_counting')) as HTMLElement[];
        let number_highest = document.querySelector('.number_counting_highest') as HTMLElement;
        let counted: boolean[] = [];
        let max_numbers: number[] = [];
        const time_for_numbers: number = 800;
        for(let i of numbers){counted.push(false); max_numbers.push(Number(i.textContent)); i.textContent = '0'}

        window.addEventListener("scroll", (e) => {
            AOS.refresh();
            let number_highest_size = number_highest.getBoundingClientRect();
            if(number_highest_size.top + number_highest_size.height + 50 <= window.innerHeight && number_highest_size.top >= -(number_highest_size.height + 50)) {
                numbers.forEach(number => {
                    if(!counted[numbers.indexOf(number)]){
                        counted[numbers.indexOf(number)] = true;
                        let max: number = max_numbers[numbers.indexOf(number)];
                        setTimeout(() => {
                            let interval: number = setInterval(() => {
                                number.textContent = String(Number(number.textContent) + 1);
                                if(Number(number.textContent) >= max){
                                    number.textContent = `${max}`;
                                    clearInterval(interval);
                                }
                            }, time_for_numbers / max);
                        }, 350);
                    }
                });
            }
        });
        let loadImgCheck = new Image();
        loadImgCheck.src = '/src/assets/img/3d-icons/3d-star.svg';
        loadImgCheck.onload = () => {
            emits('loaded');
        };
    });
</script>
    
<style scoped>
    .section-banner{
        min-height: 100vh;
        position: relative;
    }
    .section-banner::before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url("@/assets/img/ban/bg.png");
        background-size: cover;
        background-position: center bottom;
        opacity: 0.1;
        z-index: -1;
    }

    .container-banner > p{
        text-align: center;
        font-size: 20px;
        width: 50%;
    }
    .container-banner > .banner_h1{
        text-align: center;
        width: 80%;
    }

    @keyframes line_loading {
        0%{
            width: 0;
        }
        100%{
            width: 100%;
        }
    }

    .line{
         position: relative;
        white-space: nowrap;
    }

    .line::before{
        content: '';
        position: absolute;
        height: 4px;
        left: 0;
        bottom: 3px;
        width: 100%;
        background-color: var(--colorBlack);
        animation: line_loading 1s ease;
    }

    .link-banner{
        padding: 10px 18px;
        border: 1px rgba(128, 128, 128, 0.5) solid;
        border-radius: var(--borderRadius);
    }
    /* services */
    .block_services{
        grid-template-columns: 400px auto;
        gap: 20px;
        width: fit-content;
        padding: 40px 0;
        border-bottom: 2px solid var(--colorGrey);
    }

    .name_services{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .service_link{
        /* font-size */
        font-weight: 500;
        padding: 20px 30px ;
        border-radius: var(--borderRadiusBig);
        background-color: var(--colorGrey);
        transition: .1s ease-in all;
        z-index: 3;
    }

    .service_link:hover{
        transform: translateY(-8px);
    }

    .arrow_bg{
        position: absolute;
        right: 0;
        width: 700px;
        top: 15%;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;
        opacity: .5;
    }
    

    /* process */
    .grid-3rows{
        grid-template-columns: 1fr 1fr 1fr;
    }


    .big_number{
        font-size: 120px;
        position: relative;
    }

    .process_wrap{
        display: flex;
        gap: 7vw;
    }
    .process__item{
        width: 25vw;
    }
    /* about */
    .about_wrap{
        grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    }

    .about_wrap-mini{
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    .block-about{
        width: 100%;
        padding: 30px;
        border-radius: var(--borderRadius);
        background-color: var(--colorGrey);
        z-index: -1;
    }

    .block-about > p{
        width: 100%;
        font-weight: 500;
    }

    .block-about--1{
        scale: 1.1;
        rotate: 2deg;
        translate: -100px 0;
        position: relative;
        overflow: hidden;
        z-index: 2;
        grid-template-rows: auto auto 1fr;
    }

    .block-about--1 > p{
        width: 80%;
    }

    .about-3dObject{
        width: 280px;
        position: absolute; 
        bottom: -50px; 
        right: -50px;  
    }

    .block-about--2{
        cursor: pointer;
        scale: 1.1;
        rotate: -2deg;
        z-index: 1;
        position: relative;
        translate: 100px 0;
        background-color: var(--colorBlack);
    }

    .block-about--2 *{
        color: var(--colorWhite);
    }

    .about__btn{
        z-index: 9;
    }

    .about-skill{
        padding: 3px;
        background-color: var(--colorWhite);
        border-radius: 50%;
        width: 55px;
        height: 55px;
        border: 4px solid var(--colorBlack);
        margin-right: -18px;
        display: flex; 
        justify-content: center;
        align-items: center;
    }

    .block-about--3{
        scale: 1.1;
        translate: 0 0;
        background-color: var(--colorMain);
    }

    .block-about--3  *{
        color: var(--colorWhite);
    }

    .development_wrap{
        grid-template-columns: 60px 1fr;
    }
    .development_wrap > div{
        width: 90%;
    }

    .about-wrap-skill{
        width: fit-content;
        margin-top: 50px;
    }
    .about-skill > img{
        width: 90%;
    }

    .block-about--4:hover .arrow{
        color: var(--colorMain);
        left: 13px;
    }
    .block-about--4:hover .link{
        color: var(--colorMain);
    }
    .block-about--4 .link{
        transition: color .3s ease;
    }
    .block-about--4:hover .arrow::before{
        color: var(--colorMain);
        left: -10px;
        transform: scaleX(2);
    }

    /* why */
    .why-inner__card{
        padding: 20px;
        border-bottom: 2px solid var(--colorGrey);
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .why-big_number{
        font-size: 120px;
    }

    /* why */

    .wrap_price{
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    .wrap_price > p{
        padding: 30px;
        justify-items: end;
    }

    .price{
        width: 100%;
        min-height: 300px;
        padding: 30px;
        border-radius: var(--borderRadius);
        background-color: var(--colorGrey);
        position: relative;
        cursor: pointer;
        transition: translate .1s ease-in, all .4s ease !important;
        overflow: hidden;
    }

    .first-price_block{
        position: relative;
    }

    .first-price_block > .price_arrow{
        position: absolute;
        top: 100px;
        left: 140px;
        width: 150px;
    }

    .first-price_block > .price_arrow-mini{
        display: none;
    }

    .price:hover{
        translate: 0 -7px;
    }

    .price-3dObject{
        position: absolute;
        z-index: 0; 
        pointer-events: none;
    }

    .price-3dObject--lightning{
        top: -20px;
        right: -10px;
        width: 180px;
    }

    .price-3dObject--arrow{
        top: -75px;
        right: 0;
        width: 290px;
    }

    .price-3dObject--plat{
        top: -30px;
        right: -30px;
        width: 240px;
    }

    .price-3dObject--star{
        top: -15px;
        right: -15px;
        width: 230px;
    }

    .price_title{
        z-index: 3;
    }

    .price-text{
        z-index: 3;
    }

    .price_money{
        z-index: 3;
    }

    .price:hover{
        transform: translateY(-4px);
    }

    .price::before{
        z-index: 2;
        content: '';
        background-image: url('@/assets/img/icons/arrow-bold.svg');
        background-size: cover;
        background-position: center center;
        width: 16px;
        height: 11px;
        position: absolute;
        top: 34px;
        right: 31px;
        transform: rotate(-45deg);
    }

    .price::after{
        display: flex;
        justify-content: center;
        font-size: 25px;
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        top: 20px;
        right: 20px;
        border-radius: 50%;
        background-color: var(--colorWhite)
    }

    .price:nth-child(3n){
        background-color: var(--colorMain);
    }
    .price:nth-child(3n) *{
        color: var(--colorWhite);
        border-color: var(--colorWhite);
    }

    .price:nth-child(3n + 1){
        background-color: var(--colorBlack);
    }
    .price:nth-child(3n + 1) *{
        color: var(--colorWhite);
        border-color: var(--colorWhite);
    }

    .price_time{
        padding: 5px 10px;
        border: var(--colorMain) 1px solid;
        width: fit-content;
        border-radius: 50px;
        font-size: 16px;
        z-index: 3;
    }

    .price-text{
        font-size: 16px;
        width: 90%;
    }

    /* accardion */

    .text_accardion{
        padding-bottom: 15px;
    }
    
    .accordion__item {
        padding: 2px 0 !important;
    }

    /* media */
    @media (max-width: 1300px) {
        .block-about--1{
            scale: 1.1;
            rotate: 2deg;
            translate: -100px 0;
        }

        .block-about--2{
            scale: 1.1;
            rotate: -2deg;
            translate: 100px 0;
        }
        .block-about--3{
            scale: 1.1;
            rotate: -2deg;
            transform: translate(100px, 0);
        }
    }
    @media (max-width: 1280px) {
        .block-about--1{
            scale: 1.1;
            rotate: 0deg;
            translate: 0 0;
        }

        .block-about--2{
            scale: 1.1;
            rotate: -1deg;
            translate: 0 50px;
        }
        .block-about--3{
            scale: 1.1;
            rotate: 1deg;
            transform: translate(0, 50px);
        }
    }
    @media (max-width: 1024px) {
        .banner_h1{
            width: 100% !important;
        }

        .container-banner > p{
            width: 90%;
        }
        .block_services{
            grid-template-columns: 1fr;
        }
        .container-about{
            grid-template-columns: 1fr;
            grid-template-rows: unset;
        }
        .block-about--1{
            grid-area: unset;
        }
        .block-about--3{
            grid-area: unset;
        }
        .block-about--4{
            grid-area: unset;
        }
        .block-about--5{
            grid-area: unset;
        }
        .container-banner > p{
            font-size: var(--fontDefault);
        }
        .process__item{
            width: 50vw;
        }
    }

    @media (max-width: 768px) {
        .wrap_projects{
            grid-template-columns: 1fr;
        }

        .first-price_block > .price_arrow{
            display: none;
        }

        .first-price_block > p{
            margin-bottom: 80px;
        }

        .first-price_block > .price_arrow-mini{
            display: block;
            position: absolute;
            left: 50% ;
            top: calc(50% - 5px);
        }
        .process__item{
            width: 80vw;
        }

        .arrow_bg{
            width: 400px;
        }
    }
    
    @media (max-width: 576px) {
        .process__title{
            width: 320px !important;
            justify-self: start;
        }
        .why-inner__card{
            grid-template-columns: 1fr;
            padding: 0;
            border-bottom: none;
        }
        .why-inner__card div{
            border-bottom: 1px solid var(--colorGrey);
            padding: 20px 0;
        }
        .why__container{
            gap: 0;
        }
        .why-big_number{
            font-size: 80px;
        }
        .block-about--1{
            scale: 1;
            rotate: 0deg;
            translate: 0 0;
        }

        .block-about--2{
            scale: 1;
            rotate: 0deg;
            translate: 0 0;
        }

        .block-about--3{
            scale: 1;
            rotate: 0deg;
            transform: translate(0, 0);
            translate: 0 0;
        }

        .development_wrap{
            grid-template-columns: 1fr;
        }

        .development_wrap > div{
            width: 100%;
        }

        .block-about--4{
            scale: 1;
            rotate: 0deg;
            translate: 0 0;
        }
        .block-about--5{
            scale: 1;
            translate: 0 0;
            rotate: 0deg;
        }
        .block-about--3 img{
            width: 100%;
        }
        .about_wrap{
            grid-template-columns: 1fr;
        }
    }
</style>
