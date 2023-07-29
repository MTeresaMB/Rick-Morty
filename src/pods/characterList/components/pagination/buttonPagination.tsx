import React from 'react'
import './paginationComponent.style.scss'

interface buttonPaginationProps {
  textButton: string
  handlePageChangePagination: () => void
  disable: boolean
  type: 'prev' | 'next'
}
export const ButtonPagination: React.FC<buttonPaginationProps> = ({
  textButton,
  handlePageChangePagination,
  disable,
  type,
}) => {
  return (
    <button
      className={`buttonPagination ${type}`}
      onClick={() => {
        handlePageChangePagination()
      }}
      disabled={disable}>
      {textButton}
    </button>
  )
}
