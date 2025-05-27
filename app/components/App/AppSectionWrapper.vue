<script lang="ts" setup>
defineProps<{
  bg?: string
}>()
</script>

<template>
  <section :class="`${bg} relative w-full h-auto flex flex-col items-start justify-start px-4 md:px-8 lg:px-10 xl:px-20 2xl:px-32 overflow-hidden`">
    <slot />
  </section>
</template>
