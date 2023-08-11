import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CharacterDetailEmpty, type CharacterListEntity } from './hooks/characterDetail.interface'
import { CharacterComponent } from './characterDetail.component'
import { mapCharacterFromApiToViewModel } from '@/common/mappers'
import { useGetCharacter } from './hooks/useGetCharacter'
import { SpinnerComponent } from '@/common/spinner/SpinnerComponent'

export const CharacterDetailContainer: React.FC = () => {
  const [character, setCharacter] =
    useState<CharacterListEntity>(CharacterDetailEmpty)
  const [isLoadingSpinner, setIsLoadingSpinner] = useState<boolean>(true)
  const { id } = useParams<{ id: string }>()

  const handleLoadCharacter = async (): Promise<void> => {
    try {
      const response = await useGetCharacter(Number(id))
      setCharacter(mapCharacterFromApiToViewModel(response))
    } catch (error) {
      console.log('Error fetching character: ', error)
    } finally {
      setIsLoadingSpinner(false)
    }
  }

  useEffect(() => {
    handleLoadCharacter().catch((error) => {
      console.log('Error loading character: ', error)
      setIsLoadingSpinner(false)
    })
  }, [])

  return (
    <div>
      {isLoadingSpinner ? (
        <SpinnerComponent />
      ) : (
        <CharacterComponent character={character} />
      )}
    </div>
  )
}
