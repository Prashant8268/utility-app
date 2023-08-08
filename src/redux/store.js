
import {todoReducer} from "./reducers/todoReducer";
import {noteReducer} from "./reducers/notoReducer";
import { configureStore } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notificationReducer";


export const store = configureStore({
    reducer:{
        todoReducer,
        noteReducer,
        notificationReducer
        

    }
})