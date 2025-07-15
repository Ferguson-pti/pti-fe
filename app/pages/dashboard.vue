<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

definePageMeta({
  layout: 'user',
})
</script>

<template>
  <div class="font-lexend w-full min-h-full max-h-auto flex flex-col items-center mb-8 lg:mb-4 px-4">
    <div class="hidden lg:grid w-[85%] h-full pt-14 grid-cols-2 gap-4 lg:gap-8">
      <div class="box-border col-span-1 flex flex-col gap-8">
        <DashboardPageUserDetails />
        <DashboardPageCalendar />
        <DashboardPageSpeakers />
      </div>

      <div class="col-span-1 h-full">
        <DashboardPageAnnouncements />
      </div>
    </div>

    <div class="grid lg:hidden w-full md:w-[75%] h-full pt-8 md:pt-12 grid-cols-1 gap-4 lg:gap-8">
      <Tabs default-value="main">
        <TabsList class="grid w-full grid-cols-2">
          <TabsTrigger value="main">
            Main
          </TabsTrigger>
          <TabsTrigger value="announcements">
            Announcements
          </TabsTrigger>
        </TabsList>
        <TabsContent value="main">
          <div class="flex flex-col gap-8">
            <DashboardPageUserDetails />
            <DashboardPageCalendar />
            <DashboardPageSpeakers />
          </div>
        </TabsContent>
        <TabsContent value="announcements">
          <DashboardPageAnnouncements />
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>
