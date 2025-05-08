<script setup lang="ts">
defineProps<{
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
        Some frequently asked questions here lorem ipsum and friends
      </p>

      <Icon
        name="fa6-solid:angle-down"
        :class="`size-3 text-black ${isOpen && 'rotate-180'} duration-300`"
      />
    </div>

    <div class="mt-3 font-light bg-white p-3 text-sm leading-6 md:text-base md:leading-7">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </div>
  </div>
</template>
