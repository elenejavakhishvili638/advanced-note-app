import React from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route, Navigate } from 'react-router'
import NewNote from './pages/NewNote'

const App = () => {
  return (
    <Container className='my-4'>
      <Routes>
        <Route path="/" element={"/"}  />
        <Route path="/new-note" element={<NewNote/>} />
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
