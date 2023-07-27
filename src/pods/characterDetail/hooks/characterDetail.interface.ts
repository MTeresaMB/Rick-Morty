export interface CharacterListEntity {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
}

export const CharacterDetailEmpty: CharacterListEntity = {
  id: 0,
  name: '',
  status: '',
  species: '',
  image: '',
  gender: '',
  type: '',
  location: {
    name: ''
  },
  origin: {
    name: ''
  }
}
export interface Origin {
  name: string
}
export interface Location {
  name: string
}
