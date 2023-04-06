import React, {ChangeEvent, useState} from "react";
import {Box, Button, Grid, TextField} from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';

const EndAdornment = ({text, onClick} : {text: string, onClick: () => void}) => {
	if (text === "") {
		return null;
	}
	return (
		<CancelIcon onClick={onClick} sx={{cursor: "pointer"}}/>
	)
}

export const CharacterSearch = ({search, deleteSearch, disabled} : CharacterSearchProps) => {
	const [text, setText] = useState<string>("");
	const [searched, setSearched] = useState<boolean>(false);
	const handleInput = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);
	const handleButtonClick = () => {
		setSearched(true);
		search(text);
	}
	const handleEndAdornmentClick = () => {
		if (disabled) {
			return;
		}
		setText("");
		if (searched) {
			deleteSearch();
			setSearched(false);
		}
	}
	return (
		<Box className={"CharacterSearch"} sx={{margin: "10px"}}>
			<Grid container display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={2}>
				<Grid container item>
					<Grid item lg={4} md={2} xs={0} />
					<Grid item lg={4} md={8} xs={12}>
						<TextField
							placeholder={"Search Character"}
							fullWidth
							variant={"standard"}
							value={text}
							onChange={handleInput}
							InputProps={{
								endAdornment: <EndAdornment text={text} onClick={handleEndAdornmentClick}/>
							}}
							disabled={disabled}
						/>
					</Grid>
					<Grid item lg={4} md={2} xs={0}/>
				</Grid>
				<Grid item>
					<Button
						variant={"contained"}
						onClick={handleButtonClick}
						disabled={disabled}
					>
						Search Character
					</Button>
				</Grid>
			</Grid>
		</Box>
	)
};

export interface CharacterSearchProps {
	search: (s: string) => void,
	deleteSearch: () => void,
	disabled: boolean
}