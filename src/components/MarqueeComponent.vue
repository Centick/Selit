<template>
    <div class="marquee_parent">
        <div class="wrap">
            <div class="items-wrap">
                <div aria-hidden="true" class="items marquee">
                    <div class="item item_small">
                        <img src="@/assets/img/partners/1.png" alt="#">
                    </div>
                    <div class="marquee__border"></div>
                    <div class="item">
                        <img src="@/assets/img/partners/2.png" alt="#">
                    </div>
                    <div class="marquee__border"></div>
                    <div class="item">
                        <img src="@/assets/img/partners/3.png" alt="#">
                    </div>
                    <div class="marquee__border"></div>
                    <div class="item">
                        <img src="@/assets/img/partners/4.png" alt="#">
                    </div>
                    <div class="marquee__border"></div>
                    <div class="item">
                        <img src="@/assets/img/partners/5.png" alt="#">
                    </div>
                    <div class="marquee__border"></div>
                    <div class="item">
                        <img src="@/assets/img/partners/6.png" alt="#">
                    </div>
                    <div class="marquee__border"></div>
                    <div class="item">
                        <img src="@/assets/img/partners/7.png" alt="#">
                    </div>
                    <div class="marquee__border"></div>
                </div>

                <div aria-hidden="true" class="items marquee">
                    <div class="item item_small">
                        <img src="@/assets/img/partners/1.png" alt="#">
                    </div>
                    <div class="marquee__border"></div>
                    <div class="item">
                        <img src="@/assets/img/partners/2.png" alt="#">
                    </div>
                    <div class="marquee__border"></div>
                    <div class="item">
                        <img src="@/assets/img/partners/3.png" alt="#">
                    </div>
                    <div class="marquee__border"></div>
                    <div class="item">
                        <img src="@/assets/img/partners/4.png" alt="#">
                    </div>
                    <div class="marquee__border"></div>
                    <div class="item">
                        <img src="@/assets/img/partners/5.png" alt="#">
                    </div>
                    <div class="marquee__border"></div>
                    <div class="item">
                        <img src="@/assets/img/partners/6.png" alt="#">
                    </div>
                    <div class="marquee__border"></div>
                    <div class="item">
                        <img src="@/assets/img/partners/7.png" alt="#">
                    </div>
                    <div class="marquee__border"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font: 16px / 1.4 sans-serif;
    }
    .marquee_parent{
        width: 100%;
        position: relative;
    }
    h1 {
        font-size: 2em;
        font-weight: bold;
    }
    h1, p {
        margin-bottom: 10px;    
    }
    .items-wrap {
        position: relative;
        display: flex;
        overflow: hidden;
        user-select: none;
        gap: 20px;
    }
    .items {
        flex-shrink: 0;
        display: flex;
        gap: 5px;
        justify-content: space-around;
        min-width: 100%;
    }
    .item {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        font-weight: bold;
        color: #fff;
        margin: 10px 0;
        transition: all 0.1s ease-in-out;
    }
    .item img{
        height: 7vh;
    }
    .item_small img{
        height: 4vh;
    }
    .marquee {
        animation: scroll 20s linear infinite;
    }
    .marquee__border{
        height: 100%;
        width: 1px;
        background-color: var(--colorGrey);
    }
    .reverce {
        animation-direction: reverse;
    }
    .perfscan {
        margin: 20px 0;
        text-align: center;
        bottom: 0;
        background: #fff;
        padding: 5px;
    }
    .perfscan hr {
        border: solid #999;
        border-width: 1px 0 0 0;
        max-width: 50%;
        margin: 0 auto 20px;
    }
    .perfscan a {
        color: #000;
        font-weight: bold;
    }

    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(calc(-100% - 20px));
        }
    }

    @media (max-width: 1024px) {
        .item{
            font-size: 18px;
            margin: 4px 0;
        }

        .items-wrap {
            gap: 10px;
        }
        .items {
            gap: 10px;
        }
    }
    @media(max-width: 576px){
        .wrap{
            transform: rotate(-4deg);
            position: absolute;
            width: 100%;
        }
        .marquee_parent{
            width: 100%;
            position: relative;
            padding: 100px 0;
        }
    }

</style>
<script setup lang="ts">
</script>