export interface IReqConfig {
  params?: any
  method?: string
  headers?: IHeader
  token?: string
  'Content-Type'?: string
}

export interface IHeader {
  'Content-Type'?: string
  'X-Requested-With'?: string
  token?: string
  [propName: string]: any
}
