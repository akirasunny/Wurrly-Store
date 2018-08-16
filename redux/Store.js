import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import Reducer from "./Reducer";

export default createStore(Reducer, applyMiddleware(thunkMiddleware));