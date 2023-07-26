import React from 'react'
import type { CharacterListEntity } from './hooks'
import { CharacterListCard } from './components/characterListCard/characterListCard'
import './components/characterListCard/characterListCard.style.scss'

interface CharacterComponentsProps {
  characterList: CharacterListEntity[]
  onDetail: (id: number) => void
}

export const CharacterListComponent: React.FC<CharacterComponentsProps> = (props) => {
  const { characterList, onDetail } = props
  return (
    <div className='cardContainer'>
      {characterList.map((character) => (
        <CharacterListCard
          key={character.id}
          character={character}
          onDetail={onDetail}
        />
      ))}
    </div>
  )
}
