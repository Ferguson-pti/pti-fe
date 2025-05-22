<script setup lang="ts">
const show = ref(true)

const hide = () => {
  show.value = false
}
</script>

<template>
  <div
    :class="`
        relative ${show?'flex':'hidden'} flex-col md:flex-row justify-center items-center w-full bg-custom-gold text-white
        text-center py-3 xl:py-0 h-auto xl:h-12 px-2 md:px-8 font-lexend text-xs md:text-sm tracking-widest`"
  >
    <span class="text-wrap w-auto text-[13px] flex flex-col md:flex-row items-center justify-center">
      <span class="w-auto md:mr-2 text-sm 2xl:text-lg text-nowrap">CONFERENCE BEGINS IN: </span>

      <!-- For mobile -->
      <AppCountdown
        :deadline="new Date(2025, 9, 22).getTime() /*22nd October 2025*/"
        container-class="w-auto flex flex-row items-center justify-center"
        style-class="flex md:hidden flex-col md:flex-row justify-center items-center md:gap-1"
        text-color="w-full mt-1 md:mt-0 text-white"
        text-size="text-xs md:text-sm 2xl:text-lg"
        number-size="text-sm 2xl:text-lg"
        :abbrev="true"
      />

      <!-- For larger screens -->
      <AppCountdown
        :deadline="new Date(2025, 9, 22).getTime() /*22nd October 2025*/"
        container-class="w-auto flex flex-row items-center"
        style-class="hidden md:flex flex-col md:flex-row justify-center items-center md:gap-1"
        text-color="w-full mt-1 md:mt-0 text-white"
        text-size="text-xs md:text-sm 2xl:text-lg"
        number-size="text-sm 2xl:text-lg"
      />
    </span>

    <Icon
      name="fa6-solid:xmark"
      class="size-4 absolute right-4 md:right-8 lg:right-10 text-white cursor-pointer"
      @click="hide()"
    />
  </div>
</template>
