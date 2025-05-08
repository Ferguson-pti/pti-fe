<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <article class="relative w-[280px] md:w-[315px] lg:w-[350px] h-auto aspect-16/9 flex items-center justify-center bg-white rounded-lg overflow-hidden">
    <NuxtImg
      :src="src"
      provider="sirv"
      class="absolute w-[100%] h-auto"
    />
  </article>
</template>
