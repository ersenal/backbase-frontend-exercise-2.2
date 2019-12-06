import React from "react";
import ReactDom from "react-dom";

// NOTE(ersenal): We import the global styling before importing any other first party component
import "./index.scss";
import App from "./containers/App";

ReactDom.render(React.createElement(App), document.getElementById("main"));
