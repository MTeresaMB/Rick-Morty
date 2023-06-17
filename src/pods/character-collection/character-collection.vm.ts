import { Origin, Location } from './api/character-collection.api-model';

export interface CharacterEntityVm {
  id: number, 
  name: string,
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