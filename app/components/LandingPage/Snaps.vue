<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { h } from 'vue'
import { LandingPageSnapCard } from '#components'

const { width } = useWindowSize()

const slides = [
  'slide00', 'slide01', 'slide02', 'slide03', 'slide04', 'slide05', 'slide06', 'slide07', 'slide08', 'slide09', 'slide10', 'slide11', 'slide12',
]

const renderedItems1 = slides.map((slide, index) =>
  h(
    LandingPageSnapCard,
    {
      key: `snapcardlane1${index}`,
      item: slide,
    },
  ),
)

const renderedItems2 = slides.map((slide, index) =>
  h(
    LandingPageSnapCard,
    {
      key: `snapcardlane2${index}`,
      item: slide,
    },
  ),
)
</script>

<template>
  <section class="w-full py-20 px-4 md:px-10 lg:px-16 bg-custom-green flex flex-col items-start justify-start font-lexend">
    <p class="text-4xl font-medium text-white">
      Snaps from ICHST 2024
    </p>

    <p class="mt-6 text-custom-grey">
      Relive some favorite moments from INBOUND 2024
    </p>

    <div class="mt-10 w-full">
      <AppSwiper
        :items="renderedItems1"
        style-class=""
        :slides-per-view="width<=400 ? 1.2 : width<=900 ? 2.1 : 3.7"
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
        :slides-per-view="width<=400 ? 1.2 : width<=900 ? 2.1 : 3.7"
        :pagination="false"
        :autoplay="true"
        :speed="1000"
      />
    </div>
  </section>
</template>
