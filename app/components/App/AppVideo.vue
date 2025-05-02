<script setup lang="ts">
defineProps<{
  styleClass?: string
}>()
</script>

<template>
  <div :class="`w-full lg:w-[540px] aspect-video bg-custom-grey rounded-lg ${styleClass}`" />
</template>
