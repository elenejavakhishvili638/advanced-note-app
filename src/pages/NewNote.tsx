import React from 'react'
import NoteForm from '../components/NoteForm'
import "./newNote.css"

const NewNote: React.FC = () => {
  return (
    <>
      <h1 className='mb-4'>New Note</h1>
      <NoteForm onSubmit={""} />
    </>
  )
}

export default NewNote