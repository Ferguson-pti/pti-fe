<script setup lang="ts">
const items = [
  {
    question: 'What is ICHST 2025?',
    answer: 'The 4th Biennial International Conference on Hydrocarbon Science and Technology (ICHST) 2025 is a conference focused on promoting technological advancement, enhancing research, and providing a platform for knowledge sharing within the oil and gas industry. It brings together experts, researchers, academics, and industry leaders to discuss key issues and technological breakthroughs.',
    dockedSize: 'h-[310px] md:h-[250px] lg:h-[190px]',
    list: [],
  },
  {
    question: 'When and where will ICHST 2025 be held?',
    answer: 'ICHST 2025 will take place from Wednesday, October 22nd to Thursday, October 23rd, 2025, at the PTDF Towers, Central Business District, Abuja, Nigeria.',
    dockedSize: 'h-[190px] md:h-[160px] lg:h-[140px]',
    list: [],
  },
  {
    question: 'What is the theme of ICHST 2025?',
    answer: 'The theme of the conference is “Transforming Africa’s Hydrocarbon Sector: Balancing Growth, Environment and Governance”',
    dockedSize: 'h-[170px] md:h-[135px] lg:h-[140px]',
    list: [],
  },
  {
    question: 'Who is organizing ICHST 2025?',
    answer: 'The Petroleum Training Institute (PTI) is organizing ICHST 2025 in partnership with several key Nigerian agencies and companies, including PTDF, NUPRC, NMDPRA, NCDMB, Cyphercrescent, NNPC Academy, and NNPC-RTI.',
    dockedSize: 'h-[215px] md:h-[190px] lg:h-[165px]',
    list: [],
  },
  {
    question: 'What are the benefits of attending ICHST 2025?',
    answer: 'Attending ICHST 2025 offers several benefits, including:',
    list: [
      'Networking Opportunities: Connect with subject matter experts, leading researchers, academicians, and top players in the oil and gas industry.',
      'Knowledge Sharing: Gain insights into the latest technological advancements and research findings in the hydrocarbon sector.',
      'Industry Insights: Examine topical issues crucial for the present and future development of the oil and gas industry in Africa.',
      'Professional Development: Enhance your understanding of the industry\'s challenges and opportunities, particularly in balancing growth, environment, and governance.',
      'Potential Collaborations: Explore opportunities for partnerships and collaborations with other professionals and organizations.',
    ],
    dockedSize: 'h-[550px] md:h-[420px] lg:h-[390px]',
  },
  {
    question: 'Who should attend ICHST 2025?',
    answer: 'ICHST 2025 is relevant for a wide range of individuals, including:',
    list: [
      'Researchers and scientists in hydrocarbon science and technology.',
      'Academics and educators in related fields.',
      'Engineers and technical professionals in the oil and gas industry.',
      'Policy makers and government representatives.',
      'Business development professionals in the energy sector.',
      'Students interested in the hydrocarbon industry.',
    ],
    dockedSize: 'h-[410px] md:h-[280px] lg:h-[280px]',
  },
  {
    question: 'Will there be opportunities to present research at ICHST 2025?',
    answer: 'Yes, ICHST typically includes opportunities for presentations through technical sessions. Details regarding abstract submissions and deadlines will likely be available on the official conference website or through announcements from the organizers.',
    dockedSize: 'h-[240px] md:h-[190px] lg:h-[165px]',
    list: [],
  },
  {
    question: 'How can I register for ICHST 2025?',
    answer: 'Information regarding registration procedures and fees will be available on the official conference website of ICHST 2025. You will likely find a registration portal or contact information for registration inquiries there.',
    dockedSize: 'h-[215px] md:h-[165px] lg:h-[165px]',
    list: [],
  },
  {
    question: 'What topics will be covered at ICHST 2025?',
    answer: 'The conference will cover topics relevant to the theme "Transforming Africa’s Hydrocarbon Sector: Balancing Growth, Environment and Governance." This wiill include technological advancements in exploration and production, environmental sustainability in the oil and gas sector, governance and policy frameworks, and strategies for growth and development in the African context.',
    dockedSize: 'h-[310px] md:h-[250px] lg:h-[190px]',
    list: [],
  },
  {
    question: 'Where can I find more information about ICHST 2025?',
    answer: 'For more detailed information, including registration, abstract submissions, the program schedule, and contact details, please refer to the official website (www.ichst.com) for the 4th Biennial International Conference on Hydrocarbon Science and Technology (ICHST) 2025.',
    dockedSize: 'h-[265px] md:h-[190px] lg:h-[165px]',
    list: [],
  },
]
</script>

<template>
  <AppSectionWrapper>
    <div class="w-full h-auto py-14 lg:py-20 bg-custom-cream flex flex-col items-center justify-start font-lexend">
      <p class="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-2 md:mb-6 text-custom-green font-medium z-10">
        FAQs
      </p>

      <div class="mt-0 w-full md:w-[585px] lg:w-[800px] flex flex-col items-start justify-start">
        <HelpPageFaqRow
          v-for="({ question, answer, list, dockedSize }, index) in items"
          :key="`list${index}`"
          :question="question"
          :answer="answer"
          :list="list"
          :docked-size="dockedSize"
          :last="index===items.length-1"
        />
      </div>
    </div>

    <NuxtImg
      src="circleyellow.svg"
      provider="sirv"
      class="absolute w-[300px] md:w-[400px] 2xl:w-[600px] rotate-0 -left-20 lg:-left-28 -top-40 z-0"
    />

    <NuxtImg
      src="circleyellow.svg"
      provider="sirv"
      class="absolute w-[300px] md:w-[400px] 2xl:w-[600px] rotate-0 -right-20 lg:-right-28 -bottom-40 z-0"
    />
  </AppSectionWrapper>
</template>
