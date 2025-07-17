<script setup lang="ts">
interface Option {
  value: string
  placeholder: string
}

defineProps<{
  modelValue?: string
  placeholder: string
  styleClass: string
  options: Option[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onChange(event: Event) {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <select
    :value="modelValue"
    v-bind="$attrs"
    :class="`${styleClass} w-full font-light px-2.5 py-2 border border-slate-400 rounded-md`"
    placeholder="Category"
    @change="onChange"
  >
    <option
      v-show="placeholder!==''"
      value=""
      disabled
      selected
    >
      {{ placeholder }}
    </option>

    <option
      v-for="(option, index) in options"
      :key="`option${index}`"
      :value="option.value"
    >
      {{ option.placeholder }}
    </option>
  </select>
</template>
