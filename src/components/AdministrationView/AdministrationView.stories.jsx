import React from "react";
import { AdministrationView } from "./AdministrationView";

export default {
  title: "ViewComponents/AdministrationView",
  component: AdministrationView,
};

const Template = (args) => <AdministrationView {...args} />;

export const ExampleWithName = Template.bind({});
ExampleWithName.args = {
  name: "Jory Shilmover",
};
