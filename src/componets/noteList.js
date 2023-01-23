import Note from "./note"
import AddNotes from "./addNote"
const NoteList = ({notes, addNewNote, deleteNote}) => {
    return(
        <div className="note-list">
           {notes.map((note) => <Note key =  {note.id} id = {note.id} note = {note.text} date = {note.date} deleteNote = {deleteNote}/>)}
           <AddNotes addNewNote = {addNewNote}/>
        </div>
    )
}
export default NoteList