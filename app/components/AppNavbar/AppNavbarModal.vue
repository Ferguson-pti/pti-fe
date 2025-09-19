<script setup lang="ts">
import { ABOUT_PAGE, ABSTRACT_PAGE, AGENDA_PAGE, HELP_PAGE, REGISTER_PAGE } from '~/utils/routes'

defineProps<{
  visible: boolean
  hideModal: () => void
}>()

const { showLoginModal } = useApp()
const route = useRoute()
</script>

<template>
  <div :class="`flex lg:hidden absolute ${visible?'top-18 md:top-24':'top-0'} bg-white w-full duration-300 px-4 md:px-8`">
    <ul class="w-full flex flex-col items-start justify-start font-lexend">
      <AppNavbarLink
        :to="REGISTER_PAGE"
        :mobile="true"
        :active="route.path===REGISTER_PAGE"
        @click="hideModal"
      >
        Register
      </AppNavbarLink>

      <AppNavbarLink
        :to="ABOUT_PAGE"
        :mobile="true"
        :active="route.path===ABOUT_PAGE"
        @click="hideModal"
      >
        About
      </AppNavbarLink>

      <AppNavbarLink
        :to="ABSTRACT_PAGE"
        :mobile="true"
        :active="route.path===ABSTRACT_PAGE"
        @click="hideModal"
      >
        Abstract
      </AppNavbarLink>

      <AppNavbarLink
        :to="AGENDA_PAGE"
        :mobile="true"
        :active="route.path===AGENDA_PAGE"
        @click="hideModal"
      >
        Agenda & Speakers
      </AppNavbarLink>

      <AppNavbarLink
        :to="HELP_PAGE"
        :mobile="true"
        :active="route.path===HELP_PAGE"
        @click="hideModal"
      >
        Help
      </AppNavbarLink>

      <NuxtLink
        :to="REGISTER_PAGE"
        @click="hideModal"
      >
        <AppButton style-class="bg-custom-red border text-white hover:bg-white hover:text-custom-red hover:border-custom-red my-6">
          GET TICKETS NOW
        </AppButton>
      </NuxtLink>

      <div class="hidden items-center mt-2 mb-6 gap-4 text-custom-red font-medium tracking-wider text-lg" @click="() => { showLoginModal(); hideModal()  }">
        <div class="border-3 border-custom-red p-2 rounded-full cursor-pointer">
          <Icon
            name="fa6-solid:user"
            class="size-5 text-custom-red"
          />
        </div>

        Login here
      </div>
    </ul>
  </div>
</template>
