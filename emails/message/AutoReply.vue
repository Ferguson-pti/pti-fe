<script setup lang="ts">
import { Html, Head, Preview, Body, Container, Section, Link, Text } from '@vue-email/components'

interface Props { name: string }

defineProps<Props>()

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '"Calibri Light",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const section = {
  padding: '16px 20px',
}

const footer = {
  borderTop: '1px solid gray',
}

const hero = {
  // background: 'linear-gradient(to right, rgb(0 0 0 / 0.8), rgb(0 0 0 / 0.3)), url(https://chaldeni.sirv.com/ccl/venture.webp) no-repeat 50% 50% / cover',
  // height: '160px',
  padding: '0px 20px',
  display: 'flex',
  alignItems: 'center',
  // color: 'white',
  fontWeight: '700',
  fontSize: '20px',
}

const footerText = {
  fontSize: '12px',
  textAlign: 'center',
  color: '#aaa',
}

// <b>March 1 and March 10, 2025</b>
</script>

<template>
  <Html lang="en">
    <Head>
      <title>Message Received: ICHST 2025</title>
    </Head>
    <Preview>Message Received: ICHST 2025</Preview>
    <Body :style="main">
      <Container>
        <Section :style="hero">
          <h1 style="{ line-height: 1; }">
            ICHST 2025
          </h1>
        </Section>
        <Section :style="section">
          <Text>
            Hi {{ name }},
          </Text>
          <Text>
            Thank you for reaching out to us. We will make sure to go through your message and notify you if need be. If you need to provide additional information or have any questions, please reach out to us at
            <Link href="mailto:ichst@pti.edu.ng">
              ichst@pti.edu.ng
            </Link>.
          </Text>
          <Text>
            Thank you once again for your interest. We look forward to exploring the potential of working together to shape the future of <b>Africa's Hydrocarbon Sector</b>.
          </Text>
          <Text>
            <br>
            Best Regards, <br>
            <b>ICHST 2025</b>
          </Text>
        </Section>
        <Section :style="footer">
          <Text :style="footerText">
            ICHST © 2025 | PTDF TOWERS, CENTRAL BUSINESS DISTRICT, ABUJA, NIGERIA. | https://pti-906t.onrender.com
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
</template>
