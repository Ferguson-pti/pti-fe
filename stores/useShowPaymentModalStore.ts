import { defineStore } from 'pinia'

interface StateProps {
  visible: boolean
  card: {
    price: string
    name: string
  } | null
  email: string | null
}

export const useShowPaymentModalStore = defineStore('paymentModal', {
  state: (): StateProps => ({
    visible: false,
    card: null,
    email: null,
  }),
  actions: {
    showModal() {
      this.visible = true
    },
    hideModal() {
      this.visible = false
    },
    setCard(card: { price: string, name: string } | null) {
      this.card = card
    },
    setEmail(email: string | null) {
      this.email = email
    },
  },
})
