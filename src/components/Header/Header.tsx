import React from "react";
import {AppBar, Box, Typography} from "@mui/material";

export const Header = () => {
	return (
		<Box className={"Header"} sx={{padding: "10px"}}>
			<AppBar position={"relative"}>
				<Typography variant={"h3"} sx={{margin: "10px"}}>
					Star Wars Character Search
				</Typography>
			</AppBar>
		</Box>
	);
};