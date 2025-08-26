<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { SwiperOptions } from 'swiper/types'
import { Pagination } from 'swiper/modules'
import { h } from 'vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { LandingPageSpeakersCard } from '#components'

interface Props extends SwiperOptions {
  styleClass: string
  color?: string
}

defineProps<Props>()

const SPEAKERS = [
  { img: '/1.jpg', name: 'John Doe' },
  { img: '/2.png', name: 'Mary Jane' },
  { img: '/3.jpg', name: 'Alexis Sanchez' },
  { img: '/4.jpg', name: 'Remora Vue' },
  { img: '/5.jpg', name: 'Tristan Lannister' },
  { img: '/6.jpg', name: 'Joff Stark' },
]

const swiperRef = ref<any>(null)
const activeIndex = ref(0)

const items = SPEAKERS.map((speaker, index) =>
  h(LandingPageSpeakersCard, {
    key: `speaker${index}`,
    img: speaker.img,
  }),
)

function onSwiper(swiper: any) {
  swiperRef.value = swiper
}

function goToSlide(event: MouseEvent) {
  const swiper = swiperRef.value
  if (!swiper) return

  const clickedEl = event.currentTarget as HTMLElement
  // const wrapperEl = swiper.wrapperEl

  // Get the offset of the clicked slide
  const offsetLeft = clickedEl.offsetLeft

  // Scroll the Swiper to that position
  swiper.setTransition(300) // duration in ms
  swiper.setTranslate(-offsetLeft + 100)
  swiper.updateProgress()
  swiper.updateActiveIndex()
  swiper.updateSlidesClasses()
  activeIndex.value = parseInt(clickedEl.dataset.index!)
}

function onSlideChange(swiper: any) {
  activeIndex.value = parseInt(swiper.activeIndex)
  // you can store it in a ref too if needed
}
</script>

<template>
  <div>
    <Swiper
      :modules="[Pagination]"
      :slides-per-view="slidesPerView"
      :slides-per-group="1"
      :loop="loop"
      :pagination="pagination"
      :autoplay="autoplay"
      :delay="5000"
      :speed="speed || 300"
      :grab-cursor="true"
      :direction="'horizontal'"
      :free-mode="false"
      :class="`${styleClass} snap-x snap-mandatory`"
      :style="{ '--main-color': color }"
      :space-between="spaceBetween || 0"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
    >
      <SwiperSlide
        v-for="(item, index) in items"
        :key="item.key!"
        class="speaker-slide snap-start h-[450px] md:h-[400px]"
        :data-index="index"
        @click="goToSlide"
      >
        <component :is="item" />
      </SwiperSlide>
      <SwiperSlide
        v-for="(item, index) in Array(3).fill('')"
        :key="`ghostslide-${index}`"
        class="speaker-slide min-w-[300px] max-w-[300px] h-[400px] snap-start"
      />
    </Swiper>

    <div class="mt-8 flex flex-col items-start justify-start font-lexend">
      <span class="text-white text-sm md:text-md font-medium">FEATURED</span>
      <span class="mt-2 font-semibold text-3xl md:text-5xl text-white">{{ SPEAKERS[activeIndex]!.name }}</span>
    </div>
  </div>
</template>

<style>
    .speaker-slide{
      display:flex; flex-direction:column; align-items:center; justify-content:center; transition-duration:300ms;
    }

    .swiper-pagination-bullet {
        background-color: black;
    }

    .swiper-pagination-bullet-active{
            background-color:var(--main-color);
    }
</style>
