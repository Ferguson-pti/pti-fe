<script setup lang="ts">
defineProps<{
  visible: boolean
}>()
</script>

<template>
  <div class="sticky top-0 w-full h-22 flex flex-col items-center justify-start z-50">
    <div :class="`${visible?'top-0':'-top-24'} absolute bg-custom-green flex flex-row justify-between items-center w-[95%] py-5 px-10 rounded-bl-lg rounded-br-lg duration-300`">
      <AppLogo />

      <ul class="flex flex-row items-center justify-between font-lexend">
        <AppNavbarLink>Register</AppNavbarLink>
        <AppNavbarLink>About</AppNavbarLink>
        <AppNavbarLink>Abstract</AppNavbarLink>
        <AppNavbarLink>Agenda & Speakers</AppNavbarLink>
        <AppNavbarLink>Help</AppNavbarLink>
      </ul>
    </div>
  </div>
</template>
