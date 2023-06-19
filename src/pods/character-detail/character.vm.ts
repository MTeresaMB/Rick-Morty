export interface Character {
	id: number;
	name: string;
	status: string;
	species: string;
	image: string;
	gender: string;
	type: string;
}

export const CharacterDetailEmpty = (): Character => ({
	id: 0,
	name: '',
	status: '',
	species: '',
	image: '',
	gender: '',
	type: '',
});