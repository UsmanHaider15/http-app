import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import * as Sentry from "@sentry/browser";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({
  dsn: "https://fb9eb9e78b9b47658e97db5490fc6e67@sentry.io/1878118"
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
