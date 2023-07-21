import React from 'react'
import type { CharacterListEntity } from '@/common/api'
import { CharacterDetailCard } from './components/characterDetailCard.component'

interface CharacterProps {
  character: CharacterListEntity
}

export const CharacterComponent: React.FC<CharacterProps> = ({ character }) => <CharacterDetailCard character={character} />
