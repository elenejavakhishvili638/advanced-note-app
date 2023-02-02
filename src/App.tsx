import React, { useMemo } from 'react'
import { Container } from 'react-bootstrap'
import { v4 as uuidv4 } from "uuid";
import { Routes, Route, Navigate } from 'react-router'
import NewNote from './pages/NewNote'
import { Tag, RawNote, NoteData } from './types/noteTypes'
import { useLocalStorage } from './hooks/useLocalStorageHook'
import NoteList from './pages/NoteList';

const App: React.FC = () => {

  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return { ...note, tags: tags.filter((tag) => note.tagIds.includes(tag.id)) }
    })
  }, [notes, tags])

  const createNote = ({ tags, ...data }: NoteData) => {
    setNotes(prevNotes => {
      return [...prevNotes, { ...data, id: uuidv4(), tagIds: tags.map((tag) => tag.id) }]
    })
  }

  const addTag = (tag: Tag) => {
    setTags((prevtags) => [...prevtags, tag])
  }

  return (
    <Container className='my-4'>
      <Routes>
        <Route path="/" element={<NoteList availableTags={tags} />} />
        <Route path="/new-note" element={<NewNote onSubmit={createNote} onAddTag={addTag} availableTags={tags} />} />
        <Route path=":id">
          <Route index element={"Note"} />
          <Route path="edit-note" element={"Edit"} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App
