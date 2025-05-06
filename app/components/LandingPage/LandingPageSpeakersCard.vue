<template>
  <div
    class="speaker-container relative w-[250px] h-[250px] flex flex-row items-center justify-center"
  >
    <img
      :src="img"
      class="w-[250px] h-[250px] rounded-lg speaker-picture duration-300"
    >

    <div class="absolute bg-[#00000060] w-[250px] h-[250px] rounded-lg top-0 left-0 speaker-blur duration-300" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  img: string
}>()
</script>
