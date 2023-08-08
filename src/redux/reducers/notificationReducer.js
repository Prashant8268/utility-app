import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./todoReducer";

const initialState  = {
    message: ""
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers:{
        reset:(state,action)=>{
            state.message=""
        }
    },
    // extraReducers:{
    //     'todo/add':(state,action)=>{
    //         state.message = "Todo is created ";  
    //     }
    // } below code is same as above but to avoid hard coding toto/add
    extraReducers:(builder)=>{

        builder.addCase(actions.add, (state)=>{
            state.message ="Todo is created"
        })

    }
    // extraReducers:{
    //     [actions.add]: (state,action)=>{
    //         state.message="Todo is created";
    //     }
    // }
})

export const notificationReducer = notificationSlice.reducer;
export const notificationSelector = (state)=>state.notificationReducer.message;
export const resetNotification = notificationSlice.actions.reset;

