import React from "react";
import { AirlineView } from "./AirlineView";

export default {
  title: "Interactive Components/AirlineView",
  component: AirlineView,
};

const Template = (args) => <AirlineView {...args} />;
export const ExampleWithNameAndLink = Template.bind({});

ExampleWithNameAndLink.args = {
  name: "American Airlines",
  path: "/american-airlines/bidtypes",
};
