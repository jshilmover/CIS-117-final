import React from "react";
import { BidTypeView } from "./BidTypeView";

export default {
  title: "ViewComponents/BidTypeView",
  component: BidTypeView,
};

const Template = (args) => <BidTypeView {...args} />;

export const Default = Template.bind({});
Default.args = {
  bidTypes: {
    id: "1",
    bidType: "CAPTAIN ANC 73G",
    bidPeriods: "1",
    lastImport: "May 21 2022 9:00AM",
    state: "LOADED",
  },
};

export const Importing = Template.bind({});
Importing.args = {
  bidTypes: {
    ...Default.args.bidTypes,
    state: "IMPORTING",
  },
};
