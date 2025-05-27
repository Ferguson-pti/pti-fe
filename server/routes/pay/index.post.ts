import * as https from 'https'
import { PriceList } from '~~/server/models/pricelist'

interface FormData {
  name: string
  email: string
  phone: string
  residence: string
  profession: string
  category: string // price ID
}
// paystackSecretKey

export default defineEventHandler(async (event) => {
  const { name, email, phone, residence, profession, category } = await readBody<FormData>(event)
  const config = useRuntimeConfig()

  // Get price and create a paystack ticket
  const priceData = PriceList.find(item => item.id === category)

  if (priceData === undefined) {
    return { error: 'An error occured while fetching pricing data' }
  }

  // Varies (between price and discount) if early bird discount is over
  // Add '00' to the end of the string
  const parsedPrice = priceData.price.slice(1).split(',').join('') + '00'

  const params = JSON.stringify({
    email: email,
    amount: '10000', // parsedPrice,
    currency: priceData.currencyCode,
    metadata: {
      name, email, phone, residence, profession,
      priceId: priceData.id,
      priceTier: priceData.name,
    },
  })

  const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: '/transaction/initialize',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.paystackSecretKey}`,
      'Content-Type': 'application/json',
    },
  }

  console.log(1)

  return new Promise((resolve) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const request = https.request(options, (response: any) => {
      let data = ''

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      response.on('data', (chunk: any) => {
        data += chunk
      })

      response.on('end', () => {
        console.log('end')
        resolve({ ...JSON.parse(data) })
      })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }).on('error', (error: any) => {
      console.log('An error occured @ /pay' + error)
      resolve({ error: `An error occured while generating payment link` })
    })

    request.write(params)
    request.end()
  })
})
