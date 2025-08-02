<template>
    <div :style="circleStyle" class="cursor-circle" :class="{'cursor-circle--pointer': currentCursor}"></div>
</template>

<script lang="ts" setup>
    import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
    import type { Ref } from "vue";
    
    const currentCursor: Ref<boolean> = ref(false);
    const trackCursor = (event: any): void => {
        const target = event.target;
        const style = window.getComputedStyle(target);
        currentCursor.value = (style.cursor == 'pointer' || style.cursor == 'text')
    };

    const targetX = ref(0);
    const targetY = ref(0);

    const cursorPositionX = ref(0);
    const cursorPositionY = ref(0);

    const animationFrameId = ref(null as number | null);

    onMounted(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousemove', trackCursor);
        window.requestAnimationFrame(updateCirclePosition);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (animationFrameId.value !== null) {
            cancelAnimationFrame(animationFrameId.value!)
        };
    });

    const handleMouseMove = (event: MouseEvent): void => {
        targetX.value = event.clientX;
        targetY.value = event.clientY;
    };

    const updateCirclePosition = () => {
        animationFrameId.value = requestAnimationFrame(updateCirclePosition);
        const easingFactor = 0.07;

        cursorPositionX.value += (targetX.value - cursorPositionX.value - 10) * easingFactor;
        cursorPositionY.value += (targetY.value - cursorPositionY.value - 10) * easingFactor;
    };

    const circleStyle = computed(() => ({
        left: `${cursorPositionX.value}px`,
        top: `${cursorPositionY.value}px`
    }));
</script>

<style scoped>
    .cursor-circle {
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: var(--colorMain);
        pointer-events: none;
        z-index: 100;
        transition: scale .2s ease;
    }

    .cursor-circle--pointer{
        opacity: .3 !important;
        /* border-radius: 5px; */
        scale: 2.4;
        background: green;
        transition: scale .2s ease-in;
    }
    @media (max-width: 768px) {
        .cursor-circle{
            display: none;
        }
    }
</style>