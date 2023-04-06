import React from 'react'
import {render, screen} from "@testing-library/react";
import {LoadMoreBar} from "./LoadMoreBar";

test("LoadMoreBar enable", () => {
	render(<LoadMoreBar onClick={() => {}} />)

	expect(screen.getByRole("heading", {level: 5})).toHaveTextContent("Load More");
});

test("LoadMoreBar disabled", () => {
	render(<LoadMoreBar onClick={() => {}} disabled={true}/>)

	expect(screen.queryByRole("heading", {level: 5})).toBeNull();
});