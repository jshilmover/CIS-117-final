import React from "react";
import { LogoView } from "./LogoView";

export default {
  title: "ViewComponents/LogoView",
  component: LogoView,
};

const Template = (args) => <LogoView {...args} />;
export const Example = Template.bind({});
