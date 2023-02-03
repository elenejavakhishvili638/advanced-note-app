import React, { useMemo, useState } from 'react'
import { Link } from "react-router-dom"
import ReactSelect from "react-select/creatable"
import { Row, Col, Stack, Button, Form } from "react-bootstrap"
import "./noteList.css"
import { Tag } from '../types/noteTypes'
import { NoteListProps } from '../types/propsTypes'
import NoteCard from '../components/NoteCard'
import EditTagsModal from '../components/EditTagsModal'

const NoteList: React.FC<NoteListProps> = ({ availableTags, notes, updateTag, deleteTag }) => {

    const [tags, setTags] = useState<Tag[]>([])
    const [title, setTitle] = useState("")
    const [modalOpen, setModalOpen] = useState(false)

    const filteredNotes = useMemo(() => {
        return notes.filter(note => {
            return (title === "" || note.title.toLowerCase().includes(title.toLowerCase())) && (tags.length === 0 || tags.every(tag => note.tags.some(noteTag => noteTag.id === tag.id)))
        })
    }, [title, tags, notes])

    return (
        <>
            <Row className='mb-3'>
                <Col>
                    <h1>Notes</h1>
                </Col>
                <Col xs="auto" className='button-container'>
                    <Stack gap={2} direction="horizontal">
                        <Link to="/new-note">
                            <Button variant='success'>
                                Create
                            </Button>
                        </Link>
                        <Button onClick={() => setModalOpen(true)} variant='outline-secondary'>
                            Edit Tags
                        </Button>
                    </Stack>
                </Col>
            </Row>
            <Form className='row'>
                <Form.Group className='child mb-3' controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" required placeholder="Please enter the title" value={title} onChange={(event) => setTitle(event.target.value)
                    } />
                </Form.Group>
                <Form.Group className='child mb-3' controlId="Tags">
                    <Form.Label>Tags</Form.Label>
                    <ReactSelect
                        isMulti
                        options={availableTags.map((tag) => {
                            return { label: tag.label, value: tag.id }
                        })}
                        value={tags.map(tag => {
                            return { label: tag.label, value: tag.id }
                        })}
                        onChange={selectedTags => {
                            console.log("onChange")
                            setTags(selectedTags.map(selectedTag => {
                                return { label: selectedTag.label, id: selectedTag.value }
                            }))
                        }}
                    />
                </Form.Group>
            </Form>
            <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
                {filteredNotes.map(note => (
                    <Col key={note.id}>
                        <NoteCard id={note.id} title={note.title} tags={note.tags} />
                    </Col>
                ))}
            </Row>
            <EditTagsModal updateTag={updateTag} deleteTag={deleteTag} availableTags={availableTags} show={modalOpen} handleClose={() => setModalOpen(false)} />
        </>
    )
}

export default NoteList