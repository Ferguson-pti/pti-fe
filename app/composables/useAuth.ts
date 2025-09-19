export function useSession() {
  const cookie = useCookie('pti-user-cookie')

  return cookie
}
