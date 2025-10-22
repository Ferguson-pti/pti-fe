<script lang="ts" setup>
import { PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev, PaginationRoot } from 'reka-ui'
import { useAttendees } from '#imports'

const { data, totalCount, pageSize, goToPage, currentPage } = useAttendees()

const handlePageChange = (page: number) => {
  goToPage(page)
}

const startItem = computed(() => {
  if (totalCount.value === 0) return 0
  return (currentPage.value - 1) * pageSize.value + 1
})

const endItem = computed(() => {
  return Math.min(currentPage.value * pageSize.value, totalCount.value)
})
</script>

<template>
  <div className="flex justify-between mt-4">
    <div class="fyc">
      Showing {{ startItem }} to {{ endItem }} of {{ totalCount }} entries
    </div>
    <PaginationRoot
      :items-per-page="pageSize"
      :total="totalCount"
      :sibling-count="1" show-edges
      :default-page="currentPage"
      class="flex justify-end"
    >
      <PaginationList v-slot="{ items }" class="flex flex-row items-center gap-1">
        <PaginationFirst class="fcc gap-1 px-2.5 sm:pr-2.5 size-8 bg-[#f9f9f9] hover:bg-[#f3f3f3]" @click="handlePageChange(1)">
          <Icon name="material-symbols:keyboard-double-arrow-left" class="size-5" />
        </PaginationFirst>
        <PaginationPrev class="fcc gap-1 px-2.5 sm:pr-2.5 size-8 bg-[#f9f9f9] hover:bg-[#f3f3f3]" @click="handlePageChange(currentPage - 1)">
          <Icon name="material-symbols:arrow-back-ios" class="size-3" />
        </PaginationPrev>
        <template v-for="(item, index) in items">
          <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
            <button
              class="size-8 hover border-[#f3f3f3]"
              :class="[item.value === currentPage ? 'hover:bg-custom-red bg-custom-green text-white ':'bg-[#f9f9f9] hover:bg-[#f3f3f3]']"
              @click="handlePageChange(item.value)"
            >
              {{ item.value }}
            </button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index">
            <Icon name="solar:menu-dots-bold" class="text-base" />
          </PaginationEllipsis>
        </template>
        <PaginationNext class="fcc gap-1 px-2.5 sm:pr-2.5 size-8 bg-[#f9f9f9] hover:bg-[#f3f3f3]" @click="handlePageChange(currentPage + 1)">
          <Icon name="material-symbols:arrow-forward-ios" class="size-3" />
        </PaginationNext>
        <PaginationLast class="fcc gap-1 flex items-center justify-center size-8 bg-[#f9f9f9] hover:bg-[#f3f3f3]" @click="handlePageChange(data!.pagination.pageCount)">
          <Icon name="material-symbols:keyboard-double-arrow-right" class="size-5"/>
        </PaginationLast>
      </PaginationList>
    </PaginationRoot>
  </div>
</template>
