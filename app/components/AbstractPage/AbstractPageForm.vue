<script setup lang="ts">
import { object, string, any } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

const loading = ref(false)
const toast = useToast()

const CATEGORIES = [
  { placeholder: 'Academia', value: 'Academia' },
  { placeholder: 'Industry/Others', value: 'Industry/Others' },
  { placeholder: 'Student', value: 'Student' },
  { placeholder: 'International', value: 'International' },
]

const validationSchema = toTypedSchema(object({
  name: string().nonempty('Name field is required').min(2, 'Enter a valid name').regex(/^[A-Za-z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: string().nonempty('Email field is required').email('Invalid email'),
  phone: string().nonempty('Phone field is required').regex(/^(?:(?:\+?\d{1,4}[-.\s]?)?(?:\(?\d{3,4}\)?[-.\s]?)*\d{3,4}[-.\s]?\d{3,4})$/, 'Enter a valid phone number'),
  category: string().nonempty('Category field is required'),
  organisation: string().nonempty('Organisation field is required').min(5, 'Enter a valid organisation'),
  upload: any()
    .refine((file: FileList | null) => {
      return file && file.length > 0
    }, {
      message: 'File is required',
    })
    .refine((file: FileList | null) => {
      return file && file[0]!.size <= 2 * 1024 * 1024 // under 2MB
    }, {
      message: 'File must be under 2MB',
    }),
}))

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema,
})

const { value: name } = useField<string>('name')
const { value: email } = useField<string>('email')
const { value: phone } = useField<string>('phone')
const { value: category } = useField<string>('category')
const { value: organisation } = useField<string>('organisation')
const { value: upload } = useField<FileList>('upload')

const onSubmit = handleSubmit(async (values) => {
  const config = useRuntimeConfig()

  try {
    loading.value = true
    const fileForm = new FormData()
    fileForm.append('files', values.upload[0])

    const fileResponse: DocumentUploadResponse[] = await $fetch(`${config.public.strapiurl}/api/upload`, {
      method: 'POST',
      body: fileForm,
    })

    const documentId = fileResponse[0]!.id

    const { data: result }: AbstractPostResponse = await $fetch(`${config.public.strapiurl}/api/abstracts`, {
      method: 'POST',
      body: {
        data: {
          name: values.name,
          email: values.email,
          phone: values.phone,
          category: values.category,
          organisation: values.organisation,
          upload: documentId,
        },
      },
    })

    await $fetch(`/email/abstract/${result.documentId}`)

    toast.success({ title: 'Success!', message: 'Abstract submitted successfully.' })

    resetForm()
    values.upload = null
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
  <form
    class="bg-white w-full md:w-[500px] h-auto font-lexend px-4 md:px-6 py-6 text-black flex flex-col rounded-lg"
    @submit.prevent="onSubmit"
  >
    <span class="font-medium text-lg mb-5">Submit papers for ICHST 2025</span>

    <label class="font-light mb-1.5 text-sm">Name</label>
    <AppInput
      v-model="name"
      style-class="font-light"
      type="text"
    />
    <span class="mt-1 text-red-700 text-xs">{{ errors.name }}</span>

    <label class="font-light mb-1.5 text-sm mt-5">Email</label>
    <AppInput
      v-model="email"
      style-class="font-light mb-0"
      type="text"
    />
    <span class="mt-1 text-red-700 text-xs">{{ errors.email }}</span>

    <label class="font-light mb-1.5 text-sm mt-5">Phone</label>
    <AppInput
      v-model="phone"
      style-class="font-light"
      type="tel"
    />
    <span class="mt-1 text-red-700 text-xs">{{ errors.phone }}</span>

    <label class="font-light mb-1.5 text-sm mt-5">Category</label>
    <AppSelect
      v-model="category"
      style-class="font-light"
      type="text"
      :options="CATEGORIES"
      placeholder="Select a category"
    />
    <span class="mt-1 text-red-700 text-xs">{{ errors.category }}</span>

    <label class="font-light mb-1.5 text-sm mt-5">Organisation</label>
    <AppInput
      v-model="organisation"
      style-class="font-light"
      type="name"
    />
    <span class="mt-1 text-red-700 text-xs">{{ errors.organisation }}</span>

    <label class="font-light mb-1.5 text-sm mt-5">Upload</label>
    <AppFileInput
      v-model="upload"
      style-class="font-light cursor-pointer"
      accept=".pdf,.docx"
    />
    <span class="mt-1 text-red-700 text-xs">{{ errors.upload }}</span>

    <AppButton style-class="mt-12 text-white border border-custom-red bg-custom-red hover:bg-white hover:text-custom-red flex items-center justify-center">
      <span v-show="!loading">SUBMIT</span>

      <Icon
        v-show="loading"
        name="svg-spinners:180-ring"
        class="size-4"
      />
    </AppButton>
  </form>
</template>
