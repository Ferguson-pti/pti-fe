import { defineQuery, defineMutation, useQuery, useQueryCache, useMutation } from '@pinia/colada'
// import { useMessage } from './useApp'
import { useToken } from '#imports'
import type { Strapi5ResponseMany, User } from '~~/types'

export const CANDIDATES_QUERY_KEYS = {
  root: [KEY.ATTENDEE],
  byPageSizeSearch: (page: number, size: number, search: string) =>
    [...CANDIDATES_QUERY_KEYS.root, page, size, search],
}

// const temp = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzYxMDY1NDgwLCJleHAiOjE3NjM2NTc0ODB9.4bZNcshD9iFN9q1fE0fnJNS2O33VH4Tr80ek-dHEh2c'

export const useAttendees = defineQuery(() => {
  // const BE = useStrapiUrl()
  const token = useToken()
  const route = useRoute()

  const isBigScreen = useMediaQuery('(min-width: 1700px)', { ssrWidth: 1024 })

  const getPageSize = computed(() => isBigScreen.value ? 14 : 7)

  const currentPage = computed(() => {
    const page = Number(route.query.page) || 1
    return page > 0 ? page : 1
  })

  const pageSize = useState(() => {
    const urlPageSize = Number(route.query.pageSize)
    return urlPageSize > 0 ? urlPageSize : getPageSize.value
  })

  const search = useState(() => route.query.s as string || '')

  const pagination = ref({
    pageIndex: currentPage.value - 1,
    pageSize: pageSize.value,
  })

  watch([currentPage, pageSize], ([newPage, newPageSize]) => {
    pagination.value = {
      pageIndex: newPage - 1,
      pageSize: newPageSize,
    }
  })

  watch(isBigScreen, (newValue) => {
    const newPageSize = newValue ? 14 : 7
    pagination.value = {
      pageIndex: 0,
      pageSize: newPageSize,
    }
    pageSize.value = newPageSize
    updateUrl({ page: 1, pageSize: newPageSize })
  })

  const { state, data, refetch: getUser, isLoading } = useQuery({
    key: () => CANDIDATES_QUERY_KEYS.byPageSizeSearch(currentPage.value, pageSize.value, search.value),
    query: () => $fetch<Strapi5ResponseMany<InstanceType<typeof User>>>(
      // `${BE}/users`,
      `https://pti-be-n3ic.onrender.com/content-manager/collection-types/plugin::users-permissions.user?page=${currentPage.value}&pageSize=${pageSize.value}&_q=${search.value}`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      },
    ),
    // enabled: () => token.value ? true : false,
  })

  const goToPage = (page: number) => {
    if (page >= 1) {
      updateUrl({ page })
    }
  }

  const updatePageSize = (newPageSize: number) => {
    updateUrl({
      pageSize: newPageSize,
      page: 1,
    })
  }

  const updateSearch = (searchTerm: string) => {
    search.value = searchTerm
    updateUrl({ s: search.value, page: 1 })
  }

  const clearFilters = () => {
    updateUrl({ s: '', page: 1 })
  }

  const totalCount = computed(() => data.value?.pagination.total ?? 0)

  onMounted(() => {
    updateUrl({ page: currentPage.value, pageSize: pageSize.value })
  })

  watch(
    () => route.name,
    newName => newName === '' && updateUrl({ page: currentPage.value, pageSize: pageSize.value }),
  )

  return {
    pagination, state, data, goToPage, currentPage, pageSize, getUser, isLoading,
    totalCount, updatePageSize, search, updateSearch, clearFilters,
  }
})

export const useAttendeeMutation = defineMutation(() => {
  const queryCache = useQueryCache()
  const activeAttendeeId = ref<string | null>(null)
  const toast = useToast()
  const token = useToken()

  const { mutateAsync: markAttendee, isLoading: marking, status } = useMutation({
    mutation: ({ id }: { id: string, pause?: boolean }) => {
      activeAttendeeId.value = id
      return $fetch(
        `https://pti-be-n3ic.onrender.com/content-manager/collection-types/plugin::users-permissions.user/${id}`,
        {
          method: 'PUT',
          body: { checkedIn: true },
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        },
      )
    },
    async onSuccess(_, { pause }) {
      if (!pause) {
        activeAttendeeId.value = null
        await queryCache.invalidateQueries({ key: [KEY.ATTENDEE] })
        toast.success({ title: 'Success!', message: 'Attendee checked in.' })
      }
    },
    async onError() {
      activeAttendeeId.value = null
      toast.success({ title: 'Error!', message: 'Checked in failed.' })
    },
  })

  return { markAttendee, activeAttendeeId, marking, status }
})
