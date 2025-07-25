<script setup lang="ts">
import { h } from 'vue'
import { useWindowSize } from '@vueuse/core'
import AppSectionWrapper from '../App/AppSectionWrapper.vue'
import TrackCard from './LandingPageTrackCard.vue'

const { width } = useWindowSize()

const data = [
  {
    title: 'Ethical Leadership and Transparency in the Hydrocarbon Sector: A Governance Imperative',
    body: 'This sub-theme explores the evolving role of corporate governance in the hydrocarbon sector, highlighting the need for companies to adapt their governance practices in response to innovation, emerging risks, and the increasing demand for accountability. It emphasizes the importance of ethical leadership and transparency, ensuring companies uphold high standards of decision-making, compliance, and stakeholder accountability. The discussions will focus on the integration of sustainable growth strategies, digitalization, and risk management practices that drive long-term value creation. Additionally, it will explore how governance frameworks can promote ethical corporate cultures, strengthen public trust, and support the industry\'s resilience amid global market changes, environmental challenges, and societal expectations.',
  },
  {
    title: 'Financing Sustainable Hydrocarbon Projects: Balancing Investment, ESG Compliance, and Africa’s Development Imperatives',
    body: 'Africa’s hydrocarbon sector requires massive investments to unlock its potential, estimated at 125 billion barrels of oil and 620 trillion cubic feet of natural gas. However, global pressures to divest from fossil fuels, tightening Environmental, Social, and Governance (ESG) standards, and Africa’s urgent need for energy access and industrialization create a financing paradox. This sub-theme explores innovative funding mechanisms, policy frameworks, and partnerships to attract capital for hydrocarbon projects that align with sustainability goals and Africa’s socioeconomic priorities.',
  },
  {
    title: 'Redefining Hydrocarbon Energy: Leveraging Transformative Technologies to Safeguard the Environment',
    body: 'This sub-theme explores how emerging technologies are transforming the hydrocarbon industry, enabling companies to mitigate environmental risks. It focuses on innovations such as cleaner hydrocarbon extraction methods, zero-emission technologies, and environmental monitoring systems that reduce the sector\'s carbon footprint and enhance sustainability in fossil energy production.',
  },
]

const renderedItems = data.map((item, index) =>
  h(
    TrackCard,
    {
      key: `trackcard${index}`,
      number: index + 1,
      title: item.title,
      body: item.body,
    },
  ),
)

renderedItems.push(
  h(
    TrackCard,
    {
      key: `trackcard${renderedItems.length}`,
      number: renderedItems.length,
      title: '',
      body: '',
      class: 'invisible',
    },
  ),
)
</script>

<template>
  <AppSectionWrapper bg="bg-custom-cream">
    <div class="w-full py-16 md:py-20 flex flex-col items-start justify-start font-lexend">
      <h1 class="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl text-custom-red w-[60%] font-medium z-10">
        Tracks
      </h1>

      <p class="text-black w-[90%] md:w-[70%] mt-4 font-light text-base 2xl:text-xl z-10">
        Get a first look at the tracks to be touched by industry experts during the course of this conference session. These topics are all
        high impact that play a key role affect Africa's Hydrocarbon Sector.
      </p>

      <div class="flex w-full lg:w-[100vw]">
        <AppTracksSwiper
          style-class="mt-10 w-full"
          :items="renderedItems"
          :autoplay="false"
          ::space-between="width<=400 ? 10 : 0"
          :pagination="{ clickable: true }"
          color="#D0262F"
          :loop="false"
          :slides-per-view="width<=900 ? 1 : width<=1050 ? 1.3 : width<=1600 ? 1.5 : 1.8"
        />
      </div>
    </div>

    <NuxtImg
      src="circle.svg"
      provider="sirv"
      class="absolute rotate-60 w-[300px] md:w-[400px] 2xl:w-[600px] rotate-0 -right-20 lg:-right-28 -top-40 z-0"
    />

    <NuxtImg
      src="circle.svg"
      provider="sirv"
      class="absolute w-[300px] md:w-[400px] 2xl:w-[600px] rotate-0 -left-20 lg:-left-28 -bottom-40 z-0"
    />
  </AppSectionWrapper>
</template>
