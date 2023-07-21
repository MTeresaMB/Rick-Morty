import React from 'react'
import { RouterComponent } from 'core/router'
import { PaginationProvider } from './providers/charactersPaginationProvider'

export const App: React.FC = () => {
  return (
    <PaginationProvider>
      <RouterComponent />
    </PaginationProvider>
  )
}
