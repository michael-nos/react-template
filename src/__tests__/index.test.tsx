import { render, screen } from "@testing-library/react";
import { App } from "../App";
import { vi } from "vitest";

describe("index", () => {
	afterEach(() => {
		vi.resetAllMocks();
	});

	it("should render the mock App component", () => {
		vi.mock("../App.tsx", async () => {
			const component =
				await vi.importActual<typeof import("../App")>("../App");
			return {
				...component,
			};
		});
		render(<App />);
		expect(
			screen.getByText(/Hey there, time to make a fast app!/i),
		).toBeInTheDocument();
	});
});
