<template>
  <AppSectionWrapper bg="bg-custom-red">
    <section class="font-lexend relative w-full h-auto box-border flex flex-col items-start justify-start bg-custom-red py-14 md:py-20">
      <p class="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-6 text-white z-10">
        Timeline
      </p>

      <div class="mt-0 md:mt-10 w-full h-auto flex flex-row items-stretch justify-between">
        <NuxtImg
          src="gabriel-xavier-ZdGNogZXBa0-unsplash.jpg"
          provider="sirv"
          class="hidden md:flex md:w-[350px] lg:w-[400px] xl:w-[480px] bg-custom-grey rounded-xl z-10"
        />

        <div class="w-full md:w-[46%] lg:w-[55%] flex flex-col items-start justify-start z-10">
          <div class="w-full flex flex-row items-start justify-between border-b border-white py-8 px-5">
            <p class="text-5xl md:text-6xl font-bold text-white">
              1
            </p>
            <p class="w-full ml-8 text-lg md:text-xl xl:text-2xl font-medium text-white">
              Opening Ceremony
            </p>
          </div>

          <div class="w-full flex flex-row items-start justify-between border-b border-white py-8 px-5">
            <p class="text-5xl md:text-6xl font-bold text-white">
              2
            </p>
            <p class="w-full ml-8 text-lg md:text-xl xl:text-2xl font-medium text-white">
              CEO’s Roundtable
            </p>
          </div>

          <div class="w-full flex flex-row items-start justify-between border-b border-white py-8 px-5">
            <p class="text-5xl md:text-6xl font-bold text-white">
              3
            </p>
            <p class="w-full ml-8 text-lg md:text-xl xl:text-2xl font-medium text-white">
              Panel Sessions
            </p>
          </div>

          <div class="w-full flex flex-row items-start justify-between border-b border-white py-8 px-5">
            <p class="text-5xl md:text-6xl font-bold text-white">
              4
            </p>
            <p class="w-full ml-8 text-lg md:text-xl xl:text-2xl font-medium text-white">
              Exhibitions
            </p>
          </div>

          <div class="w-full flex flex-row items-start justify-between border-b border-white py-8 px-5">
            <p class="text-5xl md:text-6xl font-bold text-white">
              5
            </p>
            <p class="w-full ml-8 text-lg md:text-xl xl:text-2xl font-medium text-white">
              Women in Oil and Gas Workshop
            </p>
          </div>

          <div class="w-full flex flex-row items-start justify-between border-b border-white py-8 px-5">
            <p class="text-5xl md:text-6xl font-bold text-white">
              6
            </p>
            <p class="w-full ml-8 text-lg md:text-xl xl:text-2xl font-medium text-white">
              Technical Paper Presentations
            </p>
          </div>
        </div>
      </div>
    </section>

    <NuxtImg
      src="circle.svg"
      provider="sirv"
      class="absolute w-[300px] md:w-[400px] 2xl:w-[600px] rotate-0 -left-20 lg:-left-28 top-40 z-0"
    />

    <NuxtImg
      src="circle.svg"
      provider="sirv"
      class="absolute w-[300px] md:w-[400px] 2xl:w-[600px] rotate-0 -right-20 lg:-right-28 -bottom-40 z-0"
    />
  </AppSectionWrapper>
</template>
