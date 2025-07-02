import { createContext } from 'react'

export interface User {
  id: string
  name: string
  email: string
}

export interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)