import React, { useContext } from 'react'
import './paginationComponent.style.scss'
import { PaginationContext } from '@/providers/paginationContext'
import { ButtonPagination } from './buttonPagination'

interface PaginationProps {
  onPageChange: (page: number) => void
  totalPages: number
}
export const PaginationComponent: React.FC<PaginationProps> = ({
  onPageChange,
  totalPages,
}) => {
  const { currentPage, setCurrentPage } = useContext(PaginationContext)

  const handlePageChangePagination = (page: number): void => {
    const isPaginationActive = page >= 1 && page <= totalPages
    if (isPaginationActive) {
      onPageChange(page)
      setCurrentPage(page)
      console.log(page, 'loaded')
    }
  }
  return (
      <>
        <div className='buttonContainer'>
          <ButtonPagination textButton='Previous' handlePageChangePagination={() => {handlePageChangePagination(currentPage - 1)}}></ButtonPagination>
          <div className='pages'>{ currentPage } / {totalPages}</div>
          <ButtonPagination textButton='Next' handlePageChangePagination={() => {handlePageChangePagination(currentPage + 1)}}></ButtonPagination>
        </div>
      </>
  )
}
