<script setup lang="ts">

</script>

<template>
  <AppSectionWrapper>
    <section class="w-full h-auto py-14 md:py-20 bg-custom-cream flex flex-col items-start justify-start font-lexend">
      <div class="relative w-full  h-[450px] md:h-[650px] lg:h-96 flex flex-col-reverse lg:flex-row-reverse items-center justify-between rounded-lg overflow-hidden bg-custom-red z-10">
        <div class="absolute left-0 bg-custom-red w-full lg:w-[50%] lg:h-full py-8 px-4 md:p-8 lg:p-10 z-10">
          <p class="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-6 text-white font-medium">
            Join the Energy Evolution
          </p>

          <p class="mb-10 text-white text-sm md:text-base 2xl:text-xl leading-6 md:leading-7">
            Abuja is calling. Join fellow change-makers for two high-impact days of powerful insights and real connections.
            Leave with proven tactics and strategies that drive results.
          </p>

          <AppButton style-class="text-white border border-white bg-custom-red hover:bg-white hover:text-custom-red">
            REGISTER NOW
          </AppButton>
        </div>

        <NuxtImg
          src="pexels-jakub-pabis-147246622-15970032.webp"
          provider="sirv"
          class="absolute top-0 w-auto lg:w-auto lg:h-full right-0 z-0 bg-custom-grey"
        />
      </div>
    </section>

    <NuxtImg
      src="circle.svg"
      provider="sirv"
      class="absolute w-[300px] md:w-[400px] rotate-180 left-20 lg:left-60 xl:left-120 -top-40 z-0"
    />

    <NuxtImg
      src="circle.svg"
      provider="sirv"
      class="absolute w-[300px] md:w-[400px] rotate-180 -right-20 -bottom-40 z-0"
    />
  </AppSectionWrapper>
</template>
