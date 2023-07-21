import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LinkRoutes } from 'core/router'
import { CharacterListComponent } from './characterList.component'
import './components/characterListBarSearch/characterListSearchBar.style.scss'
import { useCharacterList } from './characterList.useCharacterList'
import { PaginationComponent } from './components/characterListPagination/characterListPagination.component'

export const CharacterListContainer: React.FC = () => {
  const { characters, fetchCharacterList } = useCharacterList()
  const navigate = useNavigate()
  const handleDetail = (id: number): void => {
    navigate(LinkRoutes.detailCharacter(Number(id)))
  }
  const handlePageChange = (page: number): void => {
    void fetchCharacterList(page)
  }

  React.useEffect(() => {
    fetchCharacterList(1).catch((error) => {
      console.log('Error fetching character list: ', error)
    })
  }, [])
  return (
    <>
      <PaginationComponent
        characters={characters}
        onPageChange={handlePageChange}
      />

      <CharacterListComponent
        characterList={characters}
        onDetail={handleDetail}
      />
      <PaginationComponent
        characters={characters}
        onPageChange={handlePageChange}
      />
    </>
  )
}
