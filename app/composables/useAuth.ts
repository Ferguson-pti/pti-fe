import type { User } from '~~/types/auth'

export const useAuth = () => {
  const token = useCookie('pti-user-token', {
    sameSite: 'lax',
    secure: true,
    path: '/',
  }) // Store the Strapi JWT
  const user = useState<User | null>('pti-user-info', () => null) // Store the Strapi User
  const config = useRuntimeConfig()

  async function login(email: string, password: string) {
    try {
      const { data, error } = await useFetch(`${config.public.strapiurl}/api/auth/local`, {
        method: 'POST',
        body: { identifier: email, password },
      })

      if (error.value) throw error.value

      const res = data.value as { jwt: string, user: User }
      token.value = res.jwt
      user.value = res.user

      return res.user
    }
    catch (err) {
      console.error('Login failed:', err)
      throw err
    }
  }

  async function getCurrentUser() {
    console.log('current')
    if (!token.value) return null
    console.log(config.public.strapiurl)
    try {
      const data = await $fetch(`${config.public.strapiurl}/api/users/me`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })

      user.value = data as User
      return user.value
    }
    catch (err) {
      console.error('Failed to fetch current user:', err)
      logout()
      return null
    }
  }

  function logout() {
    user.value = null
    token.value = null
  }

  onMounted(async () => {
    console.log('mount')
    console.log(user.value, token.value)
    if (!user.value && token.value) {
      await getCurrentUser()
    }
  })

  return { user, token, login, logout }
}
