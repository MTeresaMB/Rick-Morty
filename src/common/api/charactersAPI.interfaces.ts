export interface EndPoint {
  info: Info | null
  results: CharacterListEntity[]
}

export interface EndPointDetail {
  results: CharacterListEntity[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: null
}

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
