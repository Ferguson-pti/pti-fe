<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <div class="relative w-[320px] md:w-[350px] lg:w-[320px] aspect-[10/8] rounded-lg bg-white shadow-md overflow-hidden">
    <Bubble5 style-class="absolute top-0 left-0 origin-top-left scale-40" />
    <NuxtImg
      :src="src"
      class="min-w-[130%] box-border"
      provider="sirv"
    />
  </div>
</template>
