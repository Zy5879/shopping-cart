import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/Home";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  mockedUsedNavigate.mockReset();
});

test("renders  Home information", async () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const headerElement = screen.getByText(/Discover Games/i);
  const buttonElement = screen.getByText(/Game Catalog/i);
  expect(headerElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test("redirects after click", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  const buttonElement = screen.getByText(/Game Catalog/i);
  userEvent.click(buttonElement);

  expect(mockedUsedNavigate).toBeCalledTimes(1);
});

test("navigates to correct URL when clicked", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  const buttonElement = screen.getByText(/Game Catalog/i);
  userEvent.click(buttonElement);
  expect(mockedUsedNavigate).toBeCalledWith("/products");
});
