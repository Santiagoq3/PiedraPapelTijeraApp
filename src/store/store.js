import { combineReducers, createStore } from "../../../../journalapp/journal-app/node_modules/redux";
import { gameReducer } from "../reducers/gameReducer";
import { pcReducer } from "../reducers/pcReducer";
import { scoreReducer } from "../reducers/scoreReducer";
import { userReducer } from "../reducers/userReducer";


const reducers = combineReducers({

    user: userReducer,
    pc: pcReducer,
    game: gameReducer,
    score: scoreReducer


})



export const store = (createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))