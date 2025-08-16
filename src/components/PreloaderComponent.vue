<template>
    <section class="section loader__section grid">
        <div class="container loader__container grid justify-items-center">
            <div class="loader__inner grid grid-row gap-10">
                <span class="loader__letter loader__letter_1 h1">S</span>
                <span class="loader__letter loader__letter_2 h1">E</span>
                <span class="loader__letter loader__letter_3 h1">L</span>
                <span class="loader__letter loader__letter_4 h1">I</span>
                <span class="loader__letter loader__letter_5 h1">T</span>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>

</script>

<style scoped>
    @keyframes letter {
        0%{
            translate: 0 0;
        }
        25%{
            translate: 0 -50px;
        }
        50%{
            translate: 0 0;
        }
        100%{
            translate: 0 0;
        }
    }
    .loader__section{
        width: 100vw;
        height: 100vh;
        background-color: var(--colorWhite);
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;
    }
    .loader__letter{
        position: relative;
        animation: letter 2s ease-in-out infinite;
    }
    .loader__letter_1{
        animation-delay: .5s;
    }
    .loader__letter_2{
        animation-delay: .6s;
    }
    .loader__letter_3{
        animation-delay: .7s;
    }
    .loader__letter_4{
        animation-delay: .8s;
    }
    .loader__letter_5{
        animation-delay: .9s;
    }
    .loader__letter_4::before{
        content: '';
        position: absolute;
        top: 0;
        left: calc(50% - calc(var(--h1) / 10));
        width: calc(var(--h1) / 5);
        height: calc(var(--h1) / 5);
        border-radius: 50%;
        background-color: var(--colorMain);
    }
</style>