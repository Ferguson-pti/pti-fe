<script setup lang="ts">
import { Html, Head, Preview, Body, Container, Section, Text } from '@vue-email/components'

interface Props { name: string, email: string, password: string, tier: string, price: string }

defineProps<Props>()

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '"Calibri Light",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const section = {
  padding: '16px 20px',
}

const heading = {
  fontSize: '18px',
  lineHeight: '28px',
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
      <title>Payment Received for '{{ tier }}' ticket</title>
    </Head>
    <Preview>Payment Received for '{{ tier }}' ticket</Preview>
    <Body :style="main">
      <Container>
        <Section :style="hero">
          <h1 style="{ line-height: 1; }">
            Payment Received for '{{ tier }}' ticket of the ICHST 2025
          </h1>
        </Section>
        <Section :style="section">
          <Text
            as="h5"
            :style="heading"
          >
            Hello {{ name }},
            <br><br>
            Your payment of {{ price }} for the '{{ tier }}' ticket of the <strong>ICHST 2025</strong> has been confirmed and a
            user account has been created for you.
            <br>
            Below are the details to the account,
          </Text>
          <Text>
            <b>Email</b>
            <span style="display: block;">{{ email }}</span>
          </Text>
          <Text>
            <b>Password</b>
            <span style="display: block;">{{ password }}</span>
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
