import { createSlice } from "@reduxjs/toolkit"
import{createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
import { act } from "react-dom/test-utils"

const initialState={
    todos:[
    ]
}


export const setInitialStateAsync = createAsyncThunk('todo/setInitialState',
 ()=>{
    // axios.get('http://localhost:4100/api/todos/')
    // .then(res=>{
    //   console.log(res.data);
    // //   disptach(actions.setInitialState(res.data));
    // thunkAPI.dispatch(actions.setInitialState(res.data));
    // })
    return axios.get('http://localhost:4100/api/todos');
})


export const addTodoAsync = createAsyncThunk('todo/addTodo',async(payload)=>{
    
        const response = await  fetch('http://localhost:4100/api/todos',{
            method: "POST", 
            headers:{
                "content-type": "application/json"
            },
            body :  JSON.stringify({
                text:payload,
                completed:false
            })
            
        });

        return response.json(); 

})


// below is using redux-toolkit

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        setInitialState:(state,action)=>{
            state.todos= [...action.payload]
        }
        ,
        add:(state,action)=>{
            state.todos.push({
                text:action.payload,
                completed : false
            })
        },
        toggle:(state,action)=>{
            state.todos[action.payload].completed=!state.todos[action.payload].completed
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(setInitialStateAsync.fulfilled,(state,action)=>{

            state.todos= [...action.payload.data];

        })
        .addCase(addTodoAsync.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.todos.push(action.payload);

            
        })
    }
});


export const actions = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
export const todoSelector = (state)=>state.todoReducer.todos;







// this is using react -redux 
// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i==action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }