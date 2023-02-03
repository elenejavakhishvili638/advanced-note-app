import React, { useMemo } from 'react'
import { Container } from 'react-bootstrap'
import { v4 as uuidv4 } from "uuid";
import { Routes, Route, Navigate } from 'react-router'
import NewNote from './pages/NewNote'
import { Tag, RawNote, NoteData } from './types/noteTypes'
import { useLocalStorage } from './hooks/useLocalStorageHook'
import NoteList from './pages/NoteList';
import NoteLayout from './pages/NoteLayout';
import Note from './components/Note';
import EditNote from './components/EditNote';

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

  const updateNote = (id: string, { tags, ...data }: NoteData) => {
    setNotes(prevNotes => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: tags.map((tag) => tag.id) }
        } else {
          return note
        }
      })
    })
  }

  const deleteNote = (id: string) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id)
    })
  }

  const updateTag = (id: string, label: string) => {
    setTags(prevTags => {
      return prevTags.map((tag) => {
        if (tag.id === id) {
          return { ...tag, label }
        } else {
          return tag
        }
      })
    })
  }

  const deleteTag = (id: string) => {
    setTags((prevTags) => {
      return prevTags.filter((tag) => tag.id !== id)
    })
  }

  return (
    <Container className='my-4'>
      <Routes>
        <Route path="/" element={<NoteList notes={notesWithTags} availableTags={tags} updateTag={updateTag} deleteTag={deleteTag} />} />
        <Route path="/new-note" element={<NewNote onSubmit={createNote} onAddTag={addTag} availableTags={tags} />} />
        <Route path=":id" element={<NoteLayout notes={notesWithTags} />}>
          <Route index element={<Note onDelete={deleteNote} />} />
          <Route path="edit-note" element={<EditNote onSubmit={updateNote} onAddTag={addTag} availableTags={tags} />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App
