import React from 'react'
import type { CharacterListEntity } from '@/pods/characterList/hooks'
import { ButtonInfo } from '../buttonInfo'
import '../characterListCard/characterListCard.style.scss'

interface CharacterListCardProps {
  character: CharacterListEntity
  onDetail: (id: number) => void
}

export const CharacterListCard: React.FC<CharacterListCardProps> = ({ character, onDetail }) => {
  return (
    <div className='card'>
      <div className='cardImg'>
        <img src={character.image} alt='character rick and morty' />
      </div>
      <div className='dataContent'>
        <div className='nameContent'>
          <h4>{character.name}</h4>
        </div>
        <ButtonInfo onClick={() => { onDetail(character.id) }} />
      </div>
    </div>
  )
}
