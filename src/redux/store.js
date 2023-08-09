
import {todoReducer} from "./reducers/todoReducer";
import {noteReducer} from "./reducers/notoReducer";
import { configureStore } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notificationReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddlerwars";


export const store = configureStore({
    reducer:{
        todoReducer,
        noteReducer,
        notificationReducer
    },
    // leting store know to use middleware

    middleware:[loggerMiddleware]
})