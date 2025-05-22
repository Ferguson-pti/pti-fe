<script setup lang="ts">
defineProps<{
  question: string
  answer: string
  list: string[]
  last: boolean
}>()

const isOpen = ref(false)

const toggleFaq = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div
    :class="`
      w-full ${isOpen ? 'h-96 md:h-72 lg:h-54' : 'h-18 md:h-14'} overflow-hidden flex flex-col items-start justify-start pt-5
      ${!last && 'border-b'} cursor-pointer font-lexend duration-300
    `"
    @click="toggleFaq"
  >
    <div class="w-full flex flex-row items-center justify-between">
      <p class="text-sm md:text-base px-2.5">
        {{ question }}
      </p>

      <Icon
        name="fa6-solid:angle-down"
        :class="`size-3 text-black ${isOpen && 'rotate-180'} duration-300`"
      />
    </div>

    <div class="mt-3 font-light bg-white p-3 text-sm leading-6 md:text-base md:leading-7">
      {{ answer }}

      <ol>
        <li
          v-for="(item, index) in list"
          :key="`list${index}`"
        >
          {{ item }}
        </li>
      </ol>
    </div>
  </div>
</template>
