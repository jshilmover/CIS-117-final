import React from "react";
import { HeaderView } from "./HeaderView";
import { LogoView } from "../LogoView/LogoView";
import { NavBarView } from "../NavBarView/NavBarView";

export default {
  title: "ViewComponents/HeaderView",
  component: HeaderView,
};

const Template = (args) => <HeaderView {...args} />;

export const ExampleHeader = Template.bind({});
ExampleHeader.args = {
  logo: <LogoView />,
  navbar: <NavBarView />,
};
