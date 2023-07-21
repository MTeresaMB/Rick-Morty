import React, { type ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import { getCharacter, CharacterDetailEmpty } from '@/common/api'
import type { CharacterListEntity } from '@/common/api'
import { CharacterComponent } from './characterDetail.component'
import { mapCharacterFromApiToViewModel } from '@/common/mappers'

export const CharacterDetailContainer: React.FC = (): ReactElement => {
  const [character, setCharacter] = React.useState<CharacterListEntity>(CharacterDetailEmpty)
  const { id } = useParams<{ id: string }>()

  const handleLoadCharacter = async (): Promise<void> => {
    try {
      const response = await getCharacter(Number(id))
      setCharacter(mapCharacterFromApiToViewModel(response))
    } catch (error) {
      console.log('Error fetching character: ', error)
    }
  }

  React.useEffect(() => {
    handleLoadCharacter().catch((error) => { console.log('Error loading character: ', error) })
  }, [])

  return <CharacterComponent character={character} />
}
