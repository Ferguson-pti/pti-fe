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
