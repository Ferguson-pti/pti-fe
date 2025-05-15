<script setup lang="ts">
defineProps<{
  styleClass: string
  modelValue?: FileList | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: FileList | null): void
}>()

function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.files)
}
</script>

<template>
  <input
    type="file"
    v-bind="$attrs"
    :class="`w-full px-2.5 py-2 border border-slate-400 rounded-md ${styleClass}`"
    @change="onFileChange"
  >
</template>
