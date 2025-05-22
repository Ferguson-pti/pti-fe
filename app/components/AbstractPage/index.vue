<template>
  <AppSectionWrapper bg="bg-custom-cream">
    <section class="w-full h-auto py-14 md:py-20 bg-custom-cream flex flex-col items-start justify-start font-lexend">
      <div class="w-full flex flex-col-reverse lg:flex-row items-start justify-between">
        <div class="mt-10 lg:mt-0 w-full lg:w-[50%] flex flex-col items-start justify-start font-light">
          <p class="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-10 text-custom-green z-10">
            Call for Abstract
          </p>

          <span class="text-sm md:text-base 2xl:text-xl z-10">We invite you to submit papers in the following categories</span>

          <p class="w-full text-sm md:text-base 2xl:text-xl z-10">
            We are excited to invite researchers, practitioners, and thought leaders to submit original papers for
            <span class="text-custom-red font-medium">ICHST 2025</span>, taking place on
            <span class="text-custom-red font-medium">22-23 OCTOBER 2025</span>. This is your opportunity to contribute to the conversation,
            share your insights, and shape the future of <span class="text-custom-red font-medium">Africa's Hydrocarbon Sector</span>.
            <br>
            We invite you to submit your abstract first in any of the categories indicated in the abstract submission guide.
            <br>
            Kindly take note of the deadlines for each submission.
          </p>

          <a
            href="/uploads/ichst_2025_call_for_abstract.pdf"
            download
          >
            <AppButton style-class="mt-8 text-white border border-custom-red bg-custom-red hover:bg-white hover:text-custom-red">
              DOWNLOAD ABSTRACT INSTRUCTIONS
            </AppButton>
          </a>

          <span class="text-custom-red underline mt-8 font-normal text-base md:text-lg 2xl:text-xl z-10">DEADLINES</span>
          <span class="mt-2 text-sm md:text-base 2xl:text-xl z-10">Deadline for Abstract submission - June 26th, 2025</span>
          <span class="mt-2 text-sm md:text-base 2xl:text-xl z-10">Deadline for Full paper submission -July 15th, 2025</span>
          <span class="mt-2 text-sm md:text-base 2xl:text-xl z-10">Notice of acceptance - August 30th, 2025</span>

          <span class="mt-8 text-custom-red font-normal text-sm md:text-base 2xl:text-xl z-10">ALL MANUSCRIPTS WILL UNDERGO A DOUBLE - BLIND REVIEW PROCESS.</span>
        </div>

        <div class="w-full lg:w-[40%] z-10">
          <AbstractPageForm />
        </div>
      </div>
    </section>

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
