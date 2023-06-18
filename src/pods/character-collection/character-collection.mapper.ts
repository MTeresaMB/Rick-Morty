import { CharacterEntityVM } from "./character-collection.vm";
import * as apiModel from './api/character-collection.api-model';


export const mapFromApiToVm = (character: apiModel.CharacterCollectionEntity): CharacterEntityVM => ({
	id: character.id,
	name: character.name,
	status: character.status,
	species: character.species,
	gender: character.gender,
	image: character.image,
})