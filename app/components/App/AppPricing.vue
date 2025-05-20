<script setup lang="ts">
import { AppPricingCard } from '#components'

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
  <section class="w-full py-20 px-4 md:px-10 xl:px-16 bg-custom-cream flex flex-col items-start justify-start font-lexend">
    <h1 class="text-4xl md:text-5xl lg:text-7xl text-custom-green w-[60%] font-medium">
      Secure Your Spot
    </h1>

    <a class="text-custom-green underline text-lg mt-6 cursor-pointer">Refund Policy</a>

    <p class="mt-8 mx-auto mb-4 text-custom-red">
      EARLY BIRD DISCOUNT ENDS IN:
    </p>
    <AppCountdown />

    <div class="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-8 lg:gap-6 xl:gap-20">
      <AppPricingCard
        v-for="(item, index) in data"
        :key="`pricingcard${index}`"
        :name="item.name"
        :price="item.price"
        :discount="item.discount"
        :percent="item.percent"
      />
    </div>
  </section>
</template>
