<script setup lang="ts">

</script>

<template>
  <section class="w-full h-auto py-20 px-16 bg-custom-red flex flex-col items-start justify-start font-lexend">
    <div class="w-full h-auto flex flex-row items-center justify-between rounded-lg overflow-hidden border border-black p-10">
      <div class="w-[500px] h-[600px] rounded-lg bg-custom-grey" />

      <div class="w-[50%]">
        <p class="text-6xl font-medium mb-6 text-white font-medium">
          Contact us
        </p>

        <form class="bg-white flex flex-col items-start justify-start p-8 rounded-lg">
          <label class="text-sm mb-1.5">Name</label>
          <AppInput
            style-class=""
            type="name"
          />

          <label class="text-sm mb-1.5">Email</label>
          <AppInput
            style-class=""
            type="email"
          />

          <label class="text-sm mb-1.5">Message</label>
          <textarea class="resize-none w-full h-32 mb-5 px-2.5 py-1.5 border border-slate-400 rounded-md" />

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
