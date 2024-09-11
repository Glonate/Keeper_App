import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import NoteItem from './NoteItem';
import CreateNoteArea from './CreateNote';
import './App.css';


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateNoteArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <NoteItem
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
