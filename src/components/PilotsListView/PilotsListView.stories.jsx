import React from "react";
import { PilotsListView } from "./PilotsListView";

export default {
  title: "ViewComponents/PilotsListView",
  component: PilotsListView,
};

const Template = (args) => <PilotsListView {...args} />;
export const Default = Template.bind({});

Default.args = {
  pilots: [
    {
      key: "1",
      photoPath: "john-smith.jpeg",
      name: "John Smith",
      planeInfo: "CPT 737 GEG",
      location: "Riviera State 32/106",
    },
    /* {
      key: "2",
      photoPath: "alex-johnathan.jpeg",
      name: "Alex Johnatan",
      planeInfo: "CPT 737 GEG",
      location: "Riviera State 32/106",
      address: {
        name: "Twitter, Inc.",
        streetAddress: "795 Folsom Ave, Suite 600",
        cityStateZip: "San Francisco, CA 94107",
        phone: "(123) 456-7890",
      },
    },
    {
      key: "3",
      photoPath: "monica-smith.jpeg",
      name: "Monica Smith",
      planeInfo: "CPT 737 GEG",
      location: "Riviera State 32/106",
      address: {
        name: "Twitter, Inc.",
        streetAddress: "795 Folsom Ave, Suite 600",
        cityStateZip: "San Francisco, CA 94107",
        phone: "(123) 456-7890",
      },
    }, */
  ],
};
