import { combineReducers } from "redux";

import indexSwitch from "./switch/indexSwitch";
import royaltiesSwitch from "./switch/royaltiesSwitch";

export default combineReducers({ indexSwitch, royaltiesSwitch });