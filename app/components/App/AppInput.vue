<script setup lang="ts">
const props = defineProps<{
  styleClass?: string
  modelValue?: string | number | FileList | null
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | number | FileList | null): void
  (event: 'blur'): void
}>()

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

function onBlur() {
  emit('blur')
}
</script>

<template>
  <input
    :value="props.modelValue"
    v-bind="$attrs"
    :class="[
      'w-full px-2.5 py-2 border border-slate-400 rounded-md focus:outline-none',
      props.styleClass,
    ]"
    @input="onInput"
    @blur="onBlur"
  />
</template>
