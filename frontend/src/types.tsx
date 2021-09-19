export type Tiger = {
  id?: number

  name: string
}

export type TigerError = any

export type User = {
  id?: number
  username: string
  passwordHash: string
}

export type UserError = any

export type LoginValues = {
  username: string
  password: string
}

export type RegisterValues = {
  username: string
  email: string
  password: string
  passwordConfirm: string
}
