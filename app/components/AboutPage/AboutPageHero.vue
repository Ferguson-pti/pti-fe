<script setup lang="ts">

</script>

<template>
  <AppSectionWrapper bg="bg-custom-green">
    <div class="w-full py-14 md:py-20 bg-custom-green flex flex-col lg:flex-row items-start justify-between font-lexend">
      <div class="w-full lg:w-[60%] bg-custom-green font-lexend py-8 px-6 md:p-20 lg:p-14 rounded-lg z-10">
        <p class="font-medium text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl text-white">
          Who We Are
        </p>
        <p class="mt-4 md:mt-8 mb-12 text-sm md:text-base 2xl:text-xl leading-6 md:leading-7 2xl:leading-8 text-custom-grey">
          The Petroleum Training Institute offers a rigorous academic program with a history of excellence in Engineering, Safety and
          Environmental Studies, Oil and Gas, Welding and Offshore Technology, and Computing. We provide a rock solid foundation that
          challenges students to make contributions to today's Oil and Gas, and Allied Industries.
        </p>

        <AppButton style-class="border border-white bg-custom-green text-white hover:bg-white hover:text-custom-green">
          VIST OUR SITE
        </AppButton>
      </div>

      <NuxtImg
        src="whoweare.webp"
        provider="sirv"
        class="mt-10 bg-custom-grey  w-full lg:w-[400px] xl:w-[500px] rounded-lg z-10"
      />
    </div>

    <NuxtImg
      src="circle.svg"
      provider="sirv"
      class="absolute w-[300px] md:w-[400px] rotate-0 -left-20 lg:-left-40 -bottom-40 z-0"
    />

    <NuxtImg
      src="circle.svg"
      provider="sirv"
      class="absolute w-[300px] md:w-[400px] rotate-0 left-20 lg:left-60 xl:left-140 -top-40 z-0"
    />
  </AppSectionWrapper>
</template>
