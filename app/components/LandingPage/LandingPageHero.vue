<template>
  <AppSectionWrapper>
    <div
      class="
        relative w-full h-auto xl:h-[800px] 2xl:h-auto flex flex-row items-start justify-between
        pt-10 md:pt-20 pb-16 lg:pb-20
    "
    >
      <div class="flex flex-col items-start justify-start w-full lg:w-[55%] bg-custom-green px-4 md:px-10 py-6 md:py-10 rounded-lg z-10">
        <div class="flex lg:hidden flex-col items-start justify-start text-white">
          <span class="font-lexend text-xs md:text-sm font-medium mb-1">OCTOBER 22-23, 2025</span>
          <span class="font-lexend text-xs md:text-sm font-medium mb-8">PTDF TOWERS, CENTRAL BUSINESS DISTRICT, ABUJA, NIGERIA</span>
        </div>

        <p class="font-lexend font-medium text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl text-white">
          Transforming Africa’s Hydrocarbon Sector: <span class="text-custom-red">Balancing Growth, Environment and Governance</span>
        </p>

        <NuxtImg
          src="ptdfbuilding.webp"
          provider="sirv"
          class="mt-6 flex lg:hidden w-full bg-custom-grey rounded-lg"
        />

        <span class="font-lexend text-sm md:text-base 2xl:text-xl mt-6 text-custom-grey">
          International Conference on Hydrocarbon Science and Technology (ICHST) is organized by the Petroleum Training Institute, the foremost
          petroleum technological institute in Sub-Saharan Africa. It is organized biennially to promote technological advancement, enhance
          research, and provide knowledge-sharing platforms across the oil and gas industry spectrum.
        </span>

        <AppConferenceCountdown
          :deadline="new Date(2025, 9, 22).getTime() /*22nd October 2025*/"
          late-text="THE CONFERENCE HAS BEGUN!!!"
          container-class="w-full md:w-auto flex flex-col items-start justify-start"
          title-class="w-full text-center md:text-left mt-6 md:mt-10 mb-3 text-xs md:text-base text-custom-gold font-medium font-lexend"
          time-container-class="w-full h-auto flex flex-row items-center justify-center md:justify-start"
          time-unit-class="flex flex-col md:flex-row items-center md:items-end justify-center md:gap-2"
          text-color="text-custom-gold"
          number-size="text-xl md:text-4xl"
          text-size="text-sm md:text-lg"
          :abbrev="true"
        />
      </div>

      <div class="hidden lg:flex w-auto mt-20 flex flex-col items-start justify-start z-10 text-white">
        <span class="font-lexend text-sm font-medium mb-1">OCTOBER 22-23, 2025</span>
        <span class="font-lexend text-sm font-medium mb-8">PTDF TOWERS, CENTRAL BUSINESS DISTRICT, ABUJA, NIGERIA</span>

        <NuxtImg
          src="ptdfbuilding.webp"
          provider="sirv"
          class="w-full lg:w-[540px] bg-custom-grey rounded-lg"
        />
      </div>

      <NuxtImg
        src="circle.svg"
        provider="sirv"
        class="absolute w-[450px] -right-36 -top-28 z-0"
      />
    </div>

    <NuxtImg
      src="circle.svg"
      provider="sirv"
      class="absolute w-[300px] md:w-[450px] -rotate-10 -left-28 -bottom-20 z-0"
    />
  </AppSectionWrapper>
</template>
