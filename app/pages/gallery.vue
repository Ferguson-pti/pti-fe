<script setup lang="ts">
const PICTURES_01 = [
  'gallery004.jpg', 'gallery008.jpg', 'gallery059.jpg', 'gallery069.jpg', 'gallery075.jpg',
  'gallery089.jpg', 'gallery095.jpg', 'gallery099.jpg', 'gallery137.jpg',
]
const PICTURES_02 = [
  'gallery172.jpg', 'gallery233.jpg', 'gallery254.jpg', 'gallery268.jpg', 'gallery303.jpg',
]
</script>

<template>
  <div class="relative w-full h-auto box-border flex flex-col items-center justify-start bg-white overflow-hidden">
    <div class="relative w-full h-52 md:h-60 px-4 md:px-10 py-14 md:py-20 bg-custom-green font-lexend overflow-hidden">
      <NuxtImg
        src="circle.svg"
        provider="sirv"
        class="absolute w-[300px] md:w-[450px] -rotate-100 -right-40 lg:-right-28 -top-20 z-0"
      />

      <p class="relative text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-white z-10">
        Moments from ICHST 2025
      </p>

      <p class="relative mt-4 text-base 2xl:text-xl text-custom-grey z-10">
        Relive some of our favorite moments from the ICHST 2025 conference
      </p>
    </div>

    <AppSectionWrapper>
      <div class="h-220 md:h-280 lg:h-400 w-full xl:w-240 grid grid-cols-2 mx-auto md:grid-cols-3 grid-rows-6 gap-2 lg:gap-4 bg-white pt-20 lg:pt-32 pb-14">
        <div class="relative hidden md:flex rounded-lg md:rounded-xl row-span-2 overflow-hidden">
          <NuxtImg
            src="gallery001.jpg"
            provider="sirv"
            class="absolute h-full"
          />
        </div>
        <div
          v-for="(image, index) in PICTURES_01"
          :key="index"
          class="relative rounded-lg md:rounded-xl overflow-hidden"
        >
          <NuxtImg
            :src="image"
            provider="sirv"
            class="absolute h-full"
          />
        </div>
        <div class="relative hidden md:flex rounded-lg md:rounded-xl row-span-2 overflow-hidden">
          <NuxtImg
            src="gallery0311.jpg"
            provider="sirv"
            class="absolute h-full"
          />
        </div>
        <div
          v-for="(image, index) in PICTURES_02"
          :key="index"
          class="relative rounded-lg md:rounded-xl overflow-hidden"
        >
          <NuxtImg
            :src="image"
            provider="sirv"
            class="absolute h-full"
          />
        </div>
      </div>
    </AppSectionWrapper>

    <NuxtLink
      to="https://drive.google.com/drive/folders/13XhGl0ZyWii4Ux92_0xKJmVS8w3UW3yj"
      target="_blank"
      class="mb-18 md:mb-24"
    >
      <AppButton
        style-class="bg-custom-red border text-white hover:bg-white hover:text-custom-red hover:border-custom-red"
      >
        VIEW MORE
      </AppButton>
    </NuxtLink>
  </div>
</template>
