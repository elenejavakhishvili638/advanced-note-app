import { NoteData } from "./noteTypes"

export type NoteFormProps = {
    onSubmit: (data: NoteData) => void
}