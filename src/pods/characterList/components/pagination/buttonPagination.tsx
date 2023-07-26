import React from 'react'
import './paginationComponent.style.scss'

interface buttonPaginationProps {
  textButton: string
  handlePageChangePagination: () => void
}
export const ButtonPagination:React.FC<buttonPaginationProps> = ({textButton, handlePageChangePagination}) => {
  return (
    <button className='button' onClick={() => { handlePageChangePagination()}}>{textButton}</button>
  )
}
