<script setup lang="ts">
const { deadline, styleClass = 'default', textColor = 'text-black', abbrev = false } = defineProps<{
  deadline: number //  (milliseconds since epoch)
  containerClass?: string
  styleClass?: string
  textColor?: string
  numberSize?: string
  textSize?: string
  abbrev?: boolean
}>()

const now = ref(Date.now())

const { remaining, start } = useCountdown(Math.floor((deadline - now.value) / 1000))

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
  <div
    :class="`${containerClass} gap-5
    ${textColor}
    font-lexend`"
  >
    <div :class="`${styleClass}`">
      <span :class="`${numberSize} font-semibold`">{{ timeLeft.days }}</span>
      <span :class="`${textSize} tracking-wider font-semibold`">DAYS</span>
    </div>

    <div :class="`${styleClass}`">
      <span :class="`${numberSize} font-semibold`">{{ timeLeft.hours }}</span>
      <span :class="`${textSize} tracking-wider font-semibold`">{{ abbrev ? 'HRS' : 'HOURS' }}</span>
    </div>

    <div :class="`${styleClass}`">
      <span :class="`${numberSize} font-semibold`">{{ timeLeft.minutes }}</span>
      <span :class="`${textSize} tracking-wider font-semibold`">{{ abbrev ? 'MINS' : 'MINUTES' }}</span>
    </div>

    <div :class="`${styleClass}`">
      <span :class="`${numberSize} font-semibold`">{{ timeLeft.seconds }}</span>
      <span :class="`${textSize} tracking-wider font-semibold`">{{ abbrev ? 'SECS' : 'SECONDS' }}</span>
    </div>
  </div>
</template>
