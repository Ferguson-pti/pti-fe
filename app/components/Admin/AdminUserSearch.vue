<script lang="ts" setup>
import { useAttendeeMutation, useAttendees } from '#imports'

const { updateSearch, search, clearFilters, isLoading } = useAttendees()
const { marking } = useAttendeeMutation()

const searchInput = ref(search.value)

const debouncedSearch = useDebounceFn((value: string) => {
  updateSearch(value)
}, 300)

watch(searchInput, newValue => debouncedSearch(newValue))

watch(search, (newValue) => {
  if (!newValue && searchInput.value)
    searchInput.value = ''
})

function handleClearFilters() {
  searchInput.value = ''
  clearFilters()
}

const searchRef = ref(null)

const vFocus = {
  mounted: (el: HTMLElement) => el.focus(),
}
</script>

<template>
  <div class="h-full flex flex-col mt-5 pb-10">
    <div class="mb-4 flex">
      <div class="flex gap-4 items-center">
        <form ref="searchRef">
          <div flex="~ row gap-x-4">
            <div class="w-72 relative">
              <AppInput id="search" v-model="searchInput" v-focus name="search" type="text" placeholder="Search attendee by name" form-search class="text-sm" />
              <button
                v-if="searchInput"
                type="button" class="absolute right-0.5 top-1/2 -translate-1/2 bg-transparent"
                @click="handleClearFilters()"
              >
                <Icon name="fa7-solid:close" class="size-4 duration-300 text-red-700" />
              </button>
            </div>
          </div>
        </form>

        <div v-show="isLoading || marking" class="flex items-center gap-1">
          <Icon name="svg-spinners:270-ring" class="size-4 inline-block text-neutral-600" />
          <span class="ml-1 text-4.5 leading-[1] text-sm">Loading</span>
        </div>
      </div>

      <div class="flex-auto" />
      <!-- <TransitionSlide>
        <div v-show="showUpdate" flex gap-x-4 relative>
          <input id="uid" v-model="uid" v-focus name="uid" type="text" placeholder="Uid to Sign Attendee" form-search w-47 />
          <button class="bg-purple-5 hover:bg-purple-6 active:bg-purple-7 duration-300 leading-[1] py-4 px-4 hmax fyc" @click="signAttendee">
            <div v-show="signing" class="i-svg-spinners:180-ring-with-bg text-(2.75 white) mr-1" />
            <span class="text-(2.75 white) font-bold">CHECK IN</span>
          </button>
          <button class="absolute right--9 mt-2 bg-transparent duration-300 text-neutral-5 hover:text-purple-6 active:text-purple-7" @click="showUpdate = false">
            <div i-hugeicons:cancel-circle size-7 />
          </button>
        </div>
      </TransitionSlide> -->
    </div>
    <AdminUserTable />
  </div>
</template>
