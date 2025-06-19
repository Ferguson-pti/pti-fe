<script setup lang="ts">
const data = [
  {
    name: 'Academia',
    price: '₦60,000',
    discount: '₦50,000',
    percent: '16%',
  },
  {
    name: 'Industry/Others',
    price: '₦110,000',
    discount: '₦100,000',
    percent: '9%',
  },
  {
    name: 'Students',
    price: '₦25,000',
    discount: '₦20,000',
    percent: '20%',
  },
  {
    name: 'International',
    price: '$150',
    discount: '$150',
    percent: '20%',
  },
]
</script>

<template>
  <AppSectionWrapper bg="bg-custom-cream">
    <div class="w-full py-14 md:py-20 flex flex-col items-start justify-start font-lexend z-10">
      <h1 class="w-full text-center text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl text-custom-green w-auto font-medium">
        Secure Your Spot
      </h1>

      <AppDiscountCountdown
        :deadline="new Date(2025, 7, 22).getTime() /*22nd August 2025*/"
        late-text="EARLY BIRD DISCOUNT HAS ENDED"
        container-class="mt-8 mx-auto flex flex-col items-center justify-center"
        title-class="mb-4 xl:mb-8 text-custom-red"
        time-container-class="w-full flex flex-row items-center justify-center gap-7 md:gap-5"
        time-unit-class="w-auto md:w-24 flex flex-col items-center justify-center"
        number-size="text-3xl md:text-5xl 2xl:text-6xl"
        text-size="text-base md:text-lg 2xl:text-xl"
      />

      <div class="w-full flex flex-col items-center justify-start">
        <div class="mt-10 w-full lg:w-[800px] 2xl:w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6 xl:gap-10">
          <AppPricingCard
            v-for="(item, index) in data"
            :key="`pricingcard${index}`"
            :name="item.name"
            :price="item.price"
            :discount="item.discount"
            :percent="item.percent"
          />
        </div>
      </div>

      <a class="text-custom-green underline text-sm md:text-base 2xl:text-xl mx-auto mt-6 cursor-pointer">Refund Policy</a>
    </div>

    <NuxtImg
      src="circleyellow.svg"
      provider="sirv"
      class="absolute w-[300px] md:w-[400px] 2xl:w-[600px] rotate-0 -left-20 lg:-left-28 -top-40 z-0"
    />

    <NuxtImg
      src="circleyellow.svg"
      provider="sirv"
      class="absolute w-[500px] md:w-[600px] 2xl:w-[800px] rotate-0 -right-20 lg:-right-28 -bottom-40 z-0"
    />
  </AppSectionWrapper>
</template>
