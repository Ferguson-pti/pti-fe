<script setup lang="ts">
import { useShowPaymentModalStore } from '~~/stores/useShowPaymentModalStore'

const router = useRouter()

const { name, price, discount } = defineProps<{
  name: string
  price: string
  discount: string | null
  percent: string
  isEarly: boolean
}>()

const paymentModal = useShowPaymentModalStore()

const showDetailsForm = () => {
  paymentModal.setCard({ price: price, name: name })
  router.push(PAYMENT_PAGE)
}
</script>

<template>
  <article class="rounded-xl h-auto bg-white p-10 lg:p-8 xl:p-10 flex flex-col items-center cursor-pointer hover:shadow-lg duration-300">
    <span :class="`${isEarly && 'flex'} text-custom-gold mx-auto text-base md:text-sm font-medium mb-6 underline underline-offset-4`">DISCOUNT ACTIVE</span>

    <h1 class="text-2xl lg:text-xl xl:text-2xl font-medium">
      {{ name }}
    </h1>

    <span
      v-show="isEarly"
      class="flex flex-row items-center justify-center mt-8"
    >
      <span class="mx-auto line-through font-bold text-xl text-[#00000050]">{{ price }}</span>
      <span class="mx-auto font-medium text-custom-green ml-4">{{ `(-${percent} off)` }}</span>
    </span>

    <span class="mx-auto mt-6 font-bold text-3xl">{{ discount || price }}</span>

    <AppButton
      style-class="w-full mt-10 border border-custom-gold text-white bg-custom-gold hover:text-custom-gold hover:bg-white duration-300"
      @click="showDetailsForm"
    >
      MAKE PAYMENT
    </AppButton>
  </article>
</template>
