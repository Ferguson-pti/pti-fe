<script setup lang="ts">
/**
   * <AppSpeakersSwiper
          style-class="w-full md:w-full h-[380px] md:h-[400px]"
          :pagination="{ clickable: true }"
          :autoplay="false"
          color="white"
          :slides-per-view="`auto`"
          :space-between="20"
          :loop="false"
        />
   */
</script>

<template>
  <AppSectionWrapper bg="bg-custom-red">
    <div class="w-full lg:py-10 bg-custom-red flex flex-col items-center justify-center font-lexend">
      <div class="w-full py-14 md:py-20 rounded-lg z-10">
        <p class="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl text-white mb-6 font-medium">
          Featured Speakers
        </p>

        <p class="text-white w-full lg:w-[80%] xl:w-[70%] mt-4 font-light text-base 2xl:text-xl mb-8 md:mb-10">
          ICHST lands in Abuja with its strongest program yet, themed Transforming Africa’s Hydrocarbon Sector: Balancing Growth, Environment,
          and Governance. From sustainable financing to cutting-edge tech and ethical leadership, industry visionaries will share insights to
          drive impactful change across Africa’s energy landscape.
        </p>

        <div class="mt-20 text-white font-semibold text-xl md:text-3xl">
          To be revealed soon...
        </div>
      </div>

      <NuxtImg
        src="circle.svg"
        provider="sirv"
        class="absolute w-[300px] md:w-[400px] -rotate-110 -right-32 -top-20 z-0"
      />
    </div>

    <NuxtImg
      src="circle.svg"
      provider="sirv"
      class="absolute w-[450px] -rotate-170 -left-28 -bottom-20 z-0"
    />
  </AppSectionWrapper>
</template>

<style>
  .swiper-slide-active .speaker-container{
    width:300px; height:300px;
  }

  .swiper-slide-active .speaker-picture{
    width:300px; height:300px;
  }

  .swiper-slide-active .speaker-blur{
    background-color:#00000000; width:300px; height:300px;
  }

  @media (min-width: 500px) {
    .swiper-slide-active .speaker-container{
      width:350px; height:350px;
    }

    .swiper-slide-active .speaker-picture{
      width:350px; height:350px;
    }

    .swiper-slide-active .speaker-blur{
      background-color:#00000000; width:350px; height:350px;
    }
  }
</style>
