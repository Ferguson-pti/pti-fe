<script setup lang="ts">
const items = Array(10).fill('')
</script>

<template>
  <section class="w-full h-auto py-20 px-16 bg-custom-cream flex flex-col items-center justify-start font-lexend">
    <p class="text-6xl font-medium mb-6 text-custom-green font-medium">
      FAQs
    </p>

    <div class="mt-8 w-[60%] flex flex-col items-start justify-start">
      <HelpPageFaqRow
        v-for="(item, index) in items"
        :key="`faq${index}`"
        :last="index===items.length-1"
      />
    </div>
  </section>
</template>
