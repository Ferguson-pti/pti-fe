<script setup lang="ts">
import { Card, CardContent } from '../ui/card'
import Badge from '../ui/badge/Badge.vue'
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
          <div class="text-sm">Mr Rophi Chukwu</div>
        </span>

        <span class="flex flex-row items-center gap-2">
          <Icon
            name="material-symbols:mail-rounded"
          />
          <div class="text-sm">chukwurophi@gmail.com</div>
        </span>
      </div>

      <div class="mt-3 grid grid-cols-2">
        <span class="flex flex-row items-center gap-2">
          <Icon
            name="material-symbols:call"
          />
          <div class="text-sm">07069651848</div>
        </span>

        <span class="flex flex-row items-center gap-2">
          <Icon
            name="material-symbols:location-on-rounded"
          />
          <div class="text-sm">Nigeria</div>
        </span>
      </div>

      <div class="mt-3 grid grid-cols-2">
        <span class="flex flex-row items-center gap-2">
          <Icon
            name="material-symbols:card-travel-rounded"
          />
          <div class="text-sm">Developer</div>
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
