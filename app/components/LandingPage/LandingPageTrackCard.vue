<script setup lang="ts">
defineProps<{
  number: number
  title: string
  body: string
}>()

function wordMinimizer(word: string, length: number) {
  const arr = word.split(' ')
  const format = arr.slice(0, length).join(' ') + (arr.length > length ? '...' : '')
  return format
}
</script>

<template>
  <div class="group relative bg-white md:w-[95%] lg:w-auto p-6 md:p-8 lg:px-10 xl:p-14 h-[580px] lg:mr-8 rounded-lg mb-2">
    <p class="absolute text-[250px] md:text-[300px] lg:text-[350px] bottom-0 right-10 z-0 text-[#00000010] font-bold group-hover:text-[#D0262F20] duration-300">
      {{ number }}
    </p>

    <p class="text-2xl md:text-4xl font-medium z-10 group-hover:text-custom-red duration-300 leadnig-auto lg:leading-12">
      {{ title }}
    </p>

    <p class="mt-4 md:mt-8 text-base font-light z-10 group-hover:text-custom-red duration-300 leading-6 md:leading-7">
      <span class="flex xl:hidden">{{ wordMinimizer(body, 60) }}</span>
      <span class="hidden xl:flex">{{ body }}</span>
    </p>
  </div>
</template>
