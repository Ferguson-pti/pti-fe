import { Resend } from 'resend'
import { render } from '@vue-email/render'
import AutoReply from '~~/emails/message/AutoReply.vue'

type RequestBody = {
  email: string
  name: string
}

export default defineEventHandler(async (event) => {
  const { name, email } = await readBody<RequestBody>(event)
  const config = useRuntimeConfig(event)

  const templateHtml = await render(AutoReply, { name: name }, { pretty: true })

  const templateText = await render(AutoReply, { name: name }, { plainText: true })

  if (!templateHtml || !templateText) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not Found',
    })
  }

  const resend = new Resend(config.resendApiKey)

  const mailOptions = {
    from: `${config.resendName} <${config.resendEmail}>`, // 'CypherCrescent Venture Studio <venturestudio@cyphercrescent.com>',
    to: email,
    subject: 'Message Received: ICHST 2025',
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
