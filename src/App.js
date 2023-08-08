import { Fragment } from "react";
import { Provider } from "react-redux";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import {store} from "./redux/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {

  const router= createBrowserRouter([
    {
      path: '/utility-app', element: <Home />

    },
    {
      path:'/utility-app/todo',element: <Fragment>
      <NavBar />
     <h1>To Dos</h1>
      <TodoForm  />
      <TodoList />
    </Fragment>
    },
    {
      path: '/utility-app/notes',element:<Fragment>
      <NavBar />
      <h1>Notes</h1>
     <NoteForm  />
     <NoteList />
   </Fragment>

    }

  ])


  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />

      </Provider>
    </div>
  );
}

export default App;
