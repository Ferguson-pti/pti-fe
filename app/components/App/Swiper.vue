<script setup lang="ts">
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css'
    import 'swiper/css/pagination'
    import 'swiper/css/autoplay'
    import type { VNode } from 'vue';

    defineProps<{
        items: VNode[]
    }>();
</script>

<template>
    <Swiper
        :slides-per-view="1.5"
        :loop="true"
        :pagination="true"
        :autoplay="true"
        :delay="5000"
        :grab-cursor="true"
        :direction="'horizontal'"
        class="absolute w-[550px] right-[0%] h-[70%]"
    >   
        <SwiperSlide v-for="item in items" :key="item.key!">
            <component :is="item"/>
        </SwiperSlide>
    </Swiper>
</template>

<style>    
    .swiper-pagination-bullet {
        background-color: black;
    }

    .swiper-pagination-bullet-active{
            background-color:#e28743;
    }

    .swiper-pagination{
        position:absolute; right:0; border:'1px red solid'
    }
</style>