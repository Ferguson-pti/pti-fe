<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { AppFooter } from '#components'

useHead({
  title: 'ICHST',
})

const route = useRoute()
const color = ref('bg-custom-green')

watch(route, () => {
  console.log(route.path)
  switch (route.path) {
    case '/':
    case '/agenda':
      color.value = 'bg-custom-green'
      break
    case '/register':
    case '/help':
    case '/about':
    case '/abstract':
      color.value = 'bg-custom-cream'
      break
    default:
      break
  }
}, { immediate: true })

const el = useTemplateRef<HTMLElement>('el')
const { y } = useScroll(el)
const navbarVisible = ref(true)

watch(y, (newValue, oldValue) => {
  // Set navbar visibility
  if (newValue > 50) {
    if (newValue > oldValue) {
      navbarVisible.value = false
    }
    else {
      navbarVisible.value = true
    }
  }
})
</script>

<template>
  <div
    ref="el"
    :class="`relative w-full h-full overflow-y-auto overflow-x-hidden ${color}`"
  >
    <AppBanner />
    <AppNavbar :visible="navbarVisible" />
    <slot />
    <AppFooter />
  </div>
</template>
