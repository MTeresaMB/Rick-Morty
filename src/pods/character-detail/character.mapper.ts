import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToViewModel = (character: apiModel.Character): viewModel.Character => ({
	id: character.id,
	name: character.name,
	status: character.status,
	species: character.species,
	gender: character.gender,
	image: character.image,
	location: {
		name: character.location.name,
	},
	origin: {
		name: character.origin.name,
	},
	type: character.type,
	
});

export const mapCharacterFromViewModelToApi = (character: viewModel.Character): apiModel.Character => ({
	id: character.id,
	name: character.name,
	status: character.status,
	species: character.species,
	gender: character.gender,
	image: character.image,
	location: {
		name: character.location.name,
	},
	origin: {
		name: character.origin.name,
	},
	type: character.type,
});