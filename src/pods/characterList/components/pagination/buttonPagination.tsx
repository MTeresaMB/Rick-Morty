import React from 'react'
import './paginationComponent.style.scss'

interface buttonPaginationProps {
  textButton: string
  handlePageChangePagination: () => void
}
export const ButtonPagination:React.FC<buttonPaginationProps> = ({textButton, handlePageChangePagination}) => <button className='buttonPaginate' onClick={() => { handlePageChangePagination()}}>{textButton}</button>



