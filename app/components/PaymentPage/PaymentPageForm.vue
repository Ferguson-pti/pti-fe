<script lang="ts" setup>
import { object, string } from 'zod'
import { isEarlyBird } from '~~/helpers/functions'
import { useShowPaymentModalStore } from '~~/stores/useShowPaymentModalStore'

const paymentModal = useShowPaymentModalStore()
const toast = useToast()
const route = useRoute()

const titles = [
  { value: 'Mr', placeholder: 'Mr' }, { value: 'Mrs', placeholder: 'Mrs' },
  { value: 'Dr', placeholder: 'Dr' }, { value: 'Engr', placeholder: 'Engr' }, { value: 'Prof', placeholder: 'Prof' },
]
const categories = ref<{ id: string, value: string, placeholder: string, price: string, discount: string }[]>([])
const price = ref<string | null>(null)
const loading = ref(false)

const validationSchema = toTypedSchema(object({
  title: string({ message: 'Required' }).nonempty('Required'),
  name: string({ message: 'Name field is required' }).nonempty('Name field is required').min(2, 'Enter a valid name')
    .regex(/^[A-Za-z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),

  email: string({ message: 'Email field is required' }).nonempty('Email field is required').email('Invalid email'),

  phone: string({ message: 'Phone field is required' }).nonempty('Phone field is required')
    .regex(/^(?:(?:\+?\d{1,4}[-.\s]?)?(?:\(?\d{3,4}\)?[-.\s]?)*\d{3,4}[-.\s]?\d{3,4})$/, 'Enter a valid phone number'),

  nationality: string({ message: 'Nationality field is required' }).nonempty('Nationality field is required')
    .min(2, { message: 'Nationality must be at least 2 characters long' })
    .regex(/^[a-zA-Z0-9\s,.']+$/, { message: 'Only letters, numbers, commas, periods, apostrophes, and hyphens are allowed' }),

  affiliation: string({ message: 'Affiliation field is required' }).nonempty('Affiliation field is required')
    .min(6, { message: 'Affiliation must be at least 6 characters long' })
    .max(50, { message: 'Affiliation must be at most 50 characters long' }).regex(/^[a-zA-Z\s]+$/, { message: 'Only letters, spaces, and hyphens allowed' }),

  category: string({ message: 'Category field is required' }).nonempty('Category field is required'),
}))

const { handleSubmit, errors/* , resetForm */ } = useForm({
  validationSchema,
})

const { value: title } = useField<string>('title')
const { value: name } = useField<string>('name')
const { value: email } = useField<string>('email')
const { value: phone } = useField<string>('phone')
const { value: nationality } = useField<string>('nationality')
const { value: affiliation } = useField<string>('affiliation')
const { value: category } = useField<string>('category')

onMounted(async () => {
  console.log('mounted')
  const priceListData = await $fetch('/pricelist')
  categories.value = priceListData.data

  // Check if there is already an active
  if (paymentModal.card) {
    console.log(paymentModal.card)
    console.log(priceListData.data)
    const validCard = priceListData.data.find(data => data.placeholder === paymentModal.card!.name)

    if (validCard) {
      category.value = validCard.id
    }
  }
})

const onSubmit = handleSubmit(async (values) => {
  loading.value = true
  paymentModal.setEmail(values.email)
  console.log(values)
  const response: PaystackResponseSuccess | PaystackResponseError = await $fetch('/pay', {
    method: 'POST',
    body: { ...values, callback_url: window.location.origin + route.fullPath },
  })

  if (isPaystackErrorResponse(response)) {
    toast.error({ title: 'Error!', message: response.error })
  }

  if (isPaystackSuccessResponse(response)) {
    window.location.href = response.data.authorization_url
    paymentModal.hideModal()
    paymentModal.setCard(null)
  }

  loading.value = false
})

watch(category, () => {
  const found = categories.value.find(item => item.id === category.value)

  if (found) {
    if (isEarlyBird) {
      price.value = found.discount
    }
    else {
      price.value = found.price
    }
  }
  else {
    price.value = null
  }
}, { immediate: true })
</script>

<template>
  <div
    class="w-full flex flex-row items-center justify-center font-lexend py-10"
  >
    <form
      class="relative w-full md:w-[400px] h-auto rounded-lg p-8 flex flex-col items-start justify-start"
      @submit.prevent="onSubmit"
      @click.stop
    >
      <p class="w-full flex flex-row items-center justify-between font-bold text-xl mb-6">
        User Payment Details
      </p>

      <div class="w-full flex flex-row items-start gap-2">
        <div class="w-[25%]">
          <label class="text-xs">Title</label>
          <AppSelect
            v-model="title"
            style-class="font-light text-sm"
            type="text"
            :options="titles"
            placeholder=""
          />
          <span class="mt-1 text-red-700 text-xs">{{ errors.title }}</span>
        </div>

        <div class="w-[75%]">
          <label class="text-xs">Name</label>
          <AppInput
            v-model="name"
            style-class="font-light text-sm"
            type="text"
          />
          <span class="mt-1 text-red-700 text-xs">{{ errors.name }}</span>
        </div>
      </div>

      <label class="text-xs mt-4">Email</label>
      <AppInput
        v-model="email"
        style-class="font-light text-sm"
        type="email"
      />
      <span class="mt-1 text-red-700 text-xs">{{ errors.email }}</span>

      <label class="text-xs mt-4">Phone</label>
      <AppInput
        v-model="phone"
        style-class="font-light text-sm"
        type="tel"
      />
      <span class="mt-1 text-red-700 text-xs">{{ errors.phone }}</span>

      <label class="text-xs mt-4">Nationality</label>
      <AppInput
        v-model="nationality"
        style-class="font-light text-sm"
        type="text"
      />
      <span class="mt-1 text-red-700 text-xs">{{ errors.nationality }}</span>

      <label class="text-xs mt-4">Affiliation (Job Title)</label>
      <AppInput
        v-model="affiliation"
        style-class="font-light text-sm"
        type="text"
      />
      <span class="mt-1 text-red-700 text-xs">{{ errors.affiliation }}</span>

      <label class="text-xs mt-4">Price Category</label>
      <span class="w-full flex flex-row items-center justify-between">
        <AppSelect
          v-model="category"
          style-class="font-light text-sm"
          type="text"
          :options="categories"
          placeholder="Select a price category"
        />

        <div class="w-40 ml-4 text-right font-bold text-custom-red">{{ price ? price : '' }}</div>
      </span>
      <span class="mt-1 text-red-700 text-xs">{{ errors.category }}</span>

      <AppButton
        style-class="w-full mt-8 border border-custom-red text-custom-red hover:bg-custom-red hover:text-white flex flex-row items-center justify-center"
        @click.stop
      >
        <span v-show="!loading">PROCEED TO PAYMENT</span>

        <Icon
          v-show="loading"
          name="svg-spinners:180-ring"
          class="size-4"
        />
      </AppButton>
    </form>
  </div>
</template>
