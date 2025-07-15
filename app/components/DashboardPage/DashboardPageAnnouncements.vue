<script setup lang="ts">
import { Card, CardContent } from '../ui/card'
import { NuxtLink } from '#components'
</script>

<template>
  <div class="w-full h-full flex flex-col items-start justify-start">
    <Card
      v-for="(_, index) in Array(10).fill({})"
      :key="index"
      class="w-full mb-2"
    >
      <CardContent class="flex flex-col md:flex-row items-start justify-between gap-2">
        <span class="flex flex-row items-start gap-3">
          <div class="hidden lg:flex w-6 h-6 bg-slate-300 rounded-sm" />

          <div class="flex flex-col">
            <p class="font-semibold">Notification Title</p>
            <p class="text-sm">Brief notification description here</p>
            <NuxtLink class="mt-2 text-sm underline cursor-pointer">Click link to redirect</NuxtLink>
          </div>
        </span>

        <div class="text-sm">
          31 mins ago
        </div>
      </CardContent>
    </Card>
  </div>
</template>
