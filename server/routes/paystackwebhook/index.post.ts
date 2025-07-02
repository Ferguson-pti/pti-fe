import { nanoid } from 'nanoid'

export default defineEventHandler(async (event) => {
  console.log(`Entry detected`)

  try {
    const config = useRuntimeConfig()
    const body = await readBody(event)

    if (body.event === 'charge.success') {
      const data = body.data
      const parsedPrice = data.currency + ' ' + data.amount.toString().slice(0, -2)

      const nano_password = nanoid(8)

      const payload = {
        transactionRef: data.reference,
        email: data.metadata.email,
        password: nano_password,
        passcode: nano_password,
        phone: data.metadata.phone,
        username: data.metadata.name,
        affiliation: data.metadata.affiliation,
        nationality: data.metadata.nationality,
        category: data.metadata.priceTier,
        amountPaid: parsedPrice,
        paidAt: data.paid_at,
      }
      console.log(config.strapiUrl)
      const response = await $fetch(`${config.strapiUrl}/api/auth/local/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      // Send email
      console.log(response)
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch (e: any) {
    console.log(`An error occured\n${e}`)
    console.log(e!.data!.error)
    // console.log(e!.data!.error!.details!.errors)
  }

  setResponseStatus(event, 200)
  return { message: 'Received' }
})
