export interface UserCredentials {
  readonly email: String,
  readonly password: String
}

export interface ReqAuthResponse {
  token: string
}

export interface User {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string,
  description?: string
}

export interface UsersReqresResponse {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: User[]
}

export interface SingleUserReqresResponse {
  data: User,
  support: {
    url: string,
    text: string
  }
}
