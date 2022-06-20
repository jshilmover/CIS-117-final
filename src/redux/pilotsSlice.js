import { createSlice } from "@reduxjs/toolkit";

//uses immer library for immutability
export const pilotsSlice = createSlice({
  name: "pilot",
  initialState: {
    pilots: [
      {
        id: 1,
        airline: "AA",
        firstName: "John",
        lastName: "Smith",
        fleet: "737",
        seat: "CPT",
        domicile: "GEG",
        trainingFacility: "Riviera State 32/106",
        company: "American Airlines",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
      },
      {
        id: 2,
        airline: "AA",
        firstName: "Alex",
        lastName: "Johnatan",
        fleet: "737",
        seat: "CPT",
        domicile: "GEG",
        trainingFacility: "Riviera State 32/106",
        company: "American Airlines",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
      },
      {
        id: 3,
        airline: "AA",
        firstName: "Monica",
        lastName: "Smith",
        fleet: "737",
        seat: "CPT",
        domicile: "GEG",
        trainingFacility: "Riviera State 32/106",
        company: "American Airlines",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
      },
      {
        id: 4,
        airline: "AA",
        firstName: "Michael",
        lastName: "Zimber",
        fleet: "737",
        seat: "FO",
        domicile: "GEG",
        trainingFacility: "Riviera State 32/106",
        company: "American Airlines",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
      },
      {
        id: 5,
        airline: "AA",
        firstName: "Sandra",
        lastName: "Smith",
        fleet: "737",
        seat: "FO",
        domicile: "GEG",
        trainingFacility: "Riviera State 32/106",
        company: "American Airlines",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
      },
      {
        id: 6,
        airline: "AA",
        firstName: "Janet",
        lastName: "Carton",
        fleet: "737",
        seat: "FO",
        domicile: "GEG",
        trainingFacility: "Riviera State 32/106",
        company: "American Airlines",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
      },
      {
        id: 7,
        airline: "AS",
        firstName: "Roger",
        lastName: "Blinker",
        fleet: "737",
        seat: "CPT",
        domicile: "GEG",
        trainingFacility: "Riviera State 32/106",
        company: "Alaska Airlines",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
      },
      {
        id: 8,
        airline: "AS",
        firstName: "Anthony",
        lastName: "Rogers",
        fleet: "737",
        seat: "CPT",
        domicile: "GEG",
        trainingFacility: "Riviera State 32/106",
        company: "Alaska Airlines",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
      },
      {
        id: 9,
        airline: "AS",
        firstName: "Bobby",
        lastName: "Tables",
        fleet: "737",
        seat: "FO",
        domicile: "GEG",
        trainingFacility: "Riviera State 32/106",
        company: "Alaska Airlines",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
      },
      {
        id: 10,
        airline: "AS",
        firstName: "Sam",
        lastName: "Samson",
        fleet: "737",
        seat: "CPT",
        domicile: "GEG",
        trainingFacility: "Riviera State 32/106",
        company: "Alaska Airlines",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
      },
      {
        id: 11,
        airline: "AS",
        firstName: "George",
        lastName: "Curiosity",
        fleet: "737",
        seat: "CPT",
        domicile: "GEG",
        trainingFacility: "Riviera State 32/106",
        company: "Alaska Airlines",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
      },
      {
        id: 12,
        airline: "FA",
        firstName: "Smudge",
        lastName: "Smudgeson",
        fleet: "737",
        seat: "CPT",
        domicile: "GEG",
        trainingFacility: "Riviera State 32/106",
        company: "Frontier Airlines",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
      },
      {
        id: 13,
        airline: "FA",
        firstName: "Dustin",
        lastName: "Sanders",
        fleet: "737",
        seat: "FO",
        domicile: "GEG",
        trainingFacility: "Riviera State 32/106",
        company: "Frontier Airlines",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
      },
      {
        id: 14,
        airline: "FA",
        firstName: "Cranklin",
        lastName: "Reallastname",
        fleet: "737",
        seat: "FO",
        domicile: "GEG",
        trainingFacility: "Riviera State 32/106",
        company: "Frontier Airlines",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
      },
      {
        id: 15,
        airline: "FA",
        firstName: "North",
        lastName: "Southerland",
        fleet: "737",
        seat: "CPT",
        domicile: "GEG",
        trainingFacility: "Riviera State 32/106",
        company: "Frontier Airlines",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
      },
      {
        id: 16,
        airline: "UP",
        firstName: "Donald",
        lastName: "Duck",
        fleet: "737",
        seat: "CPT",
        domicile: "GEG",
        trainingFacility: "Riviera State 32/106",
        company: "UPS",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
      },
      {
        id: 17,
        airline: "UP",
        firstName: "Marty",
        lastName: "McFly",
        fleet: "737",
        seat: "FO",
        domicile: "GEG",
        trainingFacility: "Riviera State 32/106",
        company: "UPS",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
      },
      {
        id: 18,
        airline: "UP",
        firstName: "Dark",
        lastName: "Mage",
        fleet: "737",
        seat: "CPT",
        domicile: "GEG",
        trainingFacility: "Riviera State 32/106",
        company: "UPS",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
      },
    ],
  },
  reducers: {
    addPilot: (state, addition) => {
      const index = state.pilots.length;
      addition.payload = { ...addition.payload, id: index + 1 };
      state.pilots.push(addition.payload);
    },
    editPilot: (state, addition) => {
      const index = state.pilots.findIndex(
        (pilot) => pilot.id == addition.payload.id
      );
      state.pilots[index] = addition.payload;
    },
    deletePilot: (state, addition) => {
      const index = state.pilots.findIndex(
        (pilot) => pilot.id == addition.payload.id
      );
      state.pilots.splice(index, 1);
    },
  },
});

export const selectPilots = (state) => state.pilots.pilots;
export const { addPilot, editPilot, deletePilot } = pilotsSlice.actions;

export default pilotsSlice.reducer;
