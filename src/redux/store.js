
// const redux = require("redux");

import * as redux from "redux";
import {todoReducer} from "./reducers/todoReducer";
import noteReducer from "./reducers/notoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todos: todoReducer,
    notes: noteReducer
});

export const store = redux.createStore(rootReducer);

