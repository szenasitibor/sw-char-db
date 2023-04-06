import React from "react";
import {Box, Typography} from "@mui/material";

export const ItemCountDisplay = ({allItemCount, shownItemCount, disabled}: ItemCountDisplayProps) => {
	if (!shownItemCount || !allItemCount || shownItemCount === 0 || allItemCount === 0 || disabled) {
		return null;
	}
	return (
		<Box className={"ItemCountDisplay"} margin={"10px"}>
			<Typography variant={"h5"}>
				{`Showing ${shownItemCount} results of ${allItemCount}`}
			</Typography>
		</Box>
	);
};


export interface ItemCountDisplayProps {
	allItemCount?: number,
	shownItemCount?: number,
	disabled: boolean
}