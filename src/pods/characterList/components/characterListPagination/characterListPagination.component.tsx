import React from 'react'
import './characterListPagination.style.scss'
import { type CharacterListEntity } from '@/common/api'

interface PaginationProps {
  onPageChange: (page: number) => void
  characters: CharacterListEntity[]
}

export const PaginationComponent: React.FC<PaginationProps> = ({ onPageChange, characters }) => {
  const totalPages = characters.length
  const [loadCurrentPage, setLoadCurrentPage] = React.useState(1)

  const handlePageChange = (page: number): void => {
    if (page !== loadCurrentPage && page >= 1 && page <= totalPages) {
      onPageChange(page)
      setLoadCurrentPage(page)
    }
  }

  return (
    <div className='paginationBttns'>
      <div className='buttonContainer'>
        <button className='button' onClick={() => { handlePageChange(loadCurrentPage - 1) } }>
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
        <button className='button' onClick={() => { handlePageChange(loadCurrentPage + 1) } }>
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
