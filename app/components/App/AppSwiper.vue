<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { SwiperOptions } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import type { VNode } from 'vue'

interface Props extends SwiperOptions {
  items: VNode[]
  styleClass: string
  color?: string
}

defineProps<Props>()
</script>

<template>
  <Swiper
    :slides-per-view="slidesPerView || 1.5"
    :loop="true"
    :pagination="pagination"
    :autoplay="autoplay"
    :delay="5000"
    :speed="speed || 300"
    :grab-cursor="true"
    :direction="'horizontal'"
    :class="styleClass"
    :style="{ '--main-color': color }"
    :space-between="spaceBetween || 0"
  >
    <SwiperSlide
      v-for="item in items"
      :key="item.key!"
    >
      <component :is="item" />
    </SwiperSlide>
  </Swiper>
</template>

<style>
    .swiper-slide{
      width:auto; height:auto; display:flex; flex-direction:column; align-items:center; justify-content:center;
    }

    .swiper-pagination-bullet {
        background-color: black;
    }

    .swiper-pagination-bullet-active{
            background-color:var(--main-color);
    }

    .swiper-pagination{
        position:absolute; right:0; border:'1px red solid'
    }
</style>
