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
  <AppSectionWrapper bg="bg-custom-cream">
    <div
      class="
      relative w-full h-auto xl:h-auto flex flex-col-reverse lg:flex-row items-start justify-between
      py-20 overflow-visible
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
        <p class="w-full text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-6 text-custom-green">
          What is ICHST?
        </p>
        <p class="font-light text-black text-sm md:text-base 2xl:text-xl">
          <strong class="font-semibold">International Conference on Hydrocarbon Science and Technology (ICHST)</strong> is where subject matter
          experts, leading researchers, academicians, and top players in the oil and gas industry come together to examine topical issues of great
          relevance to the present and future development of the sector, with a focus on technological advancements and breakthroughs. The first and
          second edition was held at the Petroleum Training Institute, Effurun, in 2019 and 2021, respectively. The third edition was held at the '
          PTDF Towers, Abuja, in 2023. The fourth edition is also scheduled to be held at the PTDF towers, Abuja on the 22nd and 23rd of October, 2025.
        </p>

        <Bubble4 style-class="absolute -bottom-4 -right-28 md:bottom-0 md:right-0" />
      </div>
    </div>
    <Bubble3 style-class="absolute top-0 right-0" />
  </AppSectionWrapper>
</template>
