import React from "react";
import { HeaderView } from "./HeaderView";

export default {
  title: "ViewComponents/HeaderView",
  component: HeaderView,
};

const Template = (args) => <HeaderView {...args} />;

export const ExampleHeader = Template.bind({});
ExampleHeader.args = {
  menus: [
    {
      airlineName: "American Airlines",
      bidTypesPath: "/american-airlines/bidtypes",
      id: "1",
      pilotsPath: "american-airlines/pilots",
    },
    {
      airlineName: "Alaska Airlines",
      bidTypesPath: "/alaska-airlines/bidtypes",
      id: "2",
      pilotsPath: "alaska-airlines/pilots",
    },
    {
      airlineName: "Frontier Airlines",
      bidTypesPath: "/frontier-airlines/bidtypes",
      id: "3",
      pilotsPath: "frontier-airlines/pilots",
    },
    {
      airlineName: "UPS",
      bidTypesPath: "/ups/bidtypes",
      id: "4",
      pilotsPath: "ups/pilots",
    },
  ],
};
