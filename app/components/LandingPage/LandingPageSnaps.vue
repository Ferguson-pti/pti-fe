<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { h } from 'vue'
import { LandingPageSnapCard } from '#components'

const { width } = useWindowSize()

const urls = [
  'DSC_0265.webp',
  'DSC_0731.webp',
  'DSC_0018.webp',
  'DSC_0101.webp',
  'DSC_0078.webp',
  'DSC_0122.webp',
  'DSC_0162.webp',
  'DSC_0300.webp',
]

const renderedItems1 = urls.map((url, index) =>
  h(
    LandingPageSnapCard,
    {
      key: `snapcardlane1${index}`,
      src: url,
    },
  ),
)

const renderedItems2 = urls.map((url, index) =>
  h(
    LandingPageSnapCard,
    {
      key: `snapcardlane2${index}`,
      src: url,
    },
  ),
)
</script>

<template>
  <AppSectionWrapper>
    <div class="w-full py-14 md:py-20 lg:py-24 bg-custom-green flex flex-col items-center justify-start font-lexend">
      <p class="w-full text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-white">
        Snaps from ICHST 2023
      </p>

      <p class="w-full mt-6 text-sm md:text-base 2xl:text-xl text-custom-grey">
        Relive yourself with some favorite moments from INBOUND 2023
      </p>

      <div class="mt-10 w-[100vw]">
        <AppSwiper
          :items="renderedItems1"
          style-class=""
          :slides-per-view="width<=400 ? 1.3 : width<=900 ? 2.3 : width<=1024 ? 3.2 : width<=1440 ? 3.8 : 4.5"
          :pagination="false"
          :autoplay="true"
          :speed="1000"
          :loop="true"
        />
      </div>

      <div
        dir="rtl"
        class="mt-2 md:mt-4 lg:mt-1 xl:mt-8 2xl:mt-10 w-[100vw]"
      >
        <AppSwiper
          :items="renderedItems2"
          style-class=""
          :slides-per-view="width<=400 ? 1.3 : width<=900 ? 2.3 : width<=1024 ? 3.2 : width<=1440 ? 3.8 : 4.5"
          :pagination="false"
          :autoplay="true"
          :speed="1000"
        />
      </div>
    </div>
  </AppSectionWrapper>
</template>
