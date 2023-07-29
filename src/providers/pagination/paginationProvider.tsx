import React, { useState } from 'react'
import { PaginationContext } from './paginationContext'

interface PaginationProviderProps {
  children: React.ReactNode
}

export const PaginationProvider: React.FC<PaginationProviderProps> = ({
  children
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [searchedCharacter, setSearchedCharacter] = useState<string>('')

  return (
    <PaginationContext.Provider value={{ currentPage, setCurrentPage, searchedCharacter, setSearchedCharacter }}>
      {children}
    </PaginationContext.Provider>
  )
}
