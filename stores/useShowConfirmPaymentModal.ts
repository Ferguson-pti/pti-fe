interface StateProps {
  visible: boolean
}

export const useShowConfirmPaymentModal = defineStore('confirmPaymentModal', {
  state: (): StateProps => ({
    visible: false,
  }),
  actions: {
    showModal() {
      this.visible = true
    },
    hideModal() {
      this.visible = false
    },
  },
})
