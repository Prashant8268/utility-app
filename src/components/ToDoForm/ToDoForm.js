import { useState } from "react";
import { useDispatch } from "react-redux";
// import {addTodo} from "../../redux/actions/todoActions";

import { actions, todoReducer } from "../../redux/reducers/todoReducer";

import "./ToDoForm.css";
import { act } from "react-dom/test-utils";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.add(todoText));
    console.log(todoText,'yhha tk aa gya ');
    setTodoText("");

  };

  return (
    <div className="container">
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;