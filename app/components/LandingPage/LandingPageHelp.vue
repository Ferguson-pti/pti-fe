<script setup lang="ts">

</script>

<template>
  <section class="w-full h-auto  py-4 md:py-10 lg:py-20 px-4 md:px-10 lg:px-16 bg-custom-red flex flex-col items-start justify-start font-lexend">
    <div class="w-full h-auto lg:h-80 flex flex-col-reverse lg:flex-row items-center justify-between rounded-xl overflow-hidden">
      <div class="w-full lg:w-[50%] p-4 md:p-10">
        <p class="text-3xl md:text-5xl lg:text-6xl font-medium mb-6 text-white font-medium">
          Help Center
        </p>

        <p class="mb-10 text-white">
          Have questions about ICHST? Check out our Help Center for everything you need to know about joining us in Abuja.
        </p>

        <AppButton style-class="text-white border border-white bg-custom-red hover:bg-white hover:text-custom-red">
          VIST THE HELP CENTER
        </AppButton>
      </div>

      <NuxtImg
        src="johannes-plenio-JPZa7fltJ2Q-unsplash.webp"
        provider="sirv"
        class="h-full right-0"
      />
    </div>
  </section>
</template>
