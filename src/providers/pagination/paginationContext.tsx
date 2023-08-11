import { createContext } from 'react'

export const PaginationContext = createContext<{
  currentPage: number
  setCurrentPage: (page: number) => void
  searchedCharacter: string
  setSearchedCharacter: (newValue: string) => void
}>({ currentPage: 1, setCurrentPage: () => {}, searchedCharacter: '', setSearchedCharacter: () => {} })
