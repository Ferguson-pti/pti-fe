export default defineEventHandler(async () => {
  try {
  // ${config.strapiUrl}
    const response = await $fetch(`http://localhost:1337/api/auth/local/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'Rophi Chukwu', email: 'chukwurophi@gmail.com', password: 'Chinko' }),
    })

    console.log(response)
    return { success: true }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch (e: any) {
    return {
      error: true,
      message: e!.data!.error!.details!.errors,
    }
  }
})
