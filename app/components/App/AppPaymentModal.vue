<script lang="ts" setup>
import { object, string } from 'zod'
import { useShowConfirmPaymentModal } from '~~/stores/useShowConfirmPaymentModal'
import { useShowPaymentModalStore } from '~~/stores/useShowPaymentModalStore'

const paymentModal = useShowPaymentModalStore()
const confirmPaymentModal = useShowConfirmPaymentModal()
const toast = useToast()

const categories = ref<{ id: string, value: string, placeholder: string, price: string, discount: string }[]>([])
const price = ref<string | null>(null)
const loading = ref(false)

const validationSchema = toTypedSchema(object({
  name: string({ message: 'Name field is required' }).nonempty('Name field is required').min(2, 'Enter a valid name')
    .regex(/^[A-Za-z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),

  email: string({ message: 'Email field is required' }).nonempty('Email field is required').email('Invalid email'),

  phone: string({ message: 'Phone field is required' }).nonempty('Phone field is required')
    .regex(/^(?:(?:\+?\d{1,4}[-.\s]?)?(?:\(?\d{3,4}\)?[-.\s]?)*\d{3,4}[-.\s]?\d{3,4})$/, 'Enter a valid phone number'),

  residence: string({ message: 'Residence field is required' }).nonempty('Residence field is required')
    .min(10, { message: 'Residence must be at least 10 characters long' })
    .regex(/^[a-zA-Z0-9\s,.']+$/, { message: 'Only letters, numbers, commas, periods, apostrophes, and hyphens are allowed' }),

  profession: string({ message: 'Profession field is required' }).nonempty('Profession field is required')
    .min(6, { message: 'Profession must be at least 6 characters long' })
    .max(50, { message: 'Profession must be at most 50 characters long' }).regex(/^[a-zA-Z\s]+$/, { message: 'Only letters, spaces, and hyphens allowed' }),

  category: string({ message: 'Category field is required' }).nonempty('Category field is required'),
}))

const { handleSubmit, errors/* , resetForm */ } = useForm({
  validationSchema,
})

const { value: name } = useField<string>('name')
const { value: email } = useField<string>('email')
const { value: phone } = useField<string>('phone')
const { value: residence } = useField<string>('residence')
const { value: profession } = useField<string>('profession')
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

  const response: PaystackResponseSuccess | PaystackResponseError = await $fetch('/pay', {
    method: 'POST',
    body: values,
  })

  if (isPaystackErrorResponse(response)) {
    toast.error({ title: 'Error!', message: response.error })
  }

  if (isPaystackSuccessResponse(response)) {
    window.open(response.data.authorization_url, '_blank')
    paymentModal.hideModal()
    paymentModal.setCard(null)
    confirmPaymentModal.showModal()
  }

  loading.value = false
})

watch(category, () => {
  const found = categories.value.find(item => item.id === category.value)

  if (found) {
    price.value = found.price
  }
  else {
    price.value = null
  }
}, { immediate: true })
</script>

<template>
  <div
    class="w-[100vw] h-[100vh] fixed top-0 left-0 z-50 flex flex-row items-center justify-center bg-[#00000090] font-lexend"
  >
    <form
      class="relative w-[400px] h-auto bg-white rounded-lg p-8 flex flex-col items-start justify-start"
      @submit.prevent="onSubmit"
      @click.stop
    >
      <p class="w-full flex flex-row items-center justify-between font-bold text-xl mb-6">
        Payment: User Details

        <Icon
          name="fa6-solid:xmark"
          class="size-4 text-black cursor-pointer"
          @click="paymentModal.hideModal()"
        />
      </p>

      <label class="text-xs">Name</label>
      <AppInput
        v-model="name"
        style-class="font-light text-sm"
        type="text"
      />
      <span class="mt-1 text-red-700 text-xs">{{ errors.name }}</span>

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

      <label class="text-xs mt-4">Residence</label>
      <AppInput
        v-model="residence"
        style-class="font-light text-sm"
        type="text"
      />
      <span class="mt-1 text-red-700 text-xs">{{ errors.residence }}</span>

      <label class="text-xs mt-4">Profession</label>
      <AppInput
        v-model="profession"
        style-class="font-light text-sm"
        type="text"
      />
      <span class="mt-1 text-red-700 text-xs">{{ errors.profession }}</span>

      <label class="text-xs mt-4">Price Category</label>
      <span class="w-full flex flex-row items-center justify-between">
        <AppSelect
          v-model="category"
          style-class="font-light text-sm"
          type="text"
          :options="categories"
          placeholder="Select a price category"
        />

        <div class="border border-black w-40 ml-4 text-right font-bold text-custom-red">{{ price ? price : '' }}</div>
      </span>
      <span class="mt-1 text-red-700 text-xs">{{ errors.category }}</span>

      <AppButton
        style-class="w-full mt-8 bg-white border border-custom-red text-custom-red hover:bg-custom-red hover:text-white flex flex-row items-center justify-center"
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
