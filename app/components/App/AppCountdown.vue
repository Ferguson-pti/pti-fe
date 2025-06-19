<script setup lang="ts">
const { deadline, timeUnitClass = 'default', textColor = 'text-black', abbrev = false, lateText } = defineProps<{
  deadline: number //  (milliseconds since epoch for deadline)
  lateText: string
  timeContainerClass?: string
  timeUnitClass?: string
  textColor?: string
  numberSize?: string
  textSize?: string
  abbrev?: boolean
}>()

const now = ref(Date.now())

const { remaining, start } = useCountdown(Math.floor((deadline - now.value) / 1000))

const isMounted = ref(false)
const isLate = ref(false)

const timeLeft = reactive({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
})

watch(remaining, (newVal) => {
  if (newVal <= 0) {
    isLate.value = true
    stop()
  }

  const { days, hours, minutes, seconds } = convertSeconds(newVal)
  timeLeft.days = days
  timeLeft.hours = hours
  timeLeft.minutes = minutes
  timeLeft.seconds = seconds

  if (!isMounted.value) {
    isMounted.value = true
  }
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
    :class="`${timeContainerClass} gap-5
    ${textColor}
    font-lexend`"
  >
    <Icon
      v-show="!isMounted && !isLate"
      name="svg-spinners:3-dots-move"
      :class="`size-8 ${textColor}`"
    />

    <div
      v-show="isMounted && !isLate"
      :class="`${timeUnitClass}`"
    >
      <span :class="`${numberSize} font-semibold`">{{ timeLeft.days }}</span>
      <span :class="`${textSize} tracking-wider font-semibold`">DAYS</span>
    </div>

    <div
      v-show="isMounted && !isLate"
      :class="`${timeUnitClass}`"
    >
      <span :class="`${numberSize} font-semibold`">{{ timeLeft.hours }}</span>
      <span :class="`${textSize} tracking-wider font-semibold`">{{ abbrev ? 'HRS' : 'HOURS' }}</span>
    </div>

    <div
      v-show="isMounted && !isLate"
      :class="`${timeUnitClass}`"
    >
      <span :class="`${numberSize} font-semibold`">{{ timeLeft.minutes }}</span>
      <span :class="`${textSize} tracking-wider font-semibold`">{{ abbrev ? 'MINS' : 'MINUTES' }}</span>
    </div>

    <div
      v-show="isMounted && !isLate"
      :class="`${timeUnitClass}`"
    >
      <span :class="`${numberSize} font-semibold`">{{ timeLeft.seconds }}</span>
      <span :class="`${textSize} tracking-wider font-semibold`">{{ abbrev ? 'SECS' : 'SECONDS' }}</span>
    </div>

    <div v-show="isLate">
      {{ lateText }}
    </div>
  </div>
</template>
