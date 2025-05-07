<script setup lang="ts">
const items = Array(10).fill('')
</script>

<template>
  <section class="w-full h-auto py-10 lg:py-20 px-4 md:px-10 lg:px-16 bg-custom-cream flex flex-col items-center justify-start font-lexend">
    <p class="text-3xl md:text-6xl font-medium mb-6 text-custom-green font-medium">
      FAQs
    </p>

    <div class="mt-0 md:mt-8 w-full md:w-[85%] lg:w-[60%] flex flex-col items-start justify-start">
      <HelpPageFaqRow
        v-for="(item, index) in items"
        :key="`faq${index}`"
        :last="index===items.length-1"
      />
    </div>
  </section>
</template>
