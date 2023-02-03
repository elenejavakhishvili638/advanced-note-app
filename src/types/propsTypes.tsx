import { NoteData, Tag, Note, SimplifiedNote } from "./noteTypes"

export type NoteFormProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

export type NewNoteFormProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

export type NoteListProps = {
    availableTags: Tag[]
    notes: SimplifiedNote[]
}

export type NoteCardProps = {
    id: string
    title: string
    tags: Tag[]
}

export type NoteLayoutProps = {
    notes: Note[]
}