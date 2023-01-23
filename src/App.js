import NoteList from "./componets/noteList";
import {useEffect, useState} from "react";
import {nanoid} from 'nanoid';
import Search from "./componets/search";
import Header from "./componets/header";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('react-notes-app-data')) ||
    [{
      id: nanoid(),
      text: "This is the first note",
      date : "13/12/2022"
    },
    {
      id: nanoid(),
      text: "This is the second note",
      date : "13/12/2022"
    },{
      id: nanoid(),
      text: "This is the third note",
      date : "13/12/2022"
    },
    {
      id: nanoid(),
      text: "This is the forth note",
      date : "13/12/2022"
    }
  ])
  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data', 
      JSON.stringify(notes)
      );
  } , [notes])

  const addNewNote = (text) => {
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id)
    setNotes(newNote)
  }

  const handleSetSearchText = (text) => {
    setSearchText(text)
  }

 

  return (
    <div className = {`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header
      handleToggleDarkMode = {setDarkMode}
      />
      <Search
      handleSetSearchText = {handleSetSearchText}
      />
      <NoteList 
      notes = {notes.filter((note)=> note.text.toLowerCase().includes(searchText))} 
      addNewNote = {addNewNote} 
      deleteNote = {deleteNote}
      />
      </div>
    </div>
  );
}

export default App;
