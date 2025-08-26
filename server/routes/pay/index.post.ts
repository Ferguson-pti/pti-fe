import * as https from 'https'
import { isEarlyBird } from '~~/helpers/functions'
import { PriceList } from '~~/server/models/pricelist'

interface FormData {
  title: string
  name: string
  email: string
  phone: string
  nationality: string
  affiliation: string
  jobTitle: string
  category: string // price ID
  callback_url: string
}
// paystackSecretKey

export default defineEventHandler(async (event) => {
  const { title, name, email, phone, nationality, affiliation, category, jobTitle, callback_url } = await readBody<FormData>(event)

  const config = useRuntimeConfig()

  // Get price and create a paystack ticket
  const priceData = PriceList.find(item => item.id === category)

  if (priceData === undefined) {
    return { error: 'An error occured while fetching pricing data' }
  }

  // Varies (between price and discount) if early bird discount is over
  // Add '00' to the end of the string
  const price = isEarlyBird ? priceData.discount : priceData.price
  const parsedPrice = price.slice(1).split(',').join('') + '00'

  const params = JSON.stringify({
    email: email,
    amount: parsedPrice, // '50000',
    currency: priceData.currencyCode,
    callback_url: callback_url,
    channels: ['card', 'bank', 'ussd'],
    metadata: {
      title, name, email, phone, nationality, affiliation, jobTitle,
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

  return new Promise((resolve) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const request = https.request(options, (response: any) => {
      let data = ''

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      response.on('data', (chunk: any) => {
        data += chunk
      })

      response.on('end', () => {
        try {
          resolve({ ...JSON.parse(data) })
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (e: any) {
          console.log(e)
          resolve({ error: `An error occured while parsing payment link` })
        }
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
