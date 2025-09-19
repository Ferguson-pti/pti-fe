import { nanoid } from 'nanoid'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  // console.log(body)
  console.log(config.strapiUrl)
  if (body.event !== 'charge.success') {
    throw createError({
      statusCode: 404,
      statusMessage: 'Charge not successful',
    })
  }

  const data = body.data
  const parsedPrice = data.currency + ' ' + data.amount.toString().slice(0, -2)

  const nano_password = nanoid(8)

  const payload = {
    transactionRef: data.reference,
    title: data.metadata.title,
    email: data.metadata.email,
    password: nano_password,
    passcode: nano_password,
    phone: data.metadata.phone,
    username: data.metadata.name,
    affiliation: data.metadata.affiliation,
    jobTitle: data.metadata.jobTitle,
    nationality: data.metadata.nationality,
    category: data.metadata.priceTier,
    amountPaid: parsedPrice,
    paidAt: data.paid_at,
  }
  console.log(payload)

  try {
    await $fetch(`${config.strapiUrl}/api/auth/local/register`, { method: 'POST', body: payload })
  }
  catch (e) {
    console.log(`An error occured\n${e}`)
    throw createError({
      statusCode: 400,
      statusMessage: `An error occured`,
    })
  }

  sendNoContent(event, 200)
})
