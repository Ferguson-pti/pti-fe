<script setup lang="ts">
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>

<template>
  <p class="font-bold text-xl">
    Calendar
  </p>

  <Tabs default-value="day1">
    <TabsList class="grid w-full grid-cols-3">
      <TabsTrigger value="day1">
        Day 1
      </TabsTrigger>
      <TabsTrigger value="day2">
        Day 2
      </TabsTrigger>
      <TabsTrigger value="day3">
        Day 3
      </TabsTrigger>
    </TabsList>
    <TabsContent value="day1">
      <Card>
        <CardHeader>Day 1</CardHeader>
        <CardContent class="space-y-2" />
      </Card>
    </TabsContent>
    <TabsContent value="day2">
      <Card>
        <CardHeader>Day 2</CardHeader>
        <CardContent class="space-y-2" />
      </Card>
    </TabsContent>
    <TabsContent value="day3">
      <Card>
        <CardHeader>Day 3</CardHeader>
        <CardContent class="space-y-2" />
      </Card>
    </TabsContent>
  </Tabs>
</template>
