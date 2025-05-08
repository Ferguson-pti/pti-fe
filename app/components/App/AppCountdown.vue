<script setup lang="ts">
withDefaults(defineProps<{
  styleClass?: 'sm' | 'default'
  textColor?: string
}>(), {
  styleClass: 'default',
  textColor: 'text-black',
})

const ending = new Date(2025, 6, 5).getTime() // 5th July 2025 (milliseconds since epoch)
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

const styles = {
  sm: {
    container: 'flex flex-col items-center mx-4 md:mx-0 md:block mr-2 md:mr-4',
    numbers: 'text-3xl md:text-5xl lg:text-6xl md:mr-2',
  },
  default: {
    container: 'flex flex-col items-center justify-center mx-3 md:mx-4',
    numbers: 'text-5xl md:text-7xl lg:text-8xl',
  },
}
</script>

<template>
  <div
    :class="`w-full flex flex-row items-center
    ${styleClass==='sm'?'justify-center md:justify-start':'justify-center'}
    ${textColor}
    font-lexend`"
  >
    <div :class="`${styles[styleClass]['container']}`">
      <span :class="`${styles[styleClass]['numbers']} font-semibold`">{{ timeLeft.days }}</span>
      <span class="text-xs md:text-base tracking-wider">DAYS</span>
    </div>

    <div :class="`${styles[styleClass]['container']}`">
      <span :class="`${styles[styleClass]['numbers']} font-semibold`">{{ timeLeft.hours }}</span>
      <span class="text-xs md:text-base tracking-wider">HOURS</span>
    </div>

    <div :class="`${styles[styleClass]['container']}`">
      <span :class="`${styles[styleClass]['numbers']} font-semibold`">{{ timeLeft.minutes }}</span>
      <span class="text-xs md:text-base tracking-wider">MINUTES</span>
    </div>

    <div :class="`${styles[styleClass]['container']}`">
      <span :class="`${styles[styleClass]['numbers']} font-semibold`">{{ timeLeft.seconds }}</span>
      <span class="text-xs md:text-base tracking-wider">SECONDS</span>
    </div>
  </div>
</template>
