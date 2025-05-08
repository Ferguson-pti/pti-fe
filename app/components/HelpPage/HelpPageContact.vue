<script setup lang="ts">

</script>

<template>
  <section class="w-full h-auto py-20 px-4 md:px-10 lg:px-16 bg-custom-red flex flex-col items-start justify-start font-lexend">
    <div class="w-full h-auto flex flex-col-reverse lg:flex-row items-center justify-between rounded-lg overflow-hidden p-0 md:p-10">
      <NuxtImg
        src="pexels-davidmcelwee-11142768.webp"
        provider="sirv"
        class-name="mt-8 lg:mt-0 w-auto md:w-auto h-[700px] rounded-lg bg-custom-grey"
      />

      <div class="w-full md:w-[500px] lg:w-[50%]">
        <p class="text-3xl md:text-6xl font-medium mb-6 text-white font-medium">
          Contact us
        </p>

        <form class="bg-white flex flex-col items-start justify-start p-8 rounded-lg">
          <label class="text-sm mb-1.5">Name</label>
          <AppInput
            style-class=""
            type="text"
          />

          <label class="text-sm mb-1.5">Email</label>
          <AppInput
            style-class=""
            type="email"
          />

          <label class="text-sm mb-1.5">Message</label>
          <textarea class="resize-none w-full h-32 mb-5 px-2.5 py-2 border border-slate-400 rounded-md" />

          <AppButton style-class="mt-6 text-custom-red border border-custom-red bg-white hover:bg-custom-red hover:text-white">
            SEND MESSAGE
          </AppButton>
        </form>

        <div class="mt-8 flex flex-row item-center justify-start">
          <span class="flex flex-row items-center justify-start mr-12">
            <Icon
              name="fa6-solid:phone"
              class="size-5 text-white"
            />

            <p class="ml-3 text-white">ichst@pti.edu.ng</p>
          </span>

          <span class="flex flex-row items-center justify-start mr-12">
            <Icon
              name="fa6-solid:envelope"
              class="size-5 text-white"
            />

            <p class="ml-3 text-white">08033579352</p>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
