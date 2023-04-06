import React from 'react'
import {render, screen} from "@testing-library/react";
import {CharacterCard} from "./CharacterCard";

test("CharacterCard test with BLACK image", () => {
	render(<CharacterCard name={"NAME1"} color={"BLACK"} />);

	expect(screen.getByRole("heading", {level: 5})).toHaveTextContent("NAME1");
	expect(screen.getByRole("img")).toHaveAttribute("src", "mock-image-1.png");
});

test("CharacterCard test with RED image", () => {
	render(<CharacterCard name={"NAME2"} color={"RED"} />);

	expect(screen.getByRole("heading", {level: 5})).toHaveTextContent("NAME2");
	expect(screen.getByRole("img")).toHaveAttribute("src", "mock-image.png");
});