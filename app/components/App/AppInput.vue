<script setup lang="ts">
defineProps<{
  styleClass: string
}>()
</script>

<template>
  <input
    v-bind="$attrs"
    :class="`${styleClass} w-full mb-5 px-2.5 py-2 border border-slate-400 rounded-md`"
  >
</template>
