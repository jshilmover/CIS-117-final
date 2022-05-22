import React from "react";
import { NavBarView } from "./NavBarView";

export default {
  title: "ViewComponents/NavBarView",
  component: NavBarView,
};

const Template = (args) => <NavBarView {...args} />;
export const ExampleNavBar = Template.bind({});

ExampleNavBar.args = {
  menus: [
    {
      airlineName: "American Airlines",
      bidTypesPath: "/american-airlines/bidtypes",
      pilotsPath: "american-airlines/pilots",
    },
    {
      airlineName: "Alaska Airlines",
      bidTypesPath: "/alaska-airlines/bidtypes",
      pilotsPath: "alaska-airlines/pilots",
    },
    {
      airlineName: "Frontier Airlines",
      bidTypesPath: "/frontier-airlines/bidtypes",
      pilotsPath: "frontier-airlines/pilots",
    },
    {
      airlineName: "UPS",
      bidTypesPath: "/ups/bidtypes",
      pilotsPath: "ups/pilots",
    },
  ],
};