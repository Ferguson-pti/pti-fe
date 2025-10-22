<script setup lang="ts">
import { z } from 'zod'

definePageMeta({
  layout: 'user',
})

const { tokenModal, showTokenModal, hideTokenModal } = useApp()

showTokenModal()

const t = useToken()
const { getUser } = useAttendees()

const validationSchema = toTypedSchema(z.object({
  token: z.string({ message: 'Enter Token' })
    .min(1, { message: 'Enter Token' }),
}))

const { handleSubmit, errors, resetForm, isSubmitting, defineField, setErrors } = useForm({ validationSchema })

const [token, attrToken] = defineField('token')

const addToken = handleSubmit(async ({ token }) => {
  try {
    t.value = token
    await new Promise(resolve => setTimeout(resolve, 100))
    await getUser()
    hideTokenModal()
    resetForm()
  }
  catch (error) {
    console.log(error)
    setErrors({ token: 'Invalid Token' })
  }
})
</script>

<template>
  <div class="font-lexend w-full min-h-full max-h-auto flex flex-col items-center mb-8 lg:mb-4 pt-12 px-4 bg-white">
    <section class="w-250">
      <div class="w-full w-250">
        <div>
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-2xl">
              ICHST 2025 Admin
            </h3>
            <p class="capitalize text-base">
              <span class="text-th-darkBlue">CypherCrescent</span>
            </p>
          </div>
          <hr class="my-2 border-gray-3">
          <AdminUserSearch />
        </div>
      </div>
    </section>

    <Modal
      :is-open="tokenModal"
      class="flex items-center w-120 h-60"
    >
      <div
        v-if="tokenModal"
        class="w-full bg-white px-5 py-4"
      >
        <h2 class="text-xl font-bold">
          Authorization
        </h2>
        <form
          ref="authorizationRef"
          class="mt-3"
          @submit.prevent="addToken"
        >
          <div
            class="mb4 w-full"
          >
            <div class="relative w-full">
              <label
                for="token"
                class="text-sm"
              >Authorization Token</label>
              <AppInput
                id="token"
                v-model="token"
                v-bind="attrToken"
                type="text"
                :disabled="isSubmitting"
                form-input
                required
              />
            </div>
            <span
              v-if="errors.token"
              id="token-error"
              form-input-error
              v-text="errors.token"
            />
          </div>

          <button
            type="submit"
            class="flex justify-center items-center gap-2 w-full mt-6 uppercase py-4 px-18 font-semibold text-sm text-white bg-custom-red rounded-md cursor-pointer"
          >
            <span>{{ isSubmitting ? 'Verifying' : 'Authorize' }}</span>
            <Icon
              v-show="isSubmitting"
              name="svg-spinners:270-ring"
              class="size-4 text-white"
            />
          </button>
        </form>
      </div>
    </Modal>
  </div>
</template>
