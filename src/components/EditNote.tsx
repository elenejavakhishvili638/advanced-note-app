import React from 'react'
import { useNote } from '../pages/NoteLayout'
import { EditNoteFormProps } from '../types/propsTypes'
import NoteForm from './NoteForm'

const EditNote: React.FC<EditNoteFormProps> = ({ onSubmit, onAddTag, availableTags }) => {

    const note = useNote()

    return (
        <>
            <h1 className='mb-4'>Edit Note</h1>
            <NoteForm title={note.title} markdown={note.markdown} tags={note.tags} onSubmit={(data) => onSubmit(note.id, data)} onAddTag={onAddTag} availableTags={availableTags} />
        </>
    )
}

export default EditNote