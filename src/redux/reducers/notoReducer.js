import * as redux from 'redux';

import { ADD_NOTE,DELETE_NOTE } from '../actions/noteActions';




const initialState = {
    notes:[]
}

 function noteReducer(state=initialState,action){

    switch(action.type){
        case ADD_NOTE:

            return {
                notes:[...state.notes,{
                    text:action.text,
                    createdOn: new Date()
                }]
            }
        case DELETE_NOTE:
            const oldNotes = [...state.notes];
            oldNotes.splice(action.index,1);
            return{
                ...state,
                notes:oldNotes
                
            }
        default:
            return state;
    }

}

export default noteReducer;