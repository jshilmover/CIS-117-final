import React from "react";
import { VersionView } from "./VersionView";

export default {
  title: "Components/VersionView",
  component: VersionView,
};

const Template = (args) => <VersionView {...args} />;

export const ExampleWithVersion = Template.bind({});
ExampleWithVersion.args = {
  current: "1.0.0",
};
