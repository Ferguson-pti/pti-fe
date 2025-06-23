<template>
  <footer class="w-full h-auto flex flex-col items-center justify-start pt-8 md:pt-12 pb-4 md:pb-16 px-4 md:px-8 lg:px-10 xl:px-20 2xl:px-48 bg-custom-green">
    <div class="w-full flex flex-col lg:flex-row items-start justify-between font-lexend">
      <div class="w-full lg:w-[49%] flex flex-row items-center justify-start">
        <NuxtImg
          src="/logo-white.png"
          provider="sirv"
          alt="logo"
          class="h-16 md:h-20"
        />
      </div>

      <div class="mt-8 lg:mt-0 w-full lg:w-[49%] flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-end">
        <p class="font-medium text-white">
          #ICHST25
        </p>

        <span class="mt-8 lg:mt-0 ml-0 lg:ml-10 flex flex-row items-center justify-end">
          <NuxtLink
            href="https://x.com/ICHST_PTI"
            target="_blank"
            class="w-10 h-10 flex items-center justify-center bg-black hover:bg-custom-red cursor-pointer duration-300 rounded-full mr-4"
          >
            <Icon
              name="fa6-brands:x-twitter"
              class="size-5 text-white"
            />
          </NuxtLink>
          <NuxtLink
            href="https://www.facebook.com/ICHST.PTI"
            target="_blank"
            class="w-10 h-10 flex items-center justify-center bg-black hover:bg-custom-red cursor-pointer duration-300 rounded-full mr-4"
          >
            <Icon
              name="fa6-brands:facebook-f"
              class="size-5"
              color="white"
            />
          </NuxtLink>
          <NuxtLink
            href="https://www.instagram.com/ichst_pti"
            target="_blank"
            class="w-10 h-10 flex items-center justify-center bg-black hover:bg-custom-red cursor-pointer duration-300 rounded-full mr-4"
          >
            <Icon
              name="fa6-brands:instagram"
              class="size-5"
              color="white"
            />
          </NuxtLink>
          <NuxtLink
            href="https://www.linkedin.com/company/international-conference-on-hydrocarbon-science-and-technology-ichst/"
            target="_blank"
            class="w-10 h-10 flex items-center justify-center bg-black hover:bg-custom-red cursor-pointer duration-300 rounded-full mr-4"
          >
            <Icon
              name="fa6-brands:linkedin-in"
              class="size-5"
              color="white"
            />
          </NuxtLink>
          <NuxtLink
            href="https://youtube.com/@ichstpti6732?si=02Us6PGSIKnJF3-K"
            target="_blank"
            class="w-10 h-10 flex items-center justify-center bg-black hover:bg-custom-red cursor-pointer duration-300 rounded-full mr-4"
          >
            <Icon
              name="fa6-brands:youtube"
              class="size-5"
              color="white"
            />
          </NuxtLink>
        </span>
      </div>
    </div>

    <div class="mt-10 w-full flex flex-row items-start justify-between font-lexend">
      <div class="w-full lg:w-[48%] flex flex-col items-start justify-start">
        <p class="text-white font-medium text-xl">
          Stay ahead of what’s next. Get first access to ICHST news and updates.
        </p>
        <p class="mt-4 text-custom-grey text-md md:text-sm">
          We’re committed to your privacy. PTI uses the information you provide to us to contact you about PTI content and events.
          You may unsubscribe from these communications at any time. For more information, check out our privacy policy below.
        </p>
      </div>
    </div>

    <div class="mt-10 flex flex-col-reverse lg:flex-row w-full text-left font-lexend">
      <p class="text-base md:text-sm mb-7 lg:mb-0 text-custom-grey mr-5">
        &copy; 2025 ICHST PTI
      </p>

      <a class="text-base md:text-sm mb-7 lg:mb-0 text-white underline cursor-pointer mr-5">PTDF Towers, Central Business District, Abuja, Nigeria</a>

      <a class="text-base md:text-sm mb-7 lg:mb-0 text-white underline cursor-pointer mr-5">Privacy Policy</a>
    </div>
  </footer>
</template>
