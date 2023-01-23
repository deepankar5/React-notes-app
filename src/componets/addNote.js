import {useState} from "react"
const AddNotes = ({addNewNote}) => {
    const [noteText, setNoteText] = useState("")
    const characterLenghtLimit = 200

    const handleChange = (event) => {
        if(event.target.value.length <= characterLenghtLimit){
            setNoteText(event.target.value)
        }
    }

    const handleClick = () => {
       addNewNote(noteText)
       setNoteText('')
    }
    return(
        <div className="note new">
            <textarea rows="8" 
            col="11"
            placeholder="Add a new note...."
            onChange={handleChange}
            value = {noteText}
            ></textarea>
            <div className="note-footer">
                <small>{characterLenghtLimit - noteText.length} character remaining</small>
                <button className="save" onClick={handleClick} >Save</button>
            </div>
        </div>
    )
}

export default AddNotes