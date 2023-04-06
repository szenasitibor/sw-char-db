import React from "react";
import {Box, CircularProgress, Grid} from "@mui/material";

export const LoadingIndicator = () => {
	return (
		<Box className={"LoadingIndicator"}>
			<Grid container display={"flex"} justifyContent={"center"} alignItems={"center"} margin={"20px 0"}>
				<CircularProgress />
			</Grid>
		</Box>
	);
};