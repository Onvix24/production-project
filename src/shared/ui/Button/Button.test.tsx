import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { render, screen } from "@testing-library/react/pure";

describe("Button", () => {
	test("Test render", () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText("TEST")).toBeInTheDocument();
	});

	test("Test clear theme", () => {
		render(<Button theme={ButtonTheme.CLEAR}>TEST-CLEAR</Button>);
		expect(screen.getByText("TEST-CLEAR")).toHaveClass("clear");
		screen.debug();
	});
});
