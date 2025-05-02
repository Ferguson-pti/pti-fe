<script setup lang="ts">
defineProps<{
  to: string
  active: boolean
  mobile?: boolean
  last?: boolean
}>()
</script>

<template>
  <li
    :class="`
        ${active?'text-custom-green underline':'text-black'} font-medium tracking-wider underline-offset-6
        duration-300 hover:text-custom-green hover:cursor-pointer hover:underline ${!last && 'border-b'}
        ${mobile ? 'w-full py-6 text-base md:text-lg border-black' : 'text-sm mx-5'}
  `"
  >
    <NuxtLink :to="to">
      <slot />
    </NuxtLink>
  </li>
</template>
