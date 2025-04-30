<template>
  <footer class="w-full h-auto flex flex-col items-center justify-start pt-8 pb-16 px-10 bg-custom-green">
    <div class="w-full flex flex-row items-start justify-between font-lexend">
      <div class="w-[49%] flex flex-row items-center justify-start">
        <AppLogo />

        <AppButton style-class="bg-custom-gold text-white hover:bg-white hover:text-custom-gold ml-6">
          REGISTER NOW: OCTOBER 22-23 IN ABUJA
        </AppButton>
      </div>

      <div class="w-[49%] flex flex-row items-center justify-end">
        <p class="font-medium text-white">
          #ICHST25
        </p>

        <span class="ml-10 flex flex-row items-center justiyf-end">
          <div class="w-10 h-10 flex items-center justify-center bg-black hover:bg-custom-red cursor-pointer duration-300 rounded-full mr-4">
            <Icon
              name="fa6-brands:x-twitter"
              class="size-5 text-white"
            />
          </div>
          <div class="w-10 h-10 flex items-center justify-center bg-black hover:bg-custom-red cursor-pointer duration-300 rounded-full mr-4">
            <Icon
              name="fa6-brands:facebook-f"
              class="size-5"
              color="white"
            />
          </div>
          <div class="w-10 h-10 flex items-center justify-center bg-black hover:bg-custom-red cursor-pointer duration-300 rounded-full mr-4">
            <Icon
              name="fa6-brands:instagram"
              class="size-5"
              color="white"
            />
          </div>
          <div class="w-10 h-10 flex items-center justify-center bg-black hover:bg-custom-red cursor-pointer duration-300 rounded-full mr-4">
            <Icon
              name="fa6-brands:linkedin-in"
              class="size-5"
              color="white"
            />
          </div>
        </span>
      </div>
    </div>

    <div class="mt-10 w-full flex flex-row items-start justify-between font-lexend">
      <div class="w-[48%] flex flex-col items-start justify-start">
        <p class="text-white font-medium text-xl">
          Stay ahead of what’s next. Get first access to ICHST news and updates.
        </p>
        <p class="mt-4 text-custom-grey text-xs">
          We’re committed to your privacy. PTI uses the information you provide to us to contact you about PTI content and events.
          You may unsubscribe from these communications at any time. For more information, check out our
          <a class="underline cursor-pointer">privacy policy</a>.
        </p>
      </div>
    </div>

    <div class="mt-10 flex flex-row w-full text-left font-lexend">
      <p class="text-sm text-custom-grey mr-5">
        &copy; 2025 ICHST PTI
      </p>

      <a class="text-sm text-white underline cursor-pointer mr-5">PTDF Towers, Central Business District, Abuja, Nigeria</a>

      <a class="text-sm text-white underline cursor-pointer mr-5">Privacy Policy</a>
    </div>
  </footer>
</template>
