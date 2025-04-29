<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()
</script>

<template>
  <div class="relative w-[100vw] h-[100vh] overflow-hidden bg-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
