import { Hello } from './components/Hello';
import * as React from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(<Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
