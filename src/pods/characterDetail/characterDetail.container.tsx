import React, { useState, type ReactElement, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CharacterDetailEmpty, type CharacterListEntity } from './hooks/characterDetail.interface'
import { CharacterComponent } from './characterDetail.component'
import { mapCharacterFromApiToViewModel } from '@/common/mappers'
import { useGetCharacter } from './hooks/useGetCharacter'

export const CharacterDetailContainer: React.FC = (): ReactElement => {
  const [character, setCharacter] = useState<CharacterListEntity>(CharacterDetailEmpty)
  const { id } = useParams<{ id: string }>()

  const handleLoadCharacter = async (): Promise<void> => {
    try {
      const response = await useGetCharacter(Number(id))
      setCharacter(mapCharacterFromApiToViewModel(response))
    } catch (error) {
      console.log('Error fetching character: ', error)
    }
  }

  useEffect(() => {
    handleLoadCharacter().catch((error) => { console.log('Error loading character: ', error) })
  }, [])

  return <CharacterComponent character={character} />
}
