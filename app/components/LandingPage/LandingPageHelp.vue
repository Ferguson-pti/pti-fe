<script setup lang="ts">

</script>

<template>
  <AppSectionWrapper bg="bg-custom-red">
    <div class="w-full h-auto py-14 md:py-20 bg-custom-red flex flex-col items-start justify-start font-lexend">
      <div class="relative bg-custom-red w-full h-[450px] md:h-[650px] lg:h-80 xl:h-88 flex flex-col-reverse lg:flex-row-reverse items-center justify-between rounded-xl overflow-hidden z-10">
        <div class="absolute left-0 bg-custom-red w-full lg:w-[50%] lg:h-full p-4 pb-8 md:p-10 z-10">
          <p class="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-6 text-white font-medium">
            Help Center
          </p>

          <p class="mb-10 text-white text-base 2xl:text-xl">
            Have questions about ICHST? Check out our Help Center for everything you need to know about joining us in Abuja.
          </p>

          <NuxtLink href="/help">
            <AppButton style-class="text-white border border-white bg-custom-red hover:bg-white hover:text-custom-red">
              VISIT THE HELP CENTER
            </AppButton>
          </NuxtLink>
        </div>

        <NuxtImg
          src="johannes-plenio-JPZa7fltJ2Q-unsplash.webp"
          provider="sirv"
          class="absolute top-0 w-auto lg:w-auto lg:h-full right-0 z-0"
        />
      </div>
    </div>

    <NuxtImg
      src="circle.svg"
      provider="sirv"
      class="absolute w-[300px] md:w-[350px] 2xl:w-[500px] rotate-60 -left-20 lg:-left-28 -bottom-40 z-0"
    />

    <NuxtImg
      src="circle.svg"
      provider="sirv"
      class="absolute w-[300px] md:w-[400px] rotate-180 left-20 lg:left-60 xl:left-120 -top-40 z-0"
    />
  </AppSectionWrapper>
</template>
