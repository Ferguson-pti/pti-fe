interface DocumentUploadResponse {
  id: number
  name: string
  url: string
  mime: string
  size: number
  width?: number
  height?: number
  alternativeText?: string
  caption?: string
  previewUrl?: string
  provider: string
  createdAt: string
  updatedAt: string
}

interface StrapiAbstractData {
  category: string
  createdAt: string
  documentId: string
  email: string
  id: string
  name: string
  organisation: string
  phone: string
  publishedAt: string
  updatedAt: string
}

interface AbstractPostResponse {
  data: StrapiAbstractData
}

interface PopulatedAbstractResponse extends AbstractPostResponse {
  data: AbstractPostResponse['data'] & {
    upload: {
      alternativeText: null
      caption: null
      createdAt: string
      documentId: string
      ext: string
      formats: null
      hash: string
      height: null
      id: number
      mime: string
      name: string
      previewUrl: null
      provider: string
      provider_metadata: string | null
      publishedAt: string
      size: number
      updatedAt: string
      url: string
    }
  }
}

interface StrapiMessageData {
  createdAt: string
  documentId: string
  email: string
  id: number
  message: string
  name: string
  publishedAt: string
  updatedAt: string
}

interface MessagePostResponse {
  data: StrapiMessageData
}

interface PaystackResponseError {
  error: string
}

interface PaystackResponseSuccess {
  status: boolean
  message: string
  data: {
    access_code: string
    authorization_url: string
    reference: string
  }
}

type PaystackResponse = PaystackResponseSuccess | PaystackResponseError
