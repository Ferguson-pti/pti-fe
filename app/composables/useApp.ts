export function useApp() {
  const loginModal = useState('login-modal', () => false)
  const tokenModal = useState('token-modal', () => false)

  const showLoginModal = () => {
    loginModal.value = true
  }

  const hideLoginModal = () => {
    loginModal.value = false
  }

  const showTokenModal = () => {
    tokenModal.value = true
  }

  const hideTokenModal = () => {
    tokenModal.value = false
  }

  return { loginModal, hideLoginModal, showLoginModal, tokenModal, hideTokenModal, showTokenModal }
}
