<template>
  <form class="bg-white w-full md:w-[500px] h-[750px] font-lexend px-4 md:px-6 py-6 text-black flex flex-col">
    <span class="font-medium text-lg mb-10">Submit papers for ICHST 2025</span>

    <label class="font-light mb-1.5 text-sm">Name</label>
    <AppInput
      style-class="font-light"
      type="text"
    />

    <label class="font-light mb-1.5 text-sm">Email</label>
    <AppInput
      style-class="font-light"
      type="email"
    />

    <label class="font-light mb-1.5 text-sm">Phone</label>
    <AppInput
      style-class="font-light"
      type="tel"
    />

    <label class="font-light mb-1.5 text-sm">Category</label>
    <AppInput
      style-class="font-light"
      type="name"
    />

    <label class="font-light mb-1.5 text-sm">Organisation</label>
    <AppInput
      style-class="font-light"
      type="text"
    />

    <label class="font-light mb-1.5 text-sm">Upload</label>
    <AppInput
      style-class="font-light cursor-pointer"
      type="file"
    />

    <AppButton style-class="mt-12 text-white border border-custom-red bg-custom-red hover:bg-white hover:text-custom-red">
      SUBMIT
    </AppButton>
  </form>
</template>
