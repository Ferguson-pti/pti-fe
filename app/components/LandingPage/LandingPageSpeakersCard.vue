<template>
  <div
    class="speaker-container relative w-[250px] h-[250px] flex flex-row items-center justify-center"
  >
    <img
      :src="img"
      class="w-[250px] h-[250px] rounded-lg speaker-picture duration-300"
    >

    <div class="absolute bg-[#00000060] w-[250px] h-[250px] rounded-lg top-0 left-0 speaker-blur duration-300" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  img: string
}>()
/* import type { VNodeRef } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

const cardRef: VNodeRef | undefined = ref(null)

onMounted(async () => {
  const swiperContainer = cardRef.value.parentElement
  const swiperContainerIndex = parseInt(swiperContainer.getAttribute('data-swiper-slide-index'))
  const swiper = swiperContainer.parentElement.parentElement

  swiperContainer.addEventListener('click', (e) => {
    const indexString = parseInt(swiperContainer.getAttribute('aria-label').split('/')[0]);
    console.log(indexString)
    //console.log(swiperContainer.getAttribute('data-swiper-slide-index'))
    swiper.swiper.slideTo(parseInt(swiperContainer.getAttribute('aria-label').split('/')[0]))
  })
}) */
</script>
