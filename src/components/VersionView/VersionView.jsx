import React from "react";
import PropTypes from "prop-types";

/**
 * View component that displays the version.
 */

export function VersionView({ current }) {
  return (
    <div className="col-xs-6 col-lg-4 text-center">
      <h1 className="display-3">{current}</h1>
      <p className="text-muted">Version</p>
    </div>
  );
}

VersionView.propTypes = {
  current: PropTypes.string,
};
