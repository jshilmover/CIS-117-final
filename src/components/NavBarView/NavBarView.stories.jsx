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
      id: "1",
      airlineName: "American Airlines",
      bidTypesPath: "/american-airlines/bidtypes",
      pilotsPath: "american-airlines/pilots",
    },
    {
      id: "2",
      airlineName: "Alaska Airlines",
      bidTypesPath: "/alaska-airlines/bidtypes",
      pilotsPath: "alaska-airlines/pilots",
    },
    {
      id: "3",
      airlineName: "Frontier Airlines",
      bidTypesPath: "/frontier-airlines/bidtypes",
      pilotsPath: "frontier-airlines/pilots",
    },
    {
      id: "4",
      airlineName: "UPS",
      bidTypesPath: "/ups/bidtypes",
      pilotsPath: "ups/pilots",
    },
  ],
};