import {combineReducers} from "redux";
import userRegisterReducer from "./reducers/userRegisterReducer";

const rootReducer = combineReducers({
    userRegister: userRegisterReducer,
})

export default rootReducer