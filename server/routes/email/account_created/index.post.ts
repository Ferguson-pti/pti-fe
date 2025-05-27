import { Resend } from 'resend'
import { render } from '@vue-email/render'
import AccountCreatedEmail from '~~/emails/account/AccountCreatedEmail.vue'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const { name, email, price, tier, password } = await readBody(event)

  const templateHtml = await render(
    AccountCreatedEmail,
    {
      name, email, password, price, tier,
    },
    { pretty: true },
  )

  const templateText = await render(
    AccountCreatedEmail,
    {
      name, email, password, price, tier,
    },
    { plainText: true },
  )

  if (!templateHtml || !templateText) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not Found',
    })
  }

  const resend = new Resend(config.resendApiKey)

  const mailOptions = {
    from: 'venturestudio@cyphercrescent.com', // config.resendEmail, //
    to: email, // 'venturestudio@cyphercrescent.com',
    subject: `Payment Received for ICHST 2025`,
    html: templateHtml,
    text: templateText,
  }

  const mailResponse = await resend.emails.send(mailOptions)

  if (mailResponse.error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Internal Server Error. ${mailResponse.error.message}`,
    })
  }

  return { successful: true }
})
