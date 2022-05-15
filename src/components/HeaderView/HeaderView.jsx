import React from "react";

/**
 * View component that displays the header for the site.
 */

export function HeaderView({ logo, navbar }) {
  return (
    <nav className="navbar navbar-expand-lg bidpro-color d-flex py-0">
      {logo}
      <div className="container-fluid me-2">{navbar}</div>
    </nav>
  );
}
