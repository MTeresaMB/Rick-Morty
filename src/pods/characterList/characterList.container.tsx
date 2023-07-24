import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LinkRoutes } from 'core/router'
import { useCharacterList } from './characterList.useCharacterList'
import { CharacterListComponent } from './characterList.component'
import { PaginationComponent } from './components/characterListPagination/characterListPagination.component'
import { PaginationContext } from '@/providers/charactersPaginationContext'
import './components/characterListBarSearch/characterSearch.style.scss'
import { useCharacterSearch } from './components/characterListBarSearch/useCharacterSearch'

export const CharacterListContainer: React.FC = () => {
  const { characters, fetchCharacterList } = useCharacterList()
  const { filterSearch, setFilterSearch, character, searchCharacter } = useCharacterSearch()
  const { currentPage, setCurrentPage } = React.useContext(PaginationContext)
  const navigate = useNavigate()
  const handleDetail = (id: number): void => {
    navigate(LinkRoutes.detailCharacter(Number(id)))
  }
  const handlePageChange = (page: number): void => {
    setCurrentPage(page)
  }

  React.useEffect(() => {
    fetchCharacterList(currentPage).catch((error) => {
      console.log('Error fetching character list: ', error)
    })
  }, [currentPage])

  React.useEffect(() => {
    searchCharacter(filterSearch, currentPage).catch((error) => {
      console.log('Error fetching character list: ', error)
    })
  }, [setFilterSearch, currentPage])
  const filteredCharacters = character.length > 0 ? character : characters

  return (
    <>
      <PaginationComponent
        characters={characters}
        onPageChange={handlePageChange}
      />
       <input className="inputSearch"
        type="text"
        value={filterSearch}
        onChange={(e) => { setFilterSearch(e.target.value) }}
        placeholder="Search Characters"
        />
      <CharacterListComponent
        characterList={filteredCharacters}
        onDetail={handleDetail}
      />
    </>
  )
}
