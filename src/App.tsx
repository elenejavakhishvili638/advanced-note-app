import React from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route, Navigate } from 'react-router'
import NewNote from './pages/NewNote'
import { Tag, RawNote } from './types/noteTypes'
import { useLocalStorage } from './hooks/useLocalStorageHook'

const App: React.FC = () => {

  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

  return (
    <Container className='my-4'>
      <Routes>
        <Route path="/" element={"/"} />
        <Route path="/new-note" element={<NewNote />} />
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
