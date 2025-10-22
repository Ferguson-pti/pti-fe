/* eslint-disable @typescript-eslint/no-dynamic-delete */
export const KEY = {
  ADMIN: 'ichst-admin-token',
  ATTENDEE: 'attendee',
} as const

/* eslint-disable @typescript-eslint/no-explicit-any */
export function updateUrl(params: Record<string, any>) {
  const route = useRoute()
  const router = useRouter()
  const newQuery = { ...route.query }

  Object.entries(params).forEach(([key, value]) => {
    if (value === null || value === undefined || value === '')
      delete newQuery[key]
    else
      newQuery[key] = String(value)
  })

  router.push({ query: newQuery })
}
