<template>
    <div :style="circleStyle" class="cursor-circle"></div>
</template>

<script lang="ts" setup>
    import { ref, onMounted, onBeforeUnmount, computed } from 'vue';    

    const targetX = ref(0);
    const targetY = ref(0);

    const cursorPositionX = ref(0);
    const cursorPositionY = ref(0);

    const animationFrameId = ref(null as number | null);

    onMounted(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.requestAnimationFrame(updateCirclePosition);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (animationFrameId.value !== null) {
            cancelAnimationFrame(animationFrameId.value!)
        };
    });

    const handleMouseMove = (event: MouseEvent): void => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

        targetX.value = event.clientX + scrollLeft;
        targetY.value = event.clientY + scrollTop;
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
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: var(--colorMain);
        pointer-events: none;
        z-index: 100;
        transition: opacity .1s ease;
    }
</style>