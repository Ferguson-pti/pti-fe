<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="relative w-[320px] md:w-[350px] lg:w-[320px] aspect-[10/8] rounded-lg bg-white shadow-md">
    <Bubble5 style-class="absolute top-0 left-0 origin-top-left scale-40" />
    {{ title }}
  </div>
</template>
