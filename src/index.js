import React from "react";
import { render } from "react-dom";

function Test() {
    return <p>This is a test</p>
}

render(<Test />, document.getElementById("app"))