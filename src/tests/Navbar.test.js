import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../components/Navbar";
import { MemoryRouter } from "react-router-dom";

test("render contact component on click", async () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const buttonClick = screen.getByText(/Contact/i);
  userEvent.click(buttonClick);

  await waitFor(() => {
    expect(screen.getByTestId("contact-page")).toBeInTheDocument();
  });
});

test("render product component on click", async () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const buttonClick = screen.getByTestId("games-link");
  userEvent.click(buttonClick);
  await waitFor(() => {
    expect(screen.getByTestId("product-page")).toBeInTheDocument();
  });
});
test("render cart component on click", async () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const buttonClick = screen.getByText(/Cart/i);
  userEvent.click(buttonClick);
  await waitFor(() => {
    expect(screen.getByTestId("cart")).toBeInTheDocument();
  });
});
