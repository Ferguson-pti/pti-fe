<script setup lang="ts">
import { Html, Head, Preview, Body, Container, Section, Text } from '@vue-email/components'

interface Props { name: string, email: string, message: string }

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
      <title>Message Received from {{ name }}</title>
    </Head>
    <Preview>Message Received from {{ name }}</Preview>
    <Body :style="main">
      <Container>
        <Section :style="hero">
          <h1 style="{ line-height: 1; }">
            New Message <br> Received
          </h1>
        </Section>
        <Section :style="section">
          <Heading
            as="h5"
            :style="heading"
          >
            These are the details,
          </Heading>
          <Text>
            <b>Name</b>
            <span style="display: block;">{{ name }}</span>
          </Text>
          <Text>
            <b>Email</b>
            <span style="display: block;">{{ email }}</span>
          </Text>
          <Text>
            <b>Message</b>
            <span style="display: block;">{{ message }}</span>
          </Text>
        </Section>
        <Section :style="footer">
          <Text :style="footerText">
            CypherCrescent © 2025 | Plot 76A Fiddil Avenue, Off Ordinance Road,Trans Amadi Industrial Layout Port Harcourt, Nigeria. | www.cyphercresent.com
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
</template>
