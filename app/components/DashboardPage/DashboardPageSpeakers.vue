<script setup lang="ts">
import Card from '../ui/card/Card.vue'
import CardHeader from '../ui/card/CardHeader.vue'
import CardContent from '../ui/card/CardContent.vue'
</script>

<template>
  <Card class="h-auto">
    <CardHeader class="text-xl font-bold">
      Speakers
    </CardHeader>
    <CardContent>
      <div
        v-for="(speaker, index) in Array(5).fill({})"
        :key="index"
        class="mb-3 flex flex-row items-start justify-start gap-3"
      >
        <div class="w-20 h-20 rounded-sm bg-slate-400 animate-pulse" />

        <div class="flex flex-col items-start justify-start">
          <p class="font-semibold">
            Mr Luca Changretta
          </p>
          <p class="text-sm">
            Managing Director, NNPC
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
