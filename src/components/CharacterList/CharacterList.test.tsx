import React from 'react'
import {render, screen} from "@testing-library/react";
import {CharacterList} from "./CharacterList";

test("CharacterList with undefined characters", () => {
	render(<CharacterList characters={undefined} />);

	expect(screen.queryByRole("heading")).toBeNull();
});

test("CharacterList with 1 character", () => {
	render(<CharacterList characters={[{name: "asd", gender: "male"}]} />);

	expect(screen.queryByRole("heading")).toHaveTextContent("asd");
	expect(screen.getByRole("img")).toHaveAttribute("src", "mock-image.png");
});

test("CharacterList with 2 character", () => {
	render(<CharacterList characters={[{name: "asd", gender: "male"}, {name: "asd2", gender: "female"}]} />);

	expect(screen.getByText("asd")).toHaveTextContent("asd");
	expect(screen.getByText("asd2")).toHaveTextContent("asd2");
	expect(screen.queryAllByRole("heading")).toHaveLength(2);
	expect(screen.getAllByRole("img")).toHaveLength(2);
});