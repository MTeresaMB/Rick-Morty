import React, { useState, type ReactNode } from "react"; 
import { SearchCharacterContext } from "./searchContext";

interface SearchCharacterProviderProps {
  children: ReactNode
}

export const SearchCharacterProvider: React.FC<SearchCharacterProviderProps> = ({ children }) => {
  const [searchedCharacter, setSearchedCharacter] = useState<string>('')

  return (
    <SearchCharacterContext.Provider value={{ searchedCharacter, setSearchedCharacter}}>
      { children }
    </SearchCharacterContext.Provider>
  )
}