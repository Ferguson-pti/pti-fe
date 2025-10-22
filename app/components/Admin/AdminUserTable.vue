<script lang="ts" setup>
// import { useMessage } from '~/composable/useApp'
import { useAttendees, useAttendeeMutation } from '#imports'

const { state, data } = useAttendees()
const { markAttendee, activeAttendeeId, marking } = useAttendeeMutation()

const attendees = computed(() => data.value?.results ?? [])

const { copy, copied } = useClipboard()
const toast = useToast()

// const emit = defineEmits<{ update: [value: string] }>()

watch(copied, (newCopied) => {
  if (newCopied) {
    toast.success({ title: 'Success!', message: 'Text copied to clipboard' })
  }
})
</script>

<template>
  <div class="mt-3 mb-4 3xl:min-h-140 min-h-95">
    <table class="w-full border-collapse bg-white text-left text-sm">
      <thead class="bg-light-6 font-karbon-bold border-b">
        <tr>
          <th
            scope="col"
            class="px-3 py-2"
          >
            Id
          </th>
          <th
            scope="col"
            class="px-3 py-2"
          >
            Title
          </th>
          <th
            scope="col"
            class="px-5 py-2"
          >
            Name
          </th>
          <th
            scope="col"
            class="px-3 py-2"
          >
            Phone
          </th>
          <th
            scope="col"
            class="px-4 py-2"
          >
            Affiliation
          </th>
          <th
            scope="col"
            class="px-4 py-2"
          >
            Category
          </th>
          <th
            scope="col"
            class="px-3 py-2"
          >
            Signed
          </th>
          <th
            scope="col"
            class="px-4 py-2"
          />
        </tr>
      </thead>

      <tbody class="divide-y divide-neutral-200 border-t border-neutral-200">
        <tr
          v-for="item of attendees"
          :key="item.documentId"
          :class="!item.documentId ? 'bg-red-1': 'hover:bg-light-4'"
        >
          <td>
            <button
              class="px-3 py-2.5 bg-transparent font-medium text-blue-6 hover:text-blue-7 active:text-blue-8"
              :disabled="!item.documentId"
              @click="copy(item.documentId)"
            >
              {{ item.documentId ? item.documentId.substring(0, 4) : '......' }}
            </button>
          </td>
          <td class="px-3 py-1.5 text-nowrap">
            <span class="font-medium capitalize">{{ item.title || '-' }}</span>
          </td>
          <td class="px-5 py-1.5 text-nowrap">
            <span class="font-semibold capitalize">{{ item.username }}</span>
            <span class="block text-sm ">{{ item.email }}</span>
          </td>
          <td class="px-3 py-1.5 text-nowrap">
            <span class="font-normal">{{ item.phone }}</span>
          </td>
          <td
            :title="item.affiliation"
            class="px-4 py-2.5 text-3.25 leading-[1.2]"
          >
            <p class="truncate max-w-55">
              {{ `${item.jobTitle ? `${item.jobTitle},` : ''} ${item.affiliation}` }}
            </p>
          </td>
          <td class="px-4 py-2.5 capitalize">
            {{ item.category }}
          </td>
          <td class="px-3 py-2.5">
            <div
              class="fcc py-1.5 rounded-md flex items-center"
              :class="item.checkedIn ? 'text-green-800': 'text-yellow-500'"
            >
              <Icon
                :name="item.checkedIn ? 'material-symbols:bookmark-check-outline': 'material-symbols:flag-2'"
                class="inline-block mr-1.5 min-w-4 min-h-4"
              />
              <span class="text-sm font-medium text-nowrap">{{ item.checkedIn ? 'checked in': 'pending' }}</span>
            </div>
          </td>
          <td class="px-4 py-2.5 flex items-center justify-center">
            <button
              :class="`w-20 h-8 ${item.checkedIn ? 'bg-gray-400' : 'bg-custom-red'} text-white text-sm rounded-md py-1.5 px-4 cursor-pointer flex items-center justify-center gap-2`"
              :disabled="!item.documentId || marking || item.checkedIn"
              @click="markAttendee({ id: item.documentId })"
            >
              <Icon v-show="item.documentId===activeAttendeeId && marking" name="svg-spinners:270-ring" class="size-4 inline-block" />
              {{ item.documentId===activeAttendeeId && marking ? '' : 'Mark' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div fcc>
      <span
        v-if="state.error"
        class="py-3"
      >
        {{ state.error.message }}
      </span>
    </div>
  </div>
  <AdminUserTablePagination />
</template>
