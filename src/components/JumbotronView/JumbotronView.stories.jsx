import React from "react";
import { JumbotronView } from "./JumbotronView";
import { AdministrationView } from "../AdministrationView/AdministrationView";
import { VersionView } from "../VersionView/VersionView";

export default {
  title: "ViewComponents/JumbotronView",
  component: JumbotronView,
};

const Template = (args) => <JumbotronView {...args} />;

export const ExampleWithAdminAndVersionViews = Template.bind({});
ExampleWithAdminAndVersionViews.args = {
  administrationView: <AdministrationView name="Someone" />,
  versionView: <VersionView current="1.1.0" />,
};
