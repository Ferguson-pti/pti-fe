<script setup lang="ts">
defineProps<{
  styleClass: string
}>()

const ending = new Date(2025, 4, 5).getTime() // 5th May 2025 (milliseconds since epoch)
const now = ref(Date.now())

const { remaining, start } = useCountdown(Math.floor((ending - now.value) / 1000))

const timeLeft = reactive({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
})

watch(remaining, (newVal) => {
  const { days, hours, minutes, seconds } = convertSeconds(newVal)
  timeLeft.days = days
  timeLeft.hours = hours
  timeLeft.minutes = minutes
  timeLeft.seconds = seconds
})

function convertSeconds(sec: number) {
  const days = Math.floor(sec / (24 * 60 * 60))
  sec %= 24 * 60 * 60

  const hours = Math.floor(sec / (60 * 60))
  sec %= 60 * 60

  const minutes = Math.floor(sec / 60)
  const seconds = sec % 60

  const pad = (n: number) => String(n).padStart(2, '0')

  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  }
}

onMounted(() => {
  start()
})
</script>

<template>
  <div class="w-full flex flex-row items-center justify-center">
    <div class="flex flex-col items-center justify-center mx-4">
      <span class="text-8xl font-semibold">{{ timeLeft.days }}</span>
      <span class="tracking-wider">DAYS</span>
    </div>

    <div class="flex flex-col items-center justify-center mx-4">
      <span class="text-8xl font-semibold">{{ timeLeft.hours }}</span>
      <span class="tracking-wider">HOURS</span>
    </div>

    <div class="flex flex-col items-center justify-center mx-4">
      <span class="text-8xl font-semibold">{{ timeLeft.minutes }}</span>
      <span class="tracking-wider">MINUTES</span>
    </div>

    <div class="flex flex-col items-center justify-center mx-4">
      <span class="text-8xl font-semibold">{{ timeLeft.seconds }}</span>
      <span class="tracking-wider">SECONDS</span>
    </div>
  </div>
</template>
