import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import TrailsReducer from "./trails_reducer";
import UserDetailsReducer from "./user_details_reducer";

const EntitiesReducer = combineReducers({
    users: UsersReducer, 
    userDetails: UserDetailsReducer,
    trails: TrailsReducer
});

export default EntitiesReducer;