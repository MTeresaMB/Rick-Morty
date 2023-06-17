import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (character: apiModel.CharacterEntity): viewModel.CharacterEntityVm => ({
  id: character.id,
  name: character.name,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: {
    name: character.origin.name,
    url: character.origin.url
  },
  location: {
    name: character.location.name,
    url: character.location.url,
  },
  image: character.image,
  episode: character.episode,
  url: character.url,
  created: character.created

});