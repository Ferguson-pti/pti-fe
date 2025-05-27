/* eslint-disable @typescript-eslint/no-explicit-any */
export function isPaystackSuccessResponse(obj: any): obj is PaystackResponseSuccess {
  return (
    typeof obj === 'object'
    && obj !== null
    && typeof obj.status === 'boolean'
    && typeof obj.message === 'string'
    && typeof obj.data === 'object'
    && typeof obj.data.access_code === 'string'
    && typeof obj.data.authorization_url === 'string'
    && typeof obj.data.reference === 'string'
  )
}

export function isPaystackErrorResponse(obj: any): obj is PaystackResponseError {
  return (
    typeof obj === 'object'
    && obj !== null
    && typeof obj.error === 'string'
  )
}
