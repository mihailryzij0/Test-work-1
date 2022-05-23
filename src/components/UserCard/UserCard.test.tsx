import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserCard from "./UserCard";

const user = {
  id: 1,
  name: "Михаил Мирославович",
  username: "Михаил",
  email: "mihail@gmail.com",
  address: {
    street: "Kirovskai",
    suite: "Apt. 692",
    city: "Kirov",
    zipcode: "123",
    geo: {
      lat: "0.123",
      lng: "0.123",
    },
  },
  phone: "8923949939",
  website: "www.abs.com",
  company: {
    name: "Robel-Corkery",
    catchPhrase: "Multi-tiered zero tolerance productivity",
    bs: "transition cutting-edge web services",
  },
};
describe("UserCard", () => {
  it("UserCard render", () => {
    render(<UserCard userData={user} />);
    const avatar = screen.getByRole("img");
    const userName = screen.getByText(/Михаил/i);
    const name = screen.getByText(/Михаил Мирославович/i);
    expect(userName).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(avatar.getAttribute("src")).toBe("test-file-stub");
  });
});
