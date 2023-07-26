import React from 'react'
import { PaginationContext } from './paginationContext'

interface PaginationProviderProps {
  children: React.ReactNode
}

export const PaginationProvider: React.FC<PaginationProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState(1)

  return (
    <PaginationContext.Provider value={({ currentPage, setCurrentPage })}>
      {children}
    </PaginationContext.Provider>
  )
}
