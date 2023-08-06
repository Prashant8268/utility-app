import "./NoteList.css";
import { useSelector,useDispatch } from "react-redux";
import { DELETE_NOTE,handleRemove } from "../../redux/actions/noteActions";

function NoteList() {


  const {notes} = useSelector((store)=>store.notes);
  console.log(notes,'notes');

  const dispatch = useDispatch();

  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li key = {index} >
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger" onClick={()=>{dispatch(handleRemove(index))}} >Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
