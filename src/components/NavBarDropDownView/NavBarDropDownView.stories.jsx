import React from "react";
import { NavBarDropDownView } from "./NavBarDropDownView";

export default {
  title: "InteractiveComponents/NavBarDropDownView",
  component: NavBarDropDownView,
};

const Template = (args) => <NavBarDropDownView {...args} />;
export const ExampleWithNameAndLinks = Template.bind({});

ExampleWithNameAndLinks.args = {
  airlineName: "American Airlines",
  bidTypesPath: "/american-airlines/bidtypes",
  pilotsPath: "/american-airlines/pilots",
};
