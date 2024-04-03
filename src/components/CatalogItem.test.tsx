import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CatalogItem from "./CatalogItem";

test("renders product details correctly", () => {
  const mockItem = {
    brand: "Apple",
    href: "/mfp/9623007/apple-iphone-15?pid=11517874360",
    title: "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
    newPrice: "754€",
    usedPrice: "720,99€",
    image: "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg",
  };

  render(<CatalogItem item={mockItem} />);

  expect(screen.getByText(mockItem.brand)).toBeInTheDocument();
  expect(screen.getByText(mockItem.title)).toBeInTheDocument();
  expect(screen.getByText(mockItem.usedPrice)).toBeInTheDocument();
  expect(screen.getByText(mockItem.newPrice)).toBeInTheDocument();
  expect(screen.getByText(/Neuf/)).toBeInTheDocument();
  expect(screen.getByText(/Occasion dès/)).toBeInTheDocument();
  expect(screen.getByText(mockItem.usedPrice)).toBeInTheDocument();
});
