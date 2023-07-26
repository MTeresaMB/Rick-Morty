import { createContext } from 'react'

export const PaginationContext = createContext<{
  currentPage: number
  setCurrentPage: (page: number) => void
}>({
      currentPage: 1,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      setCurrentPage: () => {}
    })
