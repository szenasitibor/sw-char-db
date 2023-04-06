import React from "react";
import {Character} from "../../types/CharacterTypes";
import {Box, Grid} from "@mui/material";
import {CharacterCard} from "../CharacterCard/CharacterCard";

export const CharacterList = ({characters}: {characters?: Character[]}) => {
	if (!characters) {
		return null;
	}
	return (
		<Box className={"CharacterList"} margin={"5px"}>
			<Grid container columns={10} rowGap={"10px"}>
				{characters.map((c, i) => (
					<Grid item lg={2} md={5} xs={10} key={c.name}>
						<CharacterCard name={c.name} color={i % 2 === 0 ? "RED" : "BLACK"}/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};