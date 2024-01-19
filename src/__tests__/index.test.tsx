import { render, screen } from "@testing-library/react";
import { App } from "@/components/App";

describe("index", () => {
	it("should render the mock App component", () => {
		render(<App />);
		expect(screen.getByText(/Hey there, time to make a fast app!/i)).toBeInTheDocument();
	});
});
