<script setup lang="ts">
import { h } from 'vue'
import { LandingPageSpeakersCard } from '#components'

const SPEAKERS = [
  'John Doe',
  'Alice Walter',
  'Lionel Messi',
  'Donald Trump',
  'Bruce Wayne',
  'Mary Jane',
]

const renderedItems = SPEAKERS.map((speaker, index) =>
  h(LandingPageSpeakersCard, {
    key: `speaker${index}`,
  }),
)

onMounted(() => {
  const firstSpeakerContainer = document.getElementsByClassName('speaker-container')[0]

  console.log(firstSpeakerContainer)
})
</script>

<template>
  <section class="w-full py-10 lg:py-20 px-4 md:px-10 lg:px-16 bg-custom-red flex flex-col items-center justify-center font-lexend">
    <div class="w-full p-8 md:p-10 border border-white rounded-lg">
      <h1 class="text-4xl md:text-5xl lg:text-7xl text-white w-[55%] mb-6 font-medium">
        Featured Speakers
      </h1>

      <p class="text-white w-full lg:w-[55%] mt-4 font-light text-base md:text-lg mb-14">
        ICHST lands in Abuja with its strongest program yet, themed Transforming Africa’s Hydrocarbon Sector: Balancing Growth, Environment,
        and Governance. From sustainable financing to cutting-edge tech and ethical leadership, industry visionaries will share insights to
        drive impactful change across Africa’s energy landscape.
      </p>

      <AppSwiper
        style-class="w-full md:w-full border-white border h-[500px]"
        :items="renderedItems"
        :pagination="true"
        :autoplay="false"
        color="#FCC40C"
        slides-per-view="auto"
        :space-between="20"
      />

      <div />
    </div>
  </section>
</template>

<style>
  .swiper-slide-active .speaker-container{
    width:350px; height:350px;
  }

  .swiper-slide-active .speaker-picture{
    width:350px; height:350px;
  }

  .swiper-slide-active .speaker-blur{
    background-color:#00000000; width:350px; height:350px;
  }
</style>
