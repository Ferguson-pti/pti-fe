<script setup lang="ts">
import Bubble2 from '../Bubble-2.vue'
// import { AppVideo } from '#components'

/* Meant to be a video in here <AppVideo /> */
</script>

<template>
  <section
    class="
        relative w-full h-auto xl:h-[90vh] flex flex-row items-start justify-between
        py-10 md:py-16 px-4 md:px-10 xl:px-16
    "
  >
    <div class="flex flex-col items-start justify-start w-full lg:w-[55%] bg-custom-green px-4 md:px-10 py-10 rounded-lg z-10">
      <div class="flex lg:hidden flex-col items-start justify-start text-white">
        <span class="font-lexend text-sm font-medium mb-1">OCTOBER 22-23, 2025</span>
        <span class="font-lexend text-sm font-medium mb-8">PTDF TOWERS, CENTRAL BUSINESS DISTRICT, ABUJA, NIGERIA</span>
      </div>

      <span class="font-lexend font-medium text-4xl md:text-5xl xl:text-6xl text-white">Transforming Africa’s Hydrocarbon Sector</span>

      <NuxtImg
        src="ptdf.webp"
        provider="sirv"
        class="mt-6 flex lg:hidden w-full lg:w-[540px] bg-custom-grey rounded-lg"
      />

      <span class="font-lexend mt-6 text-custom-grey">
        International Conference on Hydrocarbon Science and Technology (ICHST) is organized by the Petroleum Training Institute, the foremost
        petroleum technological institute in Sub-Saharan Africa. It is organized biennially to promote technological advancement, enhance
        research, and provide knowledge-sharing platforms across the oil and gas industry spectrum.
      </span>

      <div class="mt-6 md:mt-12 mb-4 text-custom-gold font-medium font-lexend">
        THE CONFERENCE BEGINS IN
      </div>
      <AppCountdown
        style-class="sm"
        text-color="text-custom-gold"
      />
    </div>

    <div class="hidden lg:flex w-auto mt-20 flex flex-col items-start justify-start z-10 text-white">
      <span class="font-lexend text-sm font-medium mb-1">OCTOBER 22-23, 2025</span>
      <span class="font-lexend text-sm font-medium mb-8">PTDF TOWERS, CENTRAL BUSINESS DISTRICT, ABUJA, NIGERIA</span>

      <NuxtImg
        src="ptdf.webp"
        provider="sirv"
        class="w-full lg:w-[540px] bg-custom-grey rounded-lg"
      />
    </div>

    <Bubble2 style-class="absolute left-0 -bottom-1 z-0" />
  </section>
</template>
