import React from "react";
import { PilotsListView } from "../../components/PilotsListView/PilotsListView";
import { Link } from "react-router-dom";

const AAPilotsPage = () => (
  <div className="container">
    <div className="mb-4">
      <h3 className="pilot-text ps-0 ms-0">Pilots</h3>
      <Link className="link-unstyled" to="/">
        Home
      </Link>
      <span className="h6">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
      <span className="h6">App Views</span>
      <span className="h6">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
      <span className="h6">
        <strong className="active-contacts">Contacts</strong>
      </span>
    </div>
    <PilotsListView
      pilots={[
        {
          address: {
            cityStateZip: "San Francisco, CA 94107",
            name: "Twitter, Inc.",
            phone: "(123) 456-7890",
            streetAddress: "795 Folsom Ave, Suite 600",
          },
          id: "1",
          location: "Riviera State 32/106",
          name: "John Smith",
          photoPath: "../../john-smith.jpeg",
          planeInfo: "CPT 737 GEG",
        },
        {
          address: {
            cityStateZip: "San Francisco, CA 94107",
            name: "Twitter, Inc.",
            phone: "(123) 456-7890",
            streetAddress: "795 Folsom Ave, Suite 600",
          },
          id: "2",
          location: "Riviera State 32/106",
          name: "Alex Johnatan",
          photoPath: "../../alex-johnathan.jpeg",
          planeInfo: "CPT 737 GEG",
        },
        {
          address: {
            cityStateZip: "San Francisco, CA 94107",
            name: "Twitter, Inc.",
            phone: "(123) 456-7890",
            streetAddress: "795 Folsom Ave, Suite 600",
          },
          id: "3",
          location: "Riviera State 32/106",
          name: "Monica Smith",
          photoPath: "../../monica-smith.jpeg",
          planeInfo: "CPT 737 GEG",
        },
        {
          address: {
            cityStateZip: "San Francisco, CA 94107",
            name: "Twitter, Inc.",
            phone: "(123) 456-7890",
            streetAddress: "795 Folsom Ave, Suite 600",
          },
          id: "4",
          location: "Riviera State 32/106",
          name: "Michael Zimber",
          photoPath: "../../michael-zimber.jpeg",
          planeInfo: "FO 737 GEG",
        },
        {
          address: {
            cityStateZip: "San Francisco, CA 94107",
            name: "Twitter, Inc.",
            phone: "(123) 456-7890",
            streetAddress: "795 Folsom Ave, Suite 600",
          },
          id: "5",
          location: "Riviera State 32/106",
          name: "Sandra Smith",
          photoPath: "../../sandra-smith.jpeg",
          planeInfo: "FO 737 GEG",
        },
        {
          address: {
            cityStateZip: "San Francisco, CA 94107",
            name: "Twitter, Inc.",
            phone: "(123) 456-7890",
            streetAddress: "795 Folsom Ave, Suite 600",
          },
          id: "6",
          location: "Riviera State 32/106",
          name: "Janet Carton",
          photoPath: "../../janet-carton.jpeg",
          planeInfo: "FO 737 GEG",
        },
      ]}
    />
  </div>
);

export default AAPilotsPage;
