import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Store from "../redux/Store";
import Index from "./components/Index";

ReactDOM.render(
	<Provider store={Store}>
		<Index />
	</Provider>, document.getElementById("app"));