<script setup lang="ts">
defineProps<{
  number: number
  title: string
  body: string
}>()
</script>

<template>
  <div class="group relative bg-white p-14 h-[550px] mr-8 rounded-lg">
    <p class="absolute text-[350px] bottom-0 right-10 z-0 text-[#00000010] font-bold group-hover:text-[#D0262F20] duration-300">
      {{ number }}
    </p>

    <p class="text-4xl font-medium z-10 group-hover:text-custom-red duration-300 leading-12">
      {{ title }}
    </p>

    <p class="mt-8 font-light z-10 group-hover:text-custom-red duration-300 leading-7">
      {{ body }}
    </p>
  </div>
</template>
