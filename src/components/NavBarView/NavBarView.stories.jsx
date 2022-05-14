import React from "react";
import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";
import { NavBarView } from "./NavBarView";

export default {
  title: "ViewComponents/NavBarView",
  component: NavBarView,
};

const Template = (args) => <NavBarView {...args} />;
export const ExampleNavBar = Template.bind({});

ExampleNavBar.args = {
  nav1: (
    <NavBarDropDownView
      airlineName="American Airlines"
      bidTypesPath="/american-airlines/bidtypes"
      pilotsPath="american-airlines/pilots"
    />
  ),
  nav2: (
    <NavBarDropDownView
      airlineName="Alaska Airlines"
      bidTypesPath="/alaska-airlines/bidtypes"
      pilotsPath="alaska-airlines/pilots"
    />
  ),
  nav3: (
    <NavBarDropDownView
      airlineName="Frontier Airlines"
      bidTypesPath="/frontier-airlines/bidtypes"
      pilotsPath="frontier-airlines/pilots"
    />
  ),
  nav4: (
    <NavBarDropDownView
      airlineName="UPS"
      bidTypesPath="/ups/bidtypes"
      pilotsPath="ups/pilots"
    />
  ),
};
