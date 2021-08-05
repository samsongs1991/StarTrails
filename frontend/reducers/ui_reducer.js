import { combineReducers } from "redux";
import FiltersReducer from "./filters_reducer";

const uiReducer = combineReducers({
    filter: FiltersReducer
});

export default uiReducer;