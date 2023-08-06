import { useState } from "react";
import "./NoteForm.css";
import { ADD_NOTE ,handleAdd} from "../../redux/actions/noteActions";
import { useSelector,useDispatch } from "react-redux";

function NoteForm({ onCreateNote }) {
  const [NoteText, setNoteText] = useState("");
  const dispatch = useDispatch();

  

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('aagya')
    dispatch(handleAdd(NoteText))
    setNoteText("");
  };

  return (
    <div className="container">
      
    <form onSubmit={handleSubmit}>
      <textarea
      required
        type="text"
        className="form-control mb-3"
        value={NoteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Note</button>
    </form>
    </div>
  );
}

export default NoteForm;
