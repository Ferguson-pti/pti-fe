export interface User {
  id: number
  documentId: string
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  transactionRef: string
  phone: string
  affiliation: string
  nationality: string
  category: string
  paidAt: string
  title: string
  jobTitle: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}
