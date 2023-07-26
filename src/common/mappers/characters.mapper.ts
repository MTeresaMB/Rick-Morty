import type { CharacterListEntity as ApiCharacterListEntity, CharacterListEntity as ViewModelCharacterListEntity } from '@/pods/characterList/hooks'

export const mapCharacterFromApiToViewModel = (character: ApiCharacterListEntity): ViewModelCharacterListEntity => {
  const { id, name, status, species, gender, image, location: { name: Location }, origin: { name: Origin }, type } = character
  return {
    id,
    name,
    status,
    species,
    gender,
    image,
    location: {
      name: Location
    },
    origin: {
      name: Origin
    },
    type
  }
}
export const mapCharacterFromViewModelToApi = (character: ViewModelCharacterListEntity): ApiCharacterListEntity => {
  const { id, name, status, species, gender, image, location: { name: Location }, origin: { name: Origin }, type } = character
  return {
    id,
    name,
    status,
    species,
    gender,
    image,
    location: {
      name: Location
    },
    origin: {
      name: Origin
    },
    type
  }
}
