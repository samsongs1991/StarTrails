import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import TrailsReducer from "./trails_reducer";

const EntitiesReducer = combineReducers({
    users: UsersReducer, 
    trails: TrailsReducer
});

export default EntitiesReducer;