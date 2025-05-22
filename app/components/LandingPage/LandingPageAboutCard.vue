<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <div class="relative w-[320px] md:w-[350px] lg:w-[320px] aspect-[10/8] rounded-lg bg-white shadow-md overflow-hidden">
    <NuxtImg
      :src="src"
      class="min-w-[130%] box-border"
      provider="sirv"
    />
  </div>
</template>
