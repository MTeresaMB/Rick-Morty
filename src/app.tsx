import React from 'react'
import { RouterComponent } from 'core/router'
import { PaginationProvider } from './providers/pagination/paginationProvider'

export const App: React.FC = () => {
  return (
    <PaginationProvider>
        <RouterComponent />
    </PaginationProvider>
  )
}
