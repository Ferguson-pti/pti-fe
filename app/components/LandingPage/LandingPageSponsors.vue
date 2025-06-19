<script setup lang="ts">

</script>

<template>
  <AppSectionWrapper bg="bg-white">
    <section class="w-full py-14 md:py-20 flex flex-col items-center justify-start font-lexend">
      <span class="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-custom-green">Host</span>
      <div class="mt-6 flex flex-col items-center justify-center">
        <NuxtImg
          src="/pti.webp"
          provider="sirv"
          alt="logo"
          class="h-20 md:h-32 xl:h-32"
        />
      </div>

      <span class="mt-12 text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-custom-green">Partners</span>

      <div class="mt-6 w-full flex flex-col items-center justify-start gap-4 md:gap-10 flex-wrap lg:px-20 xl:px-40">
        <div class="flex flex-row items-center justify-center gap-4 md:gap-10 flex-wrap">
          <NuxtImg
            src="/nnpc.webp"
            provider="sirv"
            alt="logo"
            class="h-16 md:h-24 xl:h-24"
          />

          <NuxtImg
            src="/partner1.webp"
            provider="sirv"
            alt="logo"
            class="h-20 md:h-32 xl:h-32"
          />

          <NuxtImg
            src="/ptdflogo.webp"
            provider="sirv"
            alt="logo"
            class="h-20 md:h-32 xl:h-32"
          />

          <NuxtImg
            src="/ncdmb.webp"
            provider="sirv"
            alt="logo"
            class="h-22 md:h-36 xl:h-36"
          />

          <NuxtImg
            src="/nuprc.webp"
            provider="sirv"
            alt="logo"
            class="h-20 md:h-32 xl:h-32"
          />

          <NuxtImg
            src="/ccl.webp"
            provider="sirv"
            alt="logo"
            class="h-10 md:h-16 xl:h-16"
          />

          <NuxtImg
            src="/nmdrpa1.webp"
            provider="sirv"
            alt="logo"
            class="h-20 md:h-32 xl:h-32"
          />
        </div>
      </div>
    </section>
  </AppSectionWrapper>
</template>
