import {Character} from "../../types/CharacterTypes";
import {CHARACTER_SORT_DATA} from "./CharacterSort";

export const applySort = (characters: Character[], sorting: string) : Character[] => {
	switch (sorting) {
		case CHARACTER_SORT_DATA.AZ: {
			characters.sort((a, b) => a.name > b.name ? 1 : -1);
			break;
		}
		case CHARACTER_SORT_DATA.ZA: {
			characters.sort((a, b) => a.name > b.name ? -1 : 1);
			break;
		}
		case CHARACTER_SORT_DATA.FEMALE:
		case CHARACTER_SORT_DATA.MALE: {
			characters = characters.filter(c => c.gender.toUpperCase() === sorting);
			break;
		}
	}
	return characters;
}