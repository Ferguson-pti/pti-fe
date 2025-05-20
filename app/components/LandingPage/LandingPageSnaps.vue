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
  <section class="w-full py-20 px-4 md:px-10 xl:px-16 bg-custom-green flex flex-col items-start justify-start font-lexend">
    <p class="text-4xl font-medium text-white">
      Snaps from ICHST 2023
    </p>

    <p class="mt-6 text-custom-grey">
      Relive yourself with some favorite moments from INBOUND 2023
    </p>

    <div class="mt-10 w-full">
      <AppSwiper
        :items="renderedItems1"
        style-class=""
        :slides-per-view="width<=400 ? 1.2 : width<=900 ? 2.1 : width<=1024 ? 2.8 : 3.7"
        :pagination="false"
        :autoplay="true"
        :speed="1000"
        :loop="true"
      />
    </div>

    <div
      dir="rtl"
      class="mt-4 w-full"
    >
      <AppSwiper
        :items="renderedItems2"
        style-class=""
        :slides-per-view="width<=400 ? 1.2 : width<=900 ? 2.1 : width<=1024 ? 2.8 : 3.7"
        :pagination="false"
        :autoplay="true"
        :speed="1000"
      />
    </div>
  </section>
</template>
