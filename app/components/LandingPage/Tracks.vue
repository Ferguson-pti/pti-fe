<script setup lang="ts">
import { h } from 'vue'
import TrackCard from './TrackCard.vue'

const data = [
  {
    title: 'Financing Sustainable Hydrocarbon Projects: Balancing Investment, ESG Compliance, and Africa’s Development Imperatives',
    body: 'Africa’s hydrocarbon sector requires massive investments to unlock its potential, estimated at 125 billion barrels of oil and 620 trillion cubic feet of natural gas. However, global pressures to divest from fossil fuels, tightening Environmental, Social, and Governance (ESG) standards, and Africa’s urgent need for energy access and industrialization create a financing paradox. This sub-theme explores innovative funding mechanisms, policy frameworks, and partnerships to attract capital for hydrocarbon projects that align with sustainability goals and Africa’s socioeconomic priorities.',
  },
  {
    title: 'Redefining Hydrocarbon Energy: Leveraging Transformative Technologies to Safeguard the Environment',
    body: 'This theme explores how emerging technologies are transforming the hydrocarbon industry, enabling companies to mitigate environmental risks. It focuses on innovations such as cleaner hydrocarbon extraction methods, zero-emission technologies, and environmental monitoring systems that reduce the sector\'s carbon footprint and enhance sustainability in fossil energy production.',
  },
  {
    title: 'Ethical Leadership and Transparency in the Hydrocarbon Sector: A Governance Imperative',
    body: 'This theme explores the evolving role of corporate governance in the hydrocarbon sector, highlighting the need for companies to adapt their governance practices in response to innovation, emerging risks, and the increasing demand for accountability. It emphasizes the importance of ethical leadership and transparency, ensuring companies uphold high standards of decision-making, compliance, and stakeholder accountability. The discussions will focus on the integration of sustainable growth strategies, digitalization, and risk management practices that drive long-term value creation. Additionally, it will explore how governance frameworks can promote ethical corporate cultures, strengthen public trust, and support the industry\'s resilience amid global market changes, environmental challenges, and societal expectations.',
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
</script>

<template>
  <section class="w-full py-20 px-16 bg-custom-cream flex flex-col items-start justify-start font-lexend">
    <h1 class="text-7xl text-custom-green w-[60%] font-medium">
      Tracks
    </h1>

    <p class="text-custom-green w-[60%] mt-4 font-light text-lg">
      Get a first look at the tracks to be touched by industry experts during the course of this conference session. These topics are all
      high impact that play a key role affect Africa's Hydrocarbon Sector.
    </p>

        <div class="w-full">
            <AppSwiper
                style-class="mt-10 w-full"
                :items="renderedItems"
                :autoplay="false"
                :pagination="{ clickable: true }"
            />
        </div>
    </section>
</template>
