export interface Character {
	location: Location;
	origin: Origin;
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	image: string;
}

export interface Location{
	name: string,
}

export interface Origin{
  name: string,
}
export interface EndPointDetail {
	results: Character[];
}