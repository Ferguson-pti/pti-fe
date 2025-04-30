<script setup lang="ts">
import { LandingPageHero } from '#components'

useHead({
  title: 'ICHST',
})
</script>

<template>
  <div class="relative w-full h-auto box-border">
    <LandingPageHero />
    <LandingPageAbout />
    <LandingPageSpeakers />
    <LandingPagePricing />
    <LandingPageSnaps />
    <LandingPageTracks />
    <LandingPageSponsors />
    <LandingPageHelp />
  </div>
</template>
