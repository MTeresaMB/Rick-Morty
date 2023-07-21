import React from 'react'
import type { CharacterListEntity } from '@/common/api'
import { VoltageButton } from '../characterListButtonInfo/characterListButtonInfo.component'
import '../characterListCard/characterListCard.style.scss'

interface CharacterListProps {
  character: CharacterListEntity
  onDetail: (id: number) => void
}

export const CharacterListCard: React.FC<CharacterListProps> = (props) => {
  const { character, onDetail } = props

  return (
    <div className='card'>
      <div className='cardImg'>
        <img src={character.image} alt='character rick and morty' />
      </div>
      <div className='dataContent'>
        <div className='nameContent'>
          <h4>{character.name}</h4>
        </div>
        <VoltageButton onClick={() => { onDetail(character.id) }} />
      </div>
    </div>
  )
}
