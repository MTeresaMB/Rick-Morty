import React from 'react'
import type { CharacterListEntity } from './hooks'
import { CharacterDetailCard } from './components/characterDetailCard'

interface CharacterProps {
  character: CharacterListEntity
}

export const CharacterComponent: React.FC<CharacterProps> = ({ character }) => <CharacterDetailCard character={character} />
