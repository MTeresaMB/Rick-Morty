import React from 'react'
import { PaginationContext } from './charactersPaginationContext'

interface PaginationProps {
  children: React.ReactNode
}

export const PaginationProvider: React.FC<PaginationProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState(1)

  return (
    <PaginationContext.Provider value={({ currentPage, setCurrentPage })}>
      {children}
    </PaginationContext.Provider>
  )
}
