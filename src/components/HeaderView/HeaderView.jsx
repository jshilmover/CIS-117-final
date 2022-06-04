import React from "react";
import { NavBarView } from "../NavBarView/NavBarView";
import { LogoView } from "../LogoView/LogoView";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

/**
 * View component that displays the header for the site.
 */

export function HeaderView() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="bidpro-color">
        <Navbar.Brand>
          <LogoView />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-menu" />
        <Navbar.Collapse id="navbar-menu" className="justify-content-end">
          <Nav>
            <NavBarView
              menus={[
                {
                  airlineName: "American Airlines",
                  bidTypesPath: "/american-airlines/bidtypes",
                  id: "1",
                  pilotsPath: "american-airlines/pilots",
                },
                {
                  airlineName: "Alaska Airlines",
                  bidTypesPath: "/alaska-airlines/bidtypes",
                  id: "2",
                  pilotsPath: "alaska-airlines/pilots",
                },
                {
                  airlineName: "Frontier Airlines",
                  bidTypesPath: "/frontier-airlines/bidtypes",
                  id: "3",
                  pilotsPath: "frontier-airlines/pilots",
                },
                {
                  airlineName: "UPS",
                  bidTypesPath: "/ups/bidtypes",
                  id: "4",
                  pilotsPath: "ups/pilots",
                },
              ]}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
