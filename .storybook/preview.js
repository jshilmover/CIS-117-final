import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../src/styles.css";
import "popper.js";
import "@fortawesome/fontawesome-free/css/all.css";
import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

export const parameters = {
  actions: { argTypeRegex: "^on[A-Z].*" },
};
