export interface CharacterEntityVM {
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
