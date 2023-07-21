import type { CharacterListEntity as ApiCharacterListEntity, CharacterListEntity as ViewModelCharacterListEntity } from '@/common/api'

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

export const mapToCollection = <A, B>(collection: A[], mapFn: (A) => B): B[] => Array.isArray(collection) ? collection.map(mapFn) : []
