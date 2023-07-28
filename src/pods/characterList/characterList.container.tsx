import React, { useContext, useEffect, useState } from 'react'
import { CharacterListComponent } from './characterList.component'
import { PaginationComponent } from './components/pagination'
import { useCharacterList, useCharacterSearch } from './hooks'
import { PaginationContext } from '@/providers/paginationContext'
import { Error } from './components/error'
import { useNavigate } from 'react-router-dom'
import { LinkRoutes } from '@/core/router'
import './hooks/characterSearch.style.scss'

export const CharacterListContainer: React.FC = () => {
  const TEXT_ERROR = 'The character you are trying to search has been moved to another universe.'
  const [filterSearch, setFilterSearch] = useState<string>('')
  const { charactersFullList, charactersFullListPages, fetchCharacterList } = useCharacterList()
  const { charactersFilteredList, charactersFilteredListPages, searchCharacter, error } = useCharacterSearch()
  const { currentPage, setCurrentPage } = useContext(PaginationContext)

  const navigate = useNavigate()
  const handleNavigateDetail = (id: number): void => {
    navigate(LinkRoutes.detailCharacter(Number(id)))
  }
  const handlePageChange = (page: number): void => {
    setCurrentPage(page)
  }

  useEffect(() => {
    if (filterSearch === '') {
      fetchCharacterList(currentPage).catch((error) => {
        console.log('Error fetching character list', error)
      })
      console.log('fetchCharacterList')
    } else {
      searchCharacter(filterSearch, currentPage).catch((error) => {
        console.log('Error fetching character list', error)
      })
      console.log('searchCharacter')
    }
  }, [currentPage, filterSearch, setFilterSearch])

  const filteredCharacters =
    charactersFilteredList.length > 0 && filterSearch !== ''
      ? charactersFilteredList
      : charactersFullList
  const totalPages =
    filterSearch === '' ? charactersFullListPages : charactersFilteredListPages

  return (
    <>
      <input
        className="inputSearch"
        type="text"
        value={filterSearch}
        onChange={(e) => {
          setFilterSearch(e.target.value)
        }}
        placeholder="Search Characters"
      />
      {error ? (
        <Error textError={TEXT_ERROR}/>
      ) : (
        <>
          <CharacterListComponent
            characterList={filteredCharacters}
            onDetail={handleNavigateDetail}
          />
          <PaginationComponent
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  )
}
