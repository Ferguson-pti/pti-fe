<script setup lang="ts">
interface Props {
  isOpen: boolean
  class?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{ close: [] }>()

const handleClose = (): void => {
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <div v-show="props.isOpen" class="animate-fade-in fixed top-0 left-0 h-[100vh] w-[100vw] bg-black/50 p-4 z-60" @click="handleClose">
      <button class="absolute p-2 rounded-full top-3 right-4 text-white hover:text-black/50 duration-300" @click="handleClose">
        <Icon name="fa7-solid:close" class="size-4 duration-300 text-gray-300" />
      </button>
      <div class="p-4 w-[calc(100%-2rem)] h-[100%] flex items-center justify-center">
        <div :class="props.class" class="w-120 h-60 bg-white overflow-hidden" @click.stop>
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>
