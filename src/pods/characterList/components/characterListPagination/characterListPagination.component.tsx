import React from 'react'
import './characterListPagination.style.scss'
import { type CharacterListEntity } from '@/common/api'
import { PaginationContext } from '@/providers/charactersPaginationContext'

interface PaginationProps {
  onPageChange: (page: number) => void
  characters: CharacterListEntity[]
}

export const PaginationComponent: React.FC<PaginationProps> = ({ onPageChange, characters }) => {
  const totalPages = characters.length
  const { currentPage, setCurrentPage } = React.useContext(PaginationContext)

  const handlePageChangePagination = (page: number): void => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page)
      setCurrentPage(page)
      console.log(page, 'loaded')
    }
  }

  return (
    <div className='paginationBttns'>
      <div className='buttonContainer'>
        <button className='button' onClick={() => { handlePageChangePagination(currentPage - 1) } }>
          Previous
          <div id="clip">
            <div id="leftTop" className="corner"></div>
            <div id="rightBottom" className="corner"></div>
            <div id="rightTop" className="corner"></div>
            <div id="leftBottom" className="corner"></div>
          </div>
          <span id="rightArrow" className="arrow"></span>
          <span id="leftArrow" className="arrow"></span>
        </button>
        <button className='button' onClick={() => { handlePageChangePagination(currentPage + 1) } }>
          Next
          <div id="clip">
            <div id="leftTop" className="corner"></div>
            <div id="rightBottom" className="corner"></div>
            <div id="rightTop" className="corner"></div>
            <div id="leftBottom" className="corner"></div>
          </div>
          <span id="rightArrow" className="arrow"></span>
          <span id="leftArrow" className="arrow"></span>
        </button>
      </div>
    </div>
  )
}
