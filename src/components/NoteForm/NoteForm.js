import { useState } from "react";
import "./NoteForm.css";
import { useSelector,useDispatch } from "react-redux";
import { actions } from "../../redux/reducers/notoReducer";

function NoteForm() {
  const [NoteText, setNoteText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.add(NoteText))
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
