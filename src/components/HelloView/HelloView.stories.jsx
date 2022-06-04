import React from "react";
import { HelloView } from "./HelloView";

export default {
  title: "Bonus Components/Hello View",
  component: HelloView,
};

const Template = () => <HelloView />;

export const DefaultHello = Template.bind({});
