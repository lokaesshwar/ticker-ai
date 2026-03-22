export type Role = "user" | "assistant"

export interface Message {
  id: string
  role: Role
  content: string
  timestamp: Date
}

export interface Stock {
  symbol: string
  price: string
  change: string
  percent: string
  up: boolean
}

export interface Index {
  name: string
  value: string
  change: string
  up: boolean
}
