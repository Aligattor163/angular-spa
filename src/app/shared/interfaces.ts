export interface User{
  readonly email: String,
  readonly password: String
}

export interface ReqAuthResponse{
  token: string
}
