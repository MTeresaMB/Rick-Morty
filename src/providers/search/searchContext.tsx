import { createContext } from 'react'

export const SearchCharacterContext = createContext<{
  searchedCharacter: string
  setSearchedCharacter: (newValue: string) => void
}>({ searchedCharacter: '', setSearchedCharacter: () => {} })
