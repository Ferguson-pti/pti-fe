<script setup lang="ts">

</script>

<template>
  <AppSectionWrapper>
    <div class="w-full h-auto py-14 lg:py-20 bg-custom-green flex flex-col items-start justify-start font-lexend">
      <div class="w-full h-auto flex flex-col lg:flex-row items-center justify-between rounded-lg overflow-hidden">
        <div class="w-full lg:w-[55%] py-8 px-6 md:p-20 lg:p-14 rounded-lg z-10 bg-custom-green">
          <p class="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-6 text-white">
            Agenda & Speakers
          </p>

          <p class="mb-10 text-white text-sm md:text-base 2xl:text-xl font-light">
            Dive into ICHST's most powerful moments—where extraordinary voices share groundbreaking strategies. As we prepare to bring this
            transformative energy to San Francisco in September, get inspired by the world-class speakers who have shared the INBOUND stage and see
            why leaders across industries choose INBOUND as their launchpad for what’s next.
          </p>

          <AppButton style-class="text-white bg-custom-red hover:bg-white hover:text-custom-red">
            REGISTER NOW
          </AppButton>
        </div>

        <NuxtImg
          src="DSC_0162.webp"
          provider="sirv"
          class="mt-10 lg:mt-0 w-full lg:w-[400px] xl:w-[500px] bg-custom-grey rounded-lg z-10"
        />
      </div>
    </div>

    <NuxtImg
      src="circle.svg"
      provider="sirv"
      class="absolute w-[300px] md:w-[350px] 2xl:w-[500px] rotate-60 -right-20 lg:-right-28 -top-40 z-0"
    />

    <NuxtImg
      src="circle.svg"
      provider="sirv"
      class="absolute w-[300px] md:w-[350px] 2xl:w-[500px] rotate-60 -left-20 lg:-left-28 -bottom-40 z-0"
    />
  </AppSectionWrapper>
</template>
