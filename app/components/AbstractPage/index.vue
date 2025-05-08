<script>

</script>

<template>
  <section class="w-full h-auto py-20 px-4 md:px-10 lg:px-16 bg-custom-cream flex flex-col items-start justify-start font-lexend">
    <p class="text-3xl md:text-5xl lg:text-6xl font-medium mb-10 text-custom-green font-medium">
      Call for Abstract
    </p>

    <div class="w-full flex flex-col-reverse lg:flex-row items-start justify-between">
      <div class="mt-10 lg:mt-0 w-full lg:w-[60%] flex flex-col items-start justify-start font-light">
        <span class="text-sm md:text-base">We invite you to submit papers in the following categories</span>

        <ol class="mt-4">
          <li class="mb-2 text-sm md:text-base">
            . Exploration, Production, and Operations (Upstream, Midstream, Downstream)
          </li>
          <li class="mb-2 text-sm md:text-base">
            . Offshore Drilling and Subsea Engineering
          </li>
          <li class="mb-2 text-sm md:text-base">
            . Unconventional Resources and Energy Security
          </li>
          <li class="mb-2 text-sm md:text-base">
            . Transportation, Logistics, and Gas Flare Commercialization
          </li>
          <li class="mb-2 text-sm md:text-base">
            . Innovations in R&D, Digital Tech, and AI/Robotics
          </li>
          <li class="mb-2 text-sm md:text-base">
            . Asset Protection, SCADA, IoT, and Remote Monitoring
          </li>
          <li class="mb-2 text-sm md:text-base">
            . Energy Trading, Risk Management, and Financing
          </li>
          <li class="mb-2 text-sm md:text-base">
            . Sustainability, Environmental Management, and CCUS
          </li>
          <li class="mb-2 text-sm md:text-base">
            . Geology, Geophysics, and Resource Management
          </li>
          <li class="mb-2 text-sm md:text-base">
            . Health, Safety, and Environmental (HSE) Management
          </li>
          <li class="mb-2 text-sm md:text-base">
            . Human Capital and Workforce Development
          </li>
          <li class="mb-2 text-sm md:text-base">
            . Regulatory, Legal, and Policy Frameworks
          </li>
          <li class="mb-2 text-sm md:text-base">
            . Market Trends and Strategic Outlook
          </li>
          <li class="mb-2 text-sm md:text-base">
            . Renewable Energy Integration and Technologies
          </li>
          <li class="mb-2 text-sm md:text-base">
            . Collaboration and Industry Partnerships
          </li>
        </ol>

        <AppButton style-class="mt-8 text-white border border-custom-red bg-custom-red hover:bg-white hover:text-custom-red">
          DOWNLOAD ABSTRACT INSTRUCTIONS
        </AppButton>

        <span class="text-custom-red underline mt-8 font-normal text-base md:text-lg">DEADLINES</span>
        <span class="mt-2 text-sm md:text-base">Deadline for Abstract submission - June 26th, 2025</span>
        <span class="mt-2 text-sm md:text-base">Deadline for Full paper submission -July 15th, 2025</span>
        <span class="mt-2 text-sm md:text-base">Notice of acceptance - August 30th, 2025</span>

        <span class="mt-8 text-custom-red font-normal text-sm md:text-base">ALL MANUSCRIPTS WILL UNDERGO A DOUBLE - BLIND REVIEW PROCESS.</span>
      </div>

      <div class="w-full lg:w-[40%]">
        <AbstractPageForm />
      </div>
    </div>
  </section>
</template>
