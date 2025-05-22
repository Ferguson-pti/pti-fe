<script setup lang="ts">

</script>

<template>
  <AppSectionWrapper bg="bg-white">
    <section class="w-full py-14 md:py-20 flex flex-col items-center justify-start font-lexend">
      <span class="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-custom-gold">Partners</span>

      <div class="mt-12 w-full flex flex-col items-center justify-start gap-4 md:gap-10 flex-wrap">
        <div class="flex flex-row items-center justify-center gap-4 md:gap-10 flex-wrap">
          <NuxtImg
            src="/partner2.webp"
            provider="sirv"
            alt="logo"
            class="h-20 md:h-40 xl:h-40"
          />

          <NuxtImg
            src="/partner1.webp"
            provider="sirv"
            alt="logo"
            class="h-20 md:h-40 xl:h-40"
          />

          <NuxtImg
            src="/partner5.webp"
            provider="sirv"
            alt="logo"
            class="h-20 md:h-40 xl:h-40"
          />
        </div>

        <div class="flex flex-row items-center justify-center gap-4 md:gap-10 flex-wrap">
          <NuxtImg
            src="/partner3.webp"
            provider="sirv"
            alt="logo"
            class="h-10 md:h-16 xl:h-16"
          />
          <NuxtImg
            src="/partner4.webp"
            provider="sirv"
            alt="logo"
            class="h-16 md:h-24 xl:h-24"
          />
          <NuxtImg
            src="/partner6.webp"
            provider="sirv"
            alt="logo"
            class="h-14 md:h-20 xl:h-24"
          />
        </div>

        <div class="flex flex-row items-center justify-center gap-4 md:gap-10 flex-wrap">
          <NuxtImg
            src="/partner7.webp"
            provider="sirv"
            alt="logo"
            class="h-18 md:h-32 xl:h-32"
          />
          <NuxtImg
            src="/partner8.webp"
            provider="sirv"
            alt="logo"
            class="h-16 md:h-28 xl:h-28"
          />
        </div>
      </div>
    </section>
  </AppSectionWrapper>
</template>
