import { combineReducers } from "redux";
import FiltersReducer from "./filters_reducer";

const uiReducer = combineReducers({
    filters: FiltersReducer
});

export default uiReducer;