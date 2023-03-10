import { NoteData, Tag, Note, SimplifiedNote } from "./noteTypes"

export type NoteFormProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
} & Partial<NoteData>

export type NewNoteFormProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

export type NoteListProps = {
    availableTags: Tag[]
    notes: SimplifiedNote[]
    updateTag: (id: string, label: string) => void
    deleteTag: (id: string) => void
}

export type NoteCardProps = {
    id: string
    title: string
    tags: Tag[]
}

export type NoteLayoutProps = {
    notes: Note[]
}

export type EditNoteFormProps = {
    onSubmit: (id: string, { tags, ...data }: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
    // onDelete: (id: string) => void
}


export type NoteProps = {
    onDelete: (id: string) => void
}

export type editTagsModalProps = {
    availableTags: Tag[]
    show: boolean
    handleClose: () => void
    updateTag: (id: string, label: string) => void
    deleteTag: (id: string) => void
}