import React from "react";
import { PilotView } from "./PilotView";

export default {
  title: "ViewComponents/PilotView",
  component: PilotView,
};

const Template = (args) => <PilotView {...args} />;

export const Default = Template.bind({});
Default.args = {
  photoPath: "john-smith.jpeg",
  name: "John Smith",
  planeInfo: "CPT 737 GEG",
  location: "Riviera State 32/106",
  address: {
    name: "Twitter, Inc.",
    streetAddress: "795 Folsom Ave, Suite 600",
    cityStateZip: "San Francisco, CA 94107",
    phone: "(123) 456-7890",
  },
};
