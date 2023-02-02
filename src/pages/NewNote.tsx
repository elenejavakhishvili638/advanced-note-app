import React from 'react'
import NoteForm from '../components/NoteForm'
import { NoteFormProps, NewNoteFormProps } from '../types/propsTypes'
import "./newNote.css"

const NewNote: React.FC<NewNoteFormProps> = ({ onSubmit, onAddTag, availableTags }) => {
  return (
    <>
      <h1 className='mb-4'>New Note</h1>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
    </>
  )
}

export default NewNote