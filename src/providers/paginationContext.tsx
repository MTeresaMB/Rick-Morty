import { createContext } from 'react'

export const PaginationContext = createContext<{currentPage: number, setCurrentPage: (page: number) => void}>({ currentPage: 1, setCurrentPage: () => {}})
