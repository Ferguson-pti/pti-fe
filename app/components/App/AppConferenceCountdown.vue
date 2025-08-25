<script setup lang="ts">
const { deadline, timeUnitClass = 'default', textColor = 'text-black' } = defineProps<{
  deadline: number //  (milliseconds since epoch for deadline)
  lateText: string
  containerClass: string
  titleClass: string
  timeContainerClass?: string
  timeUnitClass?: string
  textColor?: string
  numberSize?: string
  textSize?: string
}>()

const now = ref(Date.now())

const { remaining, start, stop } = useCountdown(Math.floor((deadline - now.value) / 1000))

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
  <div :class="containerClass">
    <span
      v-show="!isLate"
      :class="titleClass"
    >CONFERENCE BEGINS IN: </span>

    <div
      :class="`${timeContainerClass} gap-3 md:gap-5
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
        <span :class="`flex md:hidden ${textSize} tracking-wider font-semibold`">HRS</span>
        <span :class="`hidden md:flex ${textSize} tracking-wider font-semibold`">HOURS</span>
      </div>

      <div
        v-show="isMounted && !isLate"
        :class="`${timeUnitClass}`"
      >
        <span :class="`${numberSize} font-semibold`">{{ timeLeft.minutes }}</span>
        <span :class="`flex md:hidden ${textSize} tracking-wider font-semibold`">MINS</span>
        <span :class="`hidden md:flex ${textSize} tracking-wider font-semibold`">MINUTES</span>
      </div>

      <div
        v-show="isMounted && !isLate"
        :class="`${timeUnitClass}`"
      >
        <span :class="`${numberSize} font-semibold`">{{ timeLeft.seconds }}</span>
        <span :class="`flex md:hidden ${textSize} tracking-wider font-semibold`">SECS</span>
        <span :class="`hidden md:flex ${textSize} tracking-wider font-semibold`">SECONDS</span>
      </div>

      <div
        v-show="isLate"
        :class="`${titleClass} text-sm 2xl:text-lg`"
      >
        {{ lateText }}
      </div>
    </div>
  </div>
</template>
