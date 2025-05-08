<script setup lang="ts">
import { AboutPageHero } from '#components'
import AboutPageCallup from '~/components/AboutPage/AboutPageCallup.vue'
</script>

<template>
  <div class="relative w-full h-auto box-border">
    <LandingPageAbout />
    <AboutPageHero />
    <LandingPageSponsors />
    <AboutPageCallup />
  </div>
</template>
