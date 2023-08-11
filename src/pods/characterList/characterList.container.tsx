import React, { useContext, useEffect } from 'react'
import { CharacterListComponent } from './characterList.component'
import { PaginationComponent } from './components/pagination'
import { useCharacterList, useCharacterSearch } from './hooks'
import { PaginationContext } from '@/providers/pagination/paginationContext'
import { Error } from './components/error'
import { useNavigate } from 'react-router-dom'
import { LinkRoutes } from '@/core/router'
import './hooks/characterSearch.style.scss'
import { useDebounce } from 'use-debounce'

export const CharacterListContainer: React.FC = () => {
  const TEXT_ERROR = 'The character you are trying to search has been moved to another universe.'
  const { charactersFullList, charactersFullListPages, fetchCharacterList } =
  useCharacterList()
  const {
    currentPage,
    setCurrentPage,
    searchedCharacter,
    setSearchedCharacter,
  } = useContext(PaginationContext)
  const {
    charactersFilteredList,
    charactersFilteredListPages,
    searchCharacter,
    error,
  } = useCharacterSearch()
  const [debounceFilterSearch] = useDebounce(searchedCharacter, 1500)

  const navigate = useNavigate()
  const handleNavigateDetail = (id: number): void => {
    navigate(LinkRoutes.detailCharacter(Number(id)))
  }
  const handlePageChange = (page: number): void => {
    setCurrentPage(page)
  }

  useEffect(() => {
    if (searchedCharacter === '') {
      fetchCharacterList(currentPage).catch((error) => {
        console.log('Error fetching character list', error)
      })
    } else {
      searchCharacter(debounceFilterSearch, currentPage).catch((error) => {
        console.log('Error fetching character list', error)
      })
      setSearchedCharacter(debounceFilterSearch)
    }
  }, [currentPage, debounceFilterSearch, setSearchedCharacter])

  const filteredCharacters =
    charactersFilteredList.length > 0 && searchedCharacter !== ''
      ? charactersFilteredList
      : charactersFullList
  const totalPages =
  searchedCharacter === '' ? charactersFullListPages : charactersFilteredListPages

  return (
    <>
      <input
        className="inputSearch"
        type="text"
        value={searchedCharacter}
        onChange={(e) => {
          setSearchedCharacter(e.target.value)
        }}
        placeholder="Search Characters"
      />
      {error ? (
        <Error textError={TEXT_ERROR} onNavigateBack={() => {
          navigate(LinkRoutes.root)
          setSearchedCharacter('')
        }}/>
      ) : (
        <>
          <PaginationComponent
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          <CharacterListComponent
            characterList={filteredCharacters}
            onDetail={handleNavigateDetail}
          />
        </>
      )}
    </>
  )
}
