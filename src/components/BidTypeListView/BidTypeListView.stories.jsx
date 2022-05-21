import React from "react";
import { BidTypeListView } from "./BidTypeListView";

export default {
  title: "ViewComponents/BidTypeListView",
  component: BidTypeListView,
};

const Template = (args) => <BidTypeListView {...args} />;

export const Default = Template.bind({});
Default.args = {
  bids: [
    {
      id: "1",
      bidType: "CAPTAIN ANC 73G",
      bidPeriods: "1",
      lastImport: "May 21 2022 9:00AM",
      state: "LOADED",
    },
    {
      id: "2",
      bidType: "CAPTAIN LAX 73G",
      bidPeriods: "1",
      lastImport: "May 21 2022 9:00AM",
      state: "LOADED",
    },
    {
      id: "3",
      bidType: "CAPTAIN PDX 73G",
      bidPeriods: "1",
      lastImport: "May 21 2022 9:00AM",
      state: "LOADED",
    },
    {
      id: "4",
      bidType: "CAPTAIN SEA 73G",
      bidPeriods: "1",
      lastImport: "May 21 2022 9:00AM",
      state: "LOADED",
    },
    {
      id: "5",
      bidType: "FIRST OFFICER ANC 73G",
      bidPeriods: "1",
      lastImport: "May 21 2022 9:00AM",
      state: "LOADED",
    },
    {
      id: "6",
      bidType: "FIRST OFFICER LAX 73G",
      bidPeriods: "1",
      lastImport: "May 21 2022 9:00AM",
      state: "LOADED",
    },
  ],
};

export const WithImporting = Template.bind({});
WithImporting.args = {
  bids: [
    {
      id: "1",
      bidType: "CAPTAIN ANC 73G",
      bidPeriods: "1",
      lastImport: "May 21 2022 9:00AM",
      state: "IMPORTING",
    },
    {
      id: "2",
      bidType: "CAPTAIN LAX 73G",
      bidPeriods: "1",
      lastImport: "May 21 2022 9:00AM",
      state: "IMPORTING",
    },
    ...Default.args.bids.slice(2, 6),
  ],
};
