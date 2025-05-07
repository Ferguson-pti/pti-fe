<script setup lang="ts">
defineProps<{
  item: string
}>()
</script>

<template>
  <article class="w-[280px] md:w-[315px] lg:w-[350px] h-auto aspect-16/9 flex itemss-center justify-center bg-white rounded-lg">
    {{ item }}
  </article>
</template>
