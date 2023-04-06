import React from "react";
import {Box, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

export const CHARACTER_SORT_DATA = {
	AZ: "A-Z",
	ZA: "Z-A",
	MALE: "MALE",
	FEMALE: "FEMALE"
};

export const SORTING_DEFAULT_VALUE = "";

export const CharacterSort = ({selected, onChange, disabled}: CharacterSortProps) => {
	const handleChange = (e: SelectChangeEvent) => onChange(e.target.value);

	return (
		<Box className={"CharacterSort"} margin={"10px"}>
			<Grid container>
				<Grid item lg={2} md={3} xs={6}>
					<FormControl fullWidth>
						<InputLabel
							id={"sort-label"}
						>
							Sort
						</InputLabel>
						<Select
							id={"sort-select"}
							labelId={"sort-label"}
							value={selected}
							onChange={handleChange}
							disabled={disabled}
							data-testid={"sort-select"}
						>
							<MenuItem value={SORTING_DEFAULT_VALUE}>{"NO SORTING"}</MenuItem>
							<MenuItem value={CHARACTER_SORT_DATA.AZ}>{CHARACTER_SORT_DATA.AZ}</MenuItem>
							<MenuItem value={CHARACTER_SORT_DATA.ZA}>{CHARACTER_SORT_DATA.ZA}</MenuItem>
							<MenuItem value={CHARACTER_SORT_DATA.MALE}>{CHARACTER_SORT_DATA.MALE}</MenuItem>
							<MenuItem value={CHARACTER_SORT_DATA.FEMALE}>{CHARACTER_SORT_DATA.FEMALE}</MenuItem>
						</Select>
					</FormControl>
				</Grid>
			</Grid>
		</Box>
	);
};

export interface CharacterSortProps {
	selected: string,
	onChange: (s: string) => void,
	disabled: boolean
}