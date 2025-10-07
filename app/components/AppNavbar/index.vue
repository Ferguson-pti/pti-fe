<script setup lang="ts">
import { ABOUT_PAGE, ABSTRACT_PAGE, AGENDA_PAGE, HELP_PAGE, HOME_PAGE, REGISTER_PAGE } from '~/utils/routes'
import { userAvatarText } from '~~/helpers/functions'

defineProps<{
  visible: boolean
}>()

const { showLoginModal } = useApp()
const { user, logout } = useAuth()
const route = useRoute()
const showMenuModal = ref(false)

const toggleModal = () => {
  showMenuModal.value = !showMenuModal.value
}

const hideModal = () => {
  showMenuModal.value = false
}

const something = () => {
  hideModal()
}
</script>

<template>
  <div class="sticky top-0 w-full h-18 flex flex-col items-center justify-start z-50">
    <div :class="`${visible?'top-0':'-top-24'} shadow-md absolute bg-white flex flex-row justify-between items-center w-full py-4.5 px-4 md:px-8 lg:px-10 xl:px-20 2xl:px-48 duration-300`">
      <NuxtLink
        :to="HOME_PAGE"
        @click="something()"
      >
        <NuxtImg
          src="/logo-black.png"
          provider="sirv"
          alt="logo"
          class="h-10 md:h-16"
        />
      </NuxtLink>

      <ul class="hidden lg:flex flex-row items-center justify-between font-lexend">
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

      <div v-if="user" class="hidden lg:flex items-center gap-6">
        <NuxtLink :to="DASHBOARD_PAGE">
          <div class="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full font-semibold text-lg font-lexend">
            {{ userAvatarText(user.username) }}
          </div>
        </NuxtLink>

        <div @click="logout" class="underline font-medium cursor-pointer text-custom-red">
          Logout
        </div>
      </div>

      <span v-else class="hidden lg:flex gap-6 items-center">
        <NuxtLink :to="REGISTER_PAGE">
          <AppButton
            style-class="bg-custom-red border text-white hover:bg-white hover:text-custom-red hover:border-custom-red"
          >
            GET TICKETS NOW
          </AppButton>
        </NuxtLink>

        <div class="border-3 border-custom-red p-1.5 rounded-full cursor-pointer" @click="showLoginModal">
          <Icon
            name="fa6-solid:user"
            class="size-5 text-custom-red"
          />
        </div>
      </span>

      <Icon
        v-show="!showMenuModal"
        name="solar:hamburger-menu-broken"
        class="size-7 md:size-10 absolute right-4 md:right-8 lg:right-10 text-black flex lg:hidden"
        @click="toggleModal"
      />

      <Icon
        v-show="showMenuModal"
        name="fa6-solid:xmark"
        class="size-6 md:size-9 absolute right-4 md:right-8 lg:right-10 text-black flex lg:hidden"
        @click="toggleModal"
      />
    </div>

    <AppNavbarModal
      v-show="showMenuModal"
      :hide-modal="hideModal"
      :visible="visible"
    />
  </div>
</template>
