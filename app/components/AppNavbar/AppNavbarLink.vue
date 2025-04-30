<script setup lang="ts">
defineProps<{
  to: string
  active: boolean
}>()
</script>

<template>
  <li
    :class="`
        ${active?'text-custom-green underline':'text-black'} mx-5 text-sm font-medium tracking-wider underline-offset-6
        duration-300 hover:text-custom-green hover:cursor-pointer hover:underline`"
  >
    <NuxtLink :to="to">
      <slot />
    </NuxtLink>
  </li>
</template>
