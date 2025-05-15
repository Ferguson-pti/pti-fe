import { Resend } from 'resend'
import { render } from '@vue-email/render'
import AdminEmail from '~~/emails/AdminEmail.vue'

export default defineEventHandler(async (event) => {
  const abstractId = getRouterParam(event, 'id')
  const config = useRuntimeConfig(event)

  const { data }: PopulatedAbstractResponse = await $fetch(`${config.strapiUrl}/api/abstracts/${abstractId}?populate=*`)

  const { name, email, phone, category, organisation, upload } = data

  const templateHtml = await render(
    AdminEmail,
    {
      name, email, phone, organisation, category,
    },
    { pretty: true },
  )

  const templateText = await render(
    AdminEmail,
    {
      name, email, phone, organisation, category,
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
    from: config.resendEmail, // 'venturestudio@cyphercrescent.com',
    to: config.resendEmail, // 'venturestudio@cyphercrescent.com',
    subject: `New Abstract Submission for ${name}`,
    html: templateHtml,
    text: templateText,
    attachments: [
      {
        path: `${config.strapiUrl}${upload.url}`,
        filename: upload.name,
      },
    ],
  }

  const mailResponse = await resend.emails.send(mailOptions)

  if (mailResponse.error) {
    console.log(config.resendApiKey)
    throw createError({
      statusCode: 500,
      statusMessage: `Internal Server Error. ${mailResponse.error.message}`,
    })
  }

  const { successful } = await $fetch(
    '/email/abstract/auto-reply',
    {
      method: 'POST',
      body: { name, email },
    },
  )

  if (!successful) {
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to send email to ${email}`,
    })
  }

  return { successful: true }
})
