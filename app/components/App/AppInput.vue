<script setup lang="ts">
defineProps<{
  styleClass: string
  modelValue?: string | FileList
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <input
    :value="modelValue"
    v-bind="$attrs"
    :class="`w-full px-2.5 py-2 border border-slate-400 rounded-md ${styleClass}`"
    @input="onInput"
  >
</template>
