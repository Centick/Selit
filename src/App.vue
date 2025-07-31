<template>
    <HeaderComponent/>

    <!--  Шаблон страницы  -->
    <RouterView/>

    <Cursor/>

    <FooterComponent/>
    
</template>

<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router';
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue'
    import Cursor from '@/components/CursorComponent.vue'
    import {gsap} from 'gsap';
    import Physics2D from "gsap/Physics2DPlugin";
    import {onMounted} from "vue";

    gsap.registerPlugin(Physics2D);
    

    document.title = "Разработка цифровых решений для ваших задач";

    function initConfettiClick() {
        document.addEventListener("click", (event) => {
            if(event.target.nodeName !== 'A' && event.target.nodeName !== 'BUTTON' && !event.target.className.includes('btn__circle') && !event.target.className.includes('span_btn')){
                return;
            }
            const dotCount = gsap.utils.random(15, 30, 1);
            const colors = ["#292929", "#1933b3", "#2F4EEA"];

            for (let i = 0; i < dotCount; i++) {
                const dot = document.createElement("div");
                dot.classList.add(gsap.utils.random(["dot", "triangle", "rect"]));

                document.body.appendChild(dot);

                gsap.set(dot, {
                    backgroundColor: gsap.utils.random(colors),
                    top: event.clientY,
                    left: event.clientX,
                    scale: 0
                });

                gsap
                    .timeline({
                        onComplete: () => dot.remove()
                    })
                    .to(dot, {
                        scale: gsap.utils.random(0.3, 1),
                        duration: 0.3,
                        ease: "power3.out"
                    })
                    .to(
                        dot,
                        {
                            duration: 0.5,
                            physics2D: {
                                velocity: gsap.utils.random(500, 1000),
                                angle: gsap.utils.random(0, 360),
                                gravity: 3000
                            },
                            autoAlpha: 0,
                            ease: "none"
                        },
                        "<"
                    );
            }
        });
    }

    onMounted(() => {
        initConfettiClick();
    });
</script>

<style>
</style>