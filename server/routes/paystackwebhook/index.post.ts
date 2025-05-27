import generator from 'generate-password'

export default defineEventHandler(async (event) => {
  console.log(`Entry detected`)

  try {
    const config = useRuntimeConfig()
    const body = await readBody(event)

    if (body.event === 'charge.success') {
      const data = body.data
      const parsedPrice = data.currency + ' ' + data.amount.toString().slice(0, -2)

      const paymentPayload = {
        reference: data.reference,
        email: data.metadata.email,
        phone: data.metadata.phone,
        name: data.metadata.name,
        profession: data.metadata.profession,
        residence: data.metadata.residence,
        price_tier: data.metadata.priceTier,
        amount_paid: parsedPrice,
        paid_at: data.paid_at,
      }

      const response1 = await $fetch(`${config.strapiUrl}/api/payments`, {
        method: 'POST',
        body: {
          data: paymentPayload,
        },
      })

      console.log(response1)

      const password = generator.generate({
        length: 16,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true,
        excludeSimilarCharacters: true,
      })

      const accountPayload = {
        email: data.metadata.email,
        phone: data.metadata.phone,
        name: data.metadata.name,
        profession: data.metadata.profession,
        residence: data.metadata.residence,
        price_tier: data.metadata.priceTier,
        password: password,
      }

      const response2 = await $fetch(`${config.strapiUrl}/api/accounts`, {
        method: 'POST',
        body: {
          data: accountPayload,
        },
      })

      // Send email
      console.log(response2)

      await $fetch(
        '/email/account_created',
        {
          method: 'POST',
          body: {
            name: data.metadata.name,
            email: data.metadata.email,
            price: parsedPrice,
            tier: data.metadata.priceTier,
            password: password,
          },
        },
      )
    }
  }
  catch (e) {
    console.log(`An error occured\n${e}`)
  }

  setResponseStatus(event, 200)
  return { message: 'Received' }
})
