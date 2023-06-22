export interface Character {
	id: number;
	name: string;
	status: string;
	species: string;
	gender: string;
	image: string;
	location: Location;
	origin: Origin;
	type: string;
}
export interface Location{
	name: string,
}

export interface Origin{
  name: string,
}

export const CharacterDetailEmpty = (): Character => ({
	id: 0,
	name: '',
	status: '',
	species: '',
	image: '',
	gender: '',
	type: '',
	location: {
		name: '',
	},
	origin: {
		name: '',
	},
});