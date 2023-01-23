import {MdDeleteForever} from "react-icons/md"
const Note = ({id,note, date, deleteNote}) => {
    return(
    <div className="note" key={id}>   
       <span>{note}</span> 
       <div className="note-footer">
        <small className="date">{date}</small>
        <MdDeleteForever className="delete" size="1.3em" onClick={() => deleteNote(id)}/>
       </div>
    </div>
    )
}

export default Note