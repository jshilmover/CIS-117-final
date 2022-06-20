import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../src/styles.css";
import "popper.js";
import "@fortawesome/fontawesome-free/css/all.css";
import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCloudArrowDown,
  faAnglesRight,
  faXmark,
  faBrush,
  faPlus,
  faArrowsRotate,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCloudArrowDown,
  faAnglesRight,
  faXmark,
  faBrush,
  faPlus,
  faArrowsRotate,
  faLocationDot
);

addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

export const parameters = {
  actions: { argTypeRegex: "^on[A-Z].*" },
};
