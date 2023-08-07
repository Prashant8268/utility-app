import * as redux from 'redux';

import { ADD_NOTE,DELETE_NOTE } from '../actions/noteActions';
import { createSlice } from '@reduxjs/toolkit';




const initialState = {
    notes:[]
}


const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        add:(state,action)=>{
            state.notes.push({
                text:action.payload,
                createdOn: new Date()
            })
        },
        remove:(state ,action)=>{
            state.notes.splice(action.payload,1);
        }
    }

})


export const noteReducer = noteSlice.reducer;

export const actions = noteSlice.actions;

export const noteSelector = (state)=>state.noteReducer.notes;



//  function noteReducer(state=initialState,action){

//     switch(action.type){
//         case ADD_NOTE:

//             return {
//                 notes:[...state.notes,{
//                     text:action.text,
//                     createdOn: new Date()
//                 }]
//             }
//         case DELETE_NOTE:
//             const oldNotes = [...state.notes];
//             oldNotes.splice(action.index,1);
//             return{
//                 ...state,
//                 notes:oldNotes
                
//             }
//         default:
//             return state;
//     }

// }

// export default noteReducer;