import React from "react";
import { BidTypeListView } from "../../components/BidTypeListView/BidTypeListView";

const AABidTypesPage = () => (
  <div className="container">
    <h2>Bid Types</h2>
    <hr />
    <BidTypeListView
      bids={[
        {
          bidPeriods: "1",
          bidType: "CAPTAIN ANC 73G",
          id: "1",
          lastImport: "May 21 2022 9:00AM",
          state: "LOADED",
        },
        {
          bidPeriods: "1",
          bidType: "CAPTAIN LAX 73G",
          id: "2",
          lastImport: "May 21 2022 9:00AM",
          state: "LOADED",
        },
        {
          bidPeriods: "1",
          bidType: "CAPTAIN PDX 73G",
          id: "3",
          lastImport: "May 21 2022 9:00AM",
          state: "LOADED",
        },
        {
          bidPeriods: "1",
          bidType: "CAPTAIN SEA 73G",
          id: "4",
          lastImport: "May 21 2022 9:00AM",
          state: "LOADED",
        },
        {
          bidPeriods: "1",
          bidType: "FIRST OFFICER ANC 73G",
          id: "5",
          lastImport: "May 21 2022 9:00AM",
          state: "LOADED",
        },
        {
          bidPeriods: "1",
          bidType: "FIRST OFFICER LAX 73G",
          id: "6",
          lastImport: "May 21 2022 9:00AM",
          state: "LOADED",
        },
      ]}
    />
  </div>
);


export default AABidTypesPage;
