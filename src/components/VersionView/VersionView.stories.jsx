import React from "react";
import { VersionView } from "./VersionView";

export default {
  title: "Components/VersionView",
  component: VersionView,
  argTypes: {
    version: "1.0.0",
  },
};

const Template = (args) => <VersionView {...args} />;

export const Example = Template.bind({});
Example.args = {
  version: {
    current: "1.0.0",
  },
};
