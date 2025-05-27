<script setup lang="ts">
import { useShowConfirmPaymentModal } from '~~/stores/useShowConfirmPaymentModal'
import { useShowPaymentModalStore } from '~~/stores/useShowPaymentModalStore'

const paymentModal = useShowPaymentModalStore()
const confirmPaymentModal = useShowConfirmPaymentModal()

const closeModal = () => {
  paymentModal.setEmail(null)
  confirmPaymentModal.hideModal()
}
</script>

<template>
  <div class="w-[100vw] h-[100vh] fixed top-0 left-0 z-50 flex flex-row items-center justify-center bg-[#00000090] font-lexend">
    <div class="relative w-[400px] h-auto bg-white rounded-lg p-8 flex flex-col items-center justify-start">
      <span class="text-center">
        Once your payment is confirmed, an email will be sent
        <strong>{{ `${paymentModal.email ? `to ${paymentModal.email}` : ''}` }}</strong>
        along with the details of the account created for you
      </span>

      <AppButton
        style-class="mt-8 w-full text-white border border-custom-red bg-custom-red hover:bg-white hover:text-custom-red flex items-center justify-center"
        @click="closeModal"
      >
        PROCEED
      </AppButton>
    </div>
  </div>
</template>
