import { KEY } from '~/utils/index'

export const useToken = () => useCookie<string | null>(KEY.ADMIN, {
  default: () => null,
  path: '/',
  maxAge: 2 * 24 * 60 * 60,
  secure: process.env.NODE_ENV === 'production',
  sameSite: true,
})
