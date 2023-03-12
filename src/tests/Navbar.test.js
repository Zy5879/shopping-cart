import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  <BrowserRouter>
    <App />
  </BrowserRouter>;
});

test("renders home page on path", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.getByText(/Discover Games/i)).toBeInTheDocument();
});

test("renders products page on path", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  userEvent.click(screen.getByTestId("games-link"));
  await waitFor(() => {
    expect(screen.getByTestId("product-page")).toBeInTheDocument();
  });
});

test("renders cart page on path click", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  userEvent.click(screen.getByTestId("cart-nav"));

  await waitFor(() => {
    expect(screen.getByTestId("cart")).toBeInTheDocument();
  });
});
