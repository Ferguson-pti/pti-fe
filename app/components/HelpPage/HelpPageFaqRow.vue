<script setup lang="ts">
defineProps<{
  question: string
  answer: string
  list?: string[]
  dockedSize: string
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
      w-full ${isOpen ? dockedSize : 'h-18 md:h-14'} overflow-hidden flex flex-col items-start justify-start pt-5
      ${!last && 'border-b'} cursor-pointer font-lexend duration-300 z-10
    `"
    @click="toggleFaq"
  >
    <div class="w-full flex flex-row items-center justify-between">
      <p class="h-10 md:h-auto flex flex-col items-center justify-center text-base px-2.5">
        {{ question }}
      </p>

      <Icon
        name="fa6-solid:angle-down"
        :class="`size-3 text-black ${isOpen && 'rotate-180'} duration-300`"
      />
    </div>

    <div class="mt-3 font-light w-full bg-white p-3 leading-6 text-base md:leading-7">
      {{ answer }}

      <ul class="list-disc pl-4">
        <li
          v-for="(item, index) in list"
          :key="`list${index}`"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
