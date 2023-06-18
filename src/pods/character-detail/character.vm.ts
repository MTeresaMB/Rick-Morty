export interface CharacterDetail {
	id: string,
	name: string,
	status: string,
	species: string,
	image: string,
	gender: string,
	type: string,
}

export const CharacterDetailEmpty = (): CharacterDetail => ({
	id: '',
	name: '',
	status: '',
	species: '',
	image: '',
	gender: '',
	type: '',
});