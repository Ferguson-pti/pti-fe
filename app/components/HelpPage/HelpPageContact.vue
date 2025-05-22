<script setup lang="ts">
import { object, string } from 'zod'

const loading = ref(false)
const toast = useToast()

const validationSchema = toTypedSchema(object({
  name: string().nonempty('Name field is required').min(2, 'Enter a valid name'),
  email: string().nonempty('Email field is required').email('Enter a valid email'),
  message: string().nonempty('Message field is required').min(20, 'Minimum of 30 characters').max(500, 'Maximum of 800 characters'),
}))

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema,
})

const { value: name } = useField<string>('name')
const { value: email } = useField<string>('email')
const { value: message } = useField<string>('message')

const onSubmit = handleSubmit(async (values) => {
  try {
    loading.value = true

    const { data: result }: MessagePostResponse = await $fetch('http://localhost:1337/api/messages', {
      method: 'POST',
      body: {
        data: {
          name: values.name,
          email: values.email,
          message: values.message,
        },
      },
    })

    await $fetch(`/email/message/${result.documentId}`)

    toast.success({ title: 'Success!', message: 'Message sent successfully.' })

    resetForm()
  }
  catch (e) {
    console.log(`An error occured: \n${e}`)
    toast.error({ title: 'Error!', message: 'An error occured during form submission. Try again later.' })
  }
  finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="w-full h-auto py-20 px-4 md:px-10 xl:px-16 bg-custom-red flex flex-col items-start justify-start font-lexend">
    <div class="w-full h-auto flex flex-col-reverse lg:flex-row items-center justify-between rounded-lg overflow-hidden p-0 md:p-10 lg:p-0 xl:p-10 gap-10">
      <NuxtImg
        src="pexels-davidmcelwee-11142768.webp"
        provider="sirv"
        class="mt-8 lg:mt-0 w-auto md:w-auto h-[700px] rounded-lg bg-custom-grey"
      />

      <div class="w-full md:w-[500px] lg:w-[50%]">
        <p class="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-6 text-white font-medium">
          Contact us
        </p>

        <form
          class="bg-white flex flex-col items-start justify-start p-8  rounded-lg"
          @submit.prevent="onSubmit"
        >
          <label class="text-sm mb-1.5">Name</label>
          <AppInput
            v-model="name"
            style-class=""
            type="text"
          />
          <span class="mt-1 text-red-700 text-xs">{{ errors.name }}</span>

          <label class="text-sm mb-1.5 mt-5">Email</label>
          <AppInput
            v-model="email"
            style-class=""
            type="email"
          />
          <span class="mt-1 text-red-700 text-xs">{{ errors.email }}</span>

          <label class="text-sm mb-1.5 mt-5">Message</label>
          <textarea
            v-model="message"
            class="resize-none w-full h-32 px-2.5 py-2 border border-slate-400 rounded-md"
          />
          <span class="mt-1 text-red-700 text-xs mb-5">{{ errors.message }}</span>

          <AppButton style-class="w-44 mt-6 text-custom-red border border-custom-red bg-white hover:bg-custom-red hover:text-white flex items-center justify-center">
            <span v-show="!loading">SEND MESSAGE</span>

            <Icon
              v-show="loading"
              name="svg-spinners:180-ring"
              class="size-4"
            />
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
