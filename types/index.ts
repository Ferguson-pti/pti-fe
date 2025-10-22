export interface StrapiManyResponse<T> {
  data: Array<T>
  meta: Meta
}

export interface Strapi5ResponseMany<T> extends Strapi5ResponseMeta {
  results: Strapi5ResponseData<T>[]
}

export type Strapi5ResponseData<T> = T extends object
  ? T extends Array<infer U>
    ? Array<Strapi5ResponseData<U>>
    : T extends Record<string, unknown>
      ? { [K in keyof T]: Strapi5ResponseData<T[K]> } & StrapiSystemFields
      : T
  : T

export interface StrapiSystemFields {
  documentId: string
  locale?: string
}

export interface Strapi5ResponseMeta {
  pagination: MetaResponsePaginationByPage
  [key: string]: unknown
}

export interface MetaResponsePaginationByPage {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface StrapiOneResponse<T> {
  data: T
  meta: Meta
}

export interface KeyStrapiMeta {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface Meta {
  meta: {
    pagination: Pagination
  }
}

type Provider = 'local'
type RoleType = 'authenticated' | 'public'
type Category = 'Academia' | 'Industry-Others' | 'Students' | 'International'
type Title = 'Mr' | 'Mrs' | 'Dr' | 'Engr'

export class User {
  id: number = 0
  documentId: string = ''
  username: string = ''
  email: string = ''
  provider: Provider = 'local'
  confirmed: boolean = false
  blocked: boolean = false
  createdAt: string = ''
  updatedAt: string = ''

  role: {
    id: number
    type: RoleType
  } = { id: 0, type: 'authenticated' }

  affiliation: string = ''
  jobTitle: string = ''
  category: Category = 'Academia'
  checkedIn: boolean = false
  transactionRef: string = ''
  title: Title | undefined = undefined
  nationality: string = ''
  phone: string = ''
  passcode: string | undefined = ''
  paidAt: Date | undefined = undefined
}
