import {combineReducers} from "redux";
import { userReducer } from "./userReducer";
import { themeReducer } from "./themeReducer";


//kreiranje glavnog reducera
    const rootReducer = combineReducers({
        user: userReducer,
        darkTheme: themeReducer,

    });

export default rootReducer;