<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { AppFooter } from '#components'
import { useShowPaymentModalStore } from '~~/stores/useShowPaymentModalStore'
import { useShowConfirmPaymentModal } from '~~/stores/useShowConfirmPaymentModal'

const paymentmodal = useShowPaymentModalStore()
const confirmPaymentModal = useShowConfirmPaymentModal()

const el = useTemplateRef<HTMLElement>('el')
const { y } = useScroll(el)
const navbarVisible = ref(true)

console.log('<>' + paymentmodal.visible)

useHead({
  title: 'ICHST',
})

const route = useRoute()
const color = ref('bg-custom-green')

watch(route, () => {
  console.log(route.path)
  // Switch background color depending on the route
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

  console.log(Object.keys(route.query).length)
  const queryKeys = Object.keys(route.query)
  const arg = queryKeys.includes('trxref') && queryKeys.includes('reference')

  switch (arg) {
    case true:
      confirmPaymentModal.showModal()
      break
    default:
      break
  }

  if (el.value) {
    el.value.scrollTo({ top: 0, behavior: 'smooth' })
  }
}, { immediate: true })

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

    <AppPaymentModal
      v-if="paymentmodal.visible"
    />

    <AppConfirmPaymentModal
      v-show="confirmPaymentModal.visible"
    />
  </div>
</template>
