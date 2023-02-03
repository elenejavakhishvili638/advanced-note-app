import React from 'react'
import { Navigate, Outlet, useOutlet, useOutletContext, useParams } from 'react-router'
import { Note } from '../types/noteTypes'
import { NoteLayoutProps } from '../types/propsTypes'


const NoteLayout: React.FC<NoteLayoutProps> = ({ notes }) => {
    const { id } = useParams()
    const note = notes.find((foundNote) => foundNote.id === id)

    if (note == null) return <Navigate to="/" replace />
    return (
        <Outlet context={note} />
    )
}

//useoutletcontext is used inside of outlets or anyother routes that are inside of layout so we get all uinformation from context

export const useNote = () => {
    return useOutletContext<Note>()
}

export default NoteLayout
