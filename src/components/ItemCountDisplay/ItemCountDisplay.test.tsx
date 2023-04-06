import React from 'react'
import {render, screen} from "@testing-library/react";
import {ItemCountDisplay} from "./ItemCountDisplay";

test("ItemCountDisplay with 10 10", () => {
	render(<ItemCountDisplay allItemCount={10} shownItemCount={10} disabled={false} />);

	expect(screen.getByRole("heading", {level: 5})).toHaveTextContent("Showing 10 results of 10");
});

test("ItemCountDisplay disabled", () => {
	render(<ItemCountDisplay disabled={true} />);

	expect(screen.queryByRole("heading", {level: 5})).toBeNull();
});

test("ItemCountDisplay undefined allItemCount", () => {
	render(<ItemCountDisplay allItemCount={undefined} shownItemCount={10} disabled={false} />);

	expect(screen.queryByRole("heading", {level: 5})).toBeNull();
});

test("ItemCountDisplay undefined shownItemCount", () => {
	render(<ItemCountDisplay allItemCount={10} shownItemCount={undefined} disabled={false} />);

	expect(screen.queryByRole("heading", {level: 5})).toBeNull();
});
