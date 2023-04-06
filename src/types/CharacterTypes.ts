
export interface CharacterWrapper {
	count: number,
	next: string,
	previous: undefined | string,
	results: Character[]
}

export interface Character {
	name: string,
	gender: string
}