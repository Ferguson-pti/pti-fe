<script setup lang="ts">
import { Card, CardContent } from '../ui/card'
import Badge from '../ui/badge/Badge.vue'

const { user } = useAuth()
const router = useRouter()

watch(user, (newValue) => {
  if (newValue === null) {
    router.push(HOME_PAGE)
  }
})
</script>

<template>
  <Card class="h-auto lg:h-60">
    <CardContent>
      <div class="mb-3 flex flex-row items-center justify-between">
        <p class="font-bold text-xl">
          ICHST 2025 Conference
        </p>
        <Badge class="hidden md:flex">
          Attendee Details
        </Badge>
      </div>

      <Badge>Academia Ticket</Badge>

      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-0">
        <span class="flex flex-row items-center gap-2">
          <Icon
            name="material-symbols:person-rounded"
          />
          <div class="text-sm">{{ `${user?.title} ${user?.username}` }}</div>
        </span>

        <span class="flex flex-row items-center gap-2">
          <Icon
            name="material-symbols:mail-rounded"
          />
          <div class="text-sm">{{ user?.email }}</div>
        </span>
      </div>

      <div class="mt-3 grid grid-cols-2">
        <span class="flex flex-row items-center gap-2">
          <Icon
            name="material-symbols:call"
          />
          <div class="text-sm">{{ user?.phone }}</div>
        </span>

        <span class="flex flex-row items-center gap-2">
          <Icon
            name="material-symbols:location-on-rounded"
          />
          <div class="text-sm">{{ user?.nationality }}</div>
        </span>
      </div>

      <div class="mt-3 grid grid-cols-2">
        <span class="flex flex-row items-center gap-2">
          <Icon
            name="material-symbols:card-travel-rounded"
          />
          <div class="text-sm">{{ user?.jobTitle }}</div>
        </span>

        <span class="flex flex-row items-center gap-2">
          <Icon
            name="material-symbols:calendar-month-rounded"
          />
          <div class="text-sm">
            {{ new Date().toDateString() }}
          </div>
        </span>
      </div>
    </CardContent>
  </Card>
</template>
