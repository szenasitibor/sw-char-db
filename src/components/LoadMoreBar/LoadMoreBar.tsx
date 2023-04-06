import React from "react";
import {Box, Card, Typography} from "@mui/material";
import styled from "@emotion/styled";

const StyledCard = styled(Card)(() => ({
	margin: "10px 10px",
	padding: "10px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	cursor: "pointer"
}));

export const LoadMoreBar = ({onClick, disabled} : {onClick: () => void, disabled?: boolean}) => {

	if (disabled) {
		return null;
	}

	return (
		<Box className={"LoadMoreBar"}>
			<StyledCard className={"LoadMoreBar"} variant={"elevation"} onClick={onClick} elevation={10}>
				<Typography variant={"h5"}>
					Load More
				</Typography>
			</StyledCard>
		</Box>
	);
};