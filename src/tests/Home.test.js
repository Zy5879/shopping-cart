import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

test("renders  Home information", async () => {
  render(<Home />);
  const headerElement = screen.getByText(/Discover Games/i);
  expect(headerElement).toBeInTheDocument();
});
