import { Resend } from 'resend'
import { render } from '@vue-email/render'
import AdminEmail from '~~/emails/message/AdminEmail.vue'

export default defineEventHandler(async (event) => {
  const messageId = getRouterParam(event, 'id')
  const config = useRuntimeConfig(event)

  const { data }: MessagePostResponse = await $fetch(`${config.strapiUrl}/api/messages/${messageId}`)

  const { name, email, message } = data

  const templateHtml = await render(
    AdminEmail,
    {
      name, email, message,
    },
    { pretty: true },
  )

  const templateText = await render(
    AdminEmail,
    {
      name, email, message,
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
    subject: `New Message Received from ${name}`,
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

  const { successful } = await $fetch(
    '/email/message/auto-reply',
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
