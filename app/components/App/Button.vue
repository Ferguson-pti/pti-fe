<script setup lang="ts">
defineProps<{
  styleClass: string
}>()
</script>

<template>
  <button
    v-bind="$attrs"
    :class="`px-4.5 py-3.5 text-xs font-lexend tracking-widest font-medium rounded-lg cursor-pointer duration-300 ${styleClass}`"
  >
    <slot />
  </button>
</template>
