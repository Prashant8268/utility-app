import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/actions/todoActions";
import { actions, setInitialStateAsync, todoSelector } from "../../redux/reducers/todoReducer";
import { useEffect } from "react";
import axios from "axios";

import "./ToDoList.css";
import { json } from "react-router-dom";
import { daysInWeek } from "date-fns";

function ToDoList() {

  // const todos = useSelector((state)=>{
  //   return state.todoReducer.todos;
  // });
  // we can use below code instead of above 
  const   todos = useSelector(todoSelector)

  const dispatch = useDispatch();
  // const todos= store.getState().todos;

  useEffect(()=>{
    // fetch('http://localhost:4100/api/todos/')
    // .then(data=>data.json())
    // .then(parsedJson=>{
    //   console.log(parsedJson);   
    // }
    // axios.get('http://localhost:4100/api/todos/')
    // .then(res=>{
    //   console.log(res.data);
    //   dispatch(actions.setInitialState(res.data));
    // })
    dispatch(setInitialStateAsync());
  },[])



  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{dispatch(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;