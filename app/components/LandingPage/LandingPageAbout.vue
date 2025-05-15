<script setup lang="ts">
import { h } from 'vue'
import { LandingPageAboutCard } from '#components'

const data = [
  'DSC_0078.webp',
  'DSC_0731.webp',
  'DSC_0486.webp',
]

// Create array of components manually
const renderedItems = data.map((item, index) =>
  h(LandingPageAboutCard, {
    key: `aboutcard${index}`,
    src: item,
  }),
)
</script>

<template>
  <section
    class="
      relative w-full h-auto lg:h-[80vh] flex flex-col-reverse lg:flex-row items-start justify-between
      py-20 px-4 md:px-10 xl:px-16 bg-custom-cream overflow-visible
    "
  >
    <div
      dir="rtl"
      class="mt-10 relative w-full md:w-[70%] lg:w-[35%] h-full z-10 flex flex-col items-end justify-center"
    >
      <AppSwiper
        style-class="absolute w-[500px] md:w-[550px] right-[0%] h-[70%]"
        :items="renderedItems"
        :pagination="true"
        :autoplay="true"
        color="#FCC40C"
        :loop="true"
      />
    </div>

    <div class="relative w-full lg:w-[60%] h-auto rounded-lg z-10 py-8 px-6 md:p-20 bg-custom-cream overflow-hidden font-lexend">
      <p class="w-[80%] md:w-full text-4xl md:text-5xl lg:text-7xl font-medium mb-6 text-custom-green">
        What is ICHST?
      </p>
      <p class="font-light text-black">
        ICHST <strong class="font-semibold">(INTERNATIONAL CONFERENCE ON HYDROCARBON SCIENCE & TECHNOLOGY)</strong> is where subject matter experts, leading
        researchers, academicians, and top players in the oil and gas industry come together to examine topical issues of great relevance
        to the present and future development of the sector, with a focus on technological advancements and breakthroughs.
      </p>

      <Bubble4 style-class="absolute -bottom-4 -right-28 md:bottom-0 md:right-0" />
    </div>

    <Bubble3 style-class="absolute top-0 right-0" />
  </section>
</template>
