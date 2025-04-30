<script setup lang="ts">
import Bubble2 from '../Bubble-2.vue'
import { AppButton, AppVideo } from '#components'
</script>

<template>
  <section
    class="
        relative w-full h-[90vh] flex flex-row items-start justify-between
        pt-16 px-16 pb-0
    "
  >
    <div class="flex flex-col items-start justify-start w-[55%] bg-custom-green px-10 py-10 rounded-lg z-10">
      <span class="font-lexend font-medium text-6xl text-white">Transforming Africa’s Hydrocarbon Sector</span>
      <span class="font-lexend mt-6 text-custom-grey">
        (ICHST) is organized biennially to promote technological advancement, enhance research, and provide
        knowledge-sharing platforms across the oil and gas industry spectrum
      </span>
      <AppButton style-class="mt-12 bg-custom-gold text-white hover:bg-white hover:text-custom-gold">
        GET TICKETS NOW
      </AppButton>
    </div>

    <div class="w-auto mt-20 flex flex-col items-start justify-start z-10 text-white">
      <span class="font-lexend text-sm font-medium mb-1">OCTOBER 22-23, 2025</span>
      <span class="font-lexend text-sm font-medium mb-8">PTDF TOWERS, CENTRAL BUSINESS DISTRICT, ABUJA, NIGERIA</span>
      <AppVideo />
    </div>

    <Bubble2 style-class="absolute left-0 -bottom-1 z-0" />
  </section>
</template>
