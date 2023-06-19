export interface EndPoint {
  info: Info,
  results: CharacterCollectionEntity[],
}

export interface Info{
  count: number,
  pages: number,
  next: string,
  preve: null,
}

export interface CharacterCollectionEntity {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: Origin,
  location: Location,
  image: string,
  episode: string[],
  url: string,
  created: string,
}

export interface Origin{
  name: string,
  url: string,
}

export interface Location {
  name: string,
  url: string,
}