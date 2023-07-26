export interface EndPoint {
  info: Info
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

export interface Origin {
  name: string
}
export interface Location {
  name: string
}
