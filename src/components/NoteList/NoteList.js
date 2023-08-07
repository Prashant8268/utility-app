import "./NoteList.css";
import { useSelector,useDispatch } from "react-redux";
import { actions, noteSelector } from "../../redux/reducers/notoReducer";

function NoteList() {


  // const notes = useSelector((store)=>{
  //   return store.noteReducer.notes
  // });

  const notes = useSelector(noteSelector);
  const dispatch = useDispatch();

  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li key = {index} >
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger" onClick={()=>{dispatch(actions.remove(index))}} >Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
