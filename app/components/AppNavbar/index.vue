<script setup lang="ts">
import { ABOUT_PAGE, ABSTRACT_PAGE, AGENDA_PAGE, HELP_PAGE, HOME_PAGE, REGISTER_PAGE } from '~/routes'

defineProps<{
  visible: boolean
}>()

const route = useRoute()
</script>

<template>
  <div class="sticky top-0 w-full h-22 flex flex-col items-center justify-start z-50">
    <div :class="`${visible?'top-0':'-top-24'} absolute bg-white flex flex-row justify-between items-center w-full py-5 px-10 duration-300`">
      <NuxtLink :to="HOME_PAGE">
        <AppLogo />
      </NuxtLink>

      <ul class="flex flex-row items-center justify-between font-lexend">
        <AppNavbarLink
          :to="REGISTER_PAGE"
          :active="route.path===REGISTER_PAGE"
        >
          Register
        </AppNavbarLink>

        <AppNavbarLink
          :to="ABOUT_PAGE"
          :active="route.path===ABOUT_PAGE"
        >
          About
        </AppNavbarLink>

        <AppNavbarLink
          :to="ABSTRACT_PAGE"
          :active="route.path===ABSTRACT_PAGE"
        >
          Abstract
        </AppNavbarLink>

        <AppNavbarLink
          :to="AGENDA_PAGE"
          :active="route.path===AGENDA_PAGE"
        >
          Agenda & Speakers
        </AppNavbarLink>

        <AppNavbarLink
          :to="HELP_PAGE"
          :active="route.path===HELP_PAGE"
        >
          Help
        </AppNavbarLink>
      </ul>
    </div>
  </div>
</template>
