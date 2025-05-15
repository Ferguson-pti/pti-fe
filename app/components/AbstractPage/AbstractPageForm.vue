<script setup lang="ts">
import { object, string, any } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

const toast = useToast()

const CATEGORIES = [
  { placeholder: 'PTI Staff/Lecturers', value: 'PTI Staff/Lecturers' },
  { placeholder: 'Industry/Others', value: 'Industry/Others' },
  { placeholder: 'Student', value: 'Student' },
]

const validationSchema = toTypedSchema(object({
  name: string().nonempty('Name field is required').min(2, 'Enter a valid name').regex(/^[A-Za-z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: string().nonempty('Email field is required').email('Invalid email'),
  phone: string().nonempty('Phone field is required').regex(/^(?:(?:\+?\d{1,4}[-.\s]?)?(?:\(?\d{3,4}\)?[-.\s]?)*\d{3,4}[-.\s]?\d{3,4})$/, 'Enter a valid phone number i.e. 08031234567, 0803-123-4567, +2348031234567, +234 803 123 4567, +1-800-555-1212, (234) 803 123 4567, +44 20 7946 0958'),
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
  try {
    const fileForm = new FormData()
    fileForm.append('files', values.upload[0])

    const fileResponse: DocumentUploadResponse[] = await $fetch('http://localhost:1337/api/upload', {
      method: 'POST',
      body: fileForm,
    })

    const documentId = fileResponse[0]!.id

    console.log(values.upload[0])
    const response = await $fetch('http://localhost:1337/api/abstracts', {
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

    console.log(response)

    toast.success({ title: 'Success!', message: 'Abstract submitted successfully.' })

    resetForm()
    values.upload = null
  }
  catch (e) {
    console.log(`An error occured: \n${e}`)
    toast.error({ title: 'Error!', message: 'An error occured during form submission. Try again later.' })
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

    <AppButton style-class="mt-12 text-white border border-custom-red bg-custom-red hover:bg-white hover:text-custom-red">
      SUBMIT
    </AppButton>
  </form>
</template>
