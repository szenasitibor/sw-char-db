import React from 'react'
import {render, screen} from "@testing-library/react";
import {CHARACTER_SORT_DATA, CharacterSort, SORTING_DEFAULT_VALUE} from "./CharacterSort";

test("CharacterSort default state", () => {
	render(<CharacterSort selected={SORTING_DEFAULT_VALUE} onChange={() => {}} disabled={false} />)

	expect(screen.getByText("Sort")).toHaveTextContent("Sort");
});

test("CharacterSort AZ state", () => {
	render(<CharacterSort selected={CHARACTER_SORT_DATA.AZ} onChange={() => {}} disabled={false} />)

	expect(screen.getByText(CHARACTER_SORT_DATA.AZ)).toHaveTextContent(CHARACTER_SORT_DATA.AZ);
});

test("CharacterSort ZA state", () => {
	render(<CharacterSort selected={CHARACTER_SORT_DATA.ZA} onChange={() => {}} disabled={false} />)

	expect(screen.getByText(CHARACTER_SORT_DATA.ZA)).toHaveTextContent(CHARACTER_SORT_DATA.ZA);
});

test("CharacterSort MALE state", () => {
	render(<CharacterSort selected={CHARACTER_SORT_DATA.MALE} onChange={() => {}} disabled={false} />)

	expect(screen.getByText(CHARACTER_SORT_DATA.MALE)).toHaveTextContent(CHARACTER_SORT_DATA.MALE);
});

test("CharacterSort FEMALE state", () => {
	render(<CharacterSort selected={CHARACTER_SORT_DATA.FEMALE} onChange={() => {}} disabled={false} />)

	expect(screen.getByText(CHARACTER_SORT_DATA.FEMALE)).toHaveTextContent(CHARACTER_SORT_DATA.FEMALE);
});

test("CharacterSort disabled with default stat", () => {
	render(<CharacterSort selected={SORTING_DEFAULT_VALUE} onChange={() => {}} disabled={true} />)

	expect(screen.getByTestId("sort-select").getElementsByClassName("Mui-disabled")).not.toBeNull();
});