export interface EndPoint {
	info: Info,
	results: CharacterEntity[],
}

export interface Info {
	count: number,
	pages: number,
	next: string,
	preve: null,
}

export interface CharacterEntity {
	id: string,
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

export interface Origin {
	name: string,
	url: string,
}

export interface Location {
	name: string,
	url: string,
}