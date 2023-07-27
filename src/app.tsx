import React from 'react'
import { RouterComponent } from 'core/router'
import { PaginationProvider } from './providers/paginationProvider'

export const App: React.FC = () => {
  return (
    <PaginationProvider>
      <RouterComponent />
    </PaginationProvider>
  )
}
