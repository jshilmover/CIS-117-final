import React from "react";

/**
 * View component that displays a jumbotron
 */

export function JumbotronView({administrationView, versionView}) {
  return (
    <div className="jumbotron mt-3">
      <section className="row">
          {administrationView}
          {versionView}
      </section>
    </div>
  );
}
