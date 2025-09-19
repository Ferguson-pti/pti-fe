export function useApp() {
  const loginModal = useState('login-modal', () => false)

  const showLoginModal = () => {
    loginModal.value = true
  }

  const hideLoginModal = () => {
    loginModal.value = false
  }

  return { loginModal, hideLoginModal, showLoginModal }
}
