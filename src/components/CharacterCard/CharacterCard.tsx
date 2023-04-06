import React from "react";
import red from "./mock-image.png";
import black from "./mock-image-1.png";
import {Card, Grid, Typography} from "@mui/material";

export const CharacterCard = ({name, color}: CharacterCardProps) => {
	return (
		<Card className={"CharacterCard"} variant={"elevation"} elevation={10} sx={{margin: "0 5px"}}>
			<Grid container display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
				<Grid item>
					<img src={color === "RED" ? red : black} alt={"logo"} width={"100%"} height={"100%"}/>
				</Grid>
				<Grid item>
					<Typography variant={"h5"}>{name}</Typography>
				</Grid>
			</Grid>
		</Card>
	);
};

export interface CharacterCardProps {
	name: string,
	color: "RED" | "BLACK"
}