<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const { loginModal, hideLoginModal } = useApp()
const { login } = useAuth()

const validationSchema = toTypedSchema(z.object({
  email: z.string({ message: 'Enter your email address' })
    .min(1, { message: 'Enter your email address' })
    .email({ message: 'Enter a valid email address' }),
  password: z.string({ message: 'Enter your password' })
    .min(1, { message: 'Enter your password' })
    .min(8, { message: 'Enter a minimum of 8 characters' }),
}))

const { handleSubmit, errors, defineField, resetForm, isSubmitting, setErrors } = useForm({
  validationSchema,
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const submit = handleSubmit(async ({ email, password }) => {
  try {
    await login(email, password)
    resetForm()
    hideLoginModal()
  }
  catch (error) {
    console.log(error)
    setErrors({ email: 'Invalid credentials', password: 'Invalid credentials' })
  }
})
</script>

<template>
  <div
    :class="`fixed top-0 left-0 w-full h-full z-50 bg-black/30 ${loginModal?'flex':'hidden'} items-center justify-center font-lexend`"
    @click="hideLoginModal"
  >
    <div
      class="bg-white w-full md:w-[500px] py-10 px-6 md:px-16 rounded-lg flex flex-col items-center"
      @click.stop
    >
      <p class="text-2xl font-bold mb-6">
        Login
      </p>

      <form
        class="w-full flex flex-col gap-5"
        @submit.prevent="submit"
      >
        <div class="flex flex-col">
          <label class="text-sm md:text-base font-medium">Email</label>
          <AppInput
            v-model="email"
            v-bind="emailAttrs"
            style-class="text-sm md:text-base"
            type="email"
          />
          <p class="text-red-700 text-sm">
            {{ errors.email }}
          </p>
        </div>

        <div class="flex flex-col">
          <label class="text-sm md:text-base font-medium">Password</label>
          <AppInput
            v-model="password"
            v-bind="passwordAttrs"
            style-class="text-sm md:text-base"
            type="password"
          />
          <p class="text-red-700 text-sm">
            {{ errors.password }}
          </p>
        </div>

        <AppButton style-class="w-full mt-6 text-white bg-custom-red hover:bg-custom-red/80 hover:text-white flex items-center justify-center">
          <span v-show="!isSubmitting">LOGIN</span>

          <Icon
            v-show="isSubmitting"
            name="svg-spinners:180-ring"
            class="size-4"
          />
        </AppButton>

        <div class="flex flex-col justify-center items-center">
          <span class="mt-2 text-sm text-center">Having trouble signing in? Contact support</span>
          <span class="text-custom-red text-center text-sm">support@ichst.com</span>
        </div>
      </form>
    </div>
  </div>
</template>
