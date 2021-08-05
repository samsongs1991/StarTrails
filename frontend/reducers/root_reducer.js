import { combineReducers } from "redux";
import EntitiesReducer from "./entities_reducer";
import SessionReducer from "./session_reducer";
import uiReducer from "./ui_reducer";
import ErrorsReducer from "./errors_reducer";

const RootReducer = combineReducers({
    entities: EntitiesReducer, 
    session: SessionReducer, 
    ui: uiReducer, 
    errors: ErrorsReducer
});

export default RootReducer;