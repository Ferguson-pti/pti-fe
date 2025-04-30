<script setup lang="ts">
defineProps<{
  name: string
  price: string
  discount: string
  percent: string
}>()
</script>

<template>
  <article class="rounded-xl h-90 bg-white p-10 flex flex-col items-center cursor-pointer hover:shadow-lg duration-300">
    <span class="text-custom-gold mx-auto text-sm font-medium mb-6 underline underline-offset-4">DISCOUNT ACTIVE</span>

    <h1 class="text-2xl font-medium">
      {{ name }}
    </h1>

    <span class="flex flex-row items-center justify-center mt-8">
      <span class="mx-auto line-through font-bold text-xl text-[#00000050]">{{ price }}</span>
      <span class="mx-auto font-medium text-custom-gold ml-4">{{ `(-${percent} off)` }}</span>

    </span>
    <span class="mx-auto mt-6 font-bold text-3xl">{{ discount }}</span>

    <AppButton style-class="w-full mt-10 border border-custom-gold text-white bg-custom-gold hover:text-custom-gold hover:bg-white duration-300">
      MAKE PAYMENT
    </AppButton>
  </article>
</template>
