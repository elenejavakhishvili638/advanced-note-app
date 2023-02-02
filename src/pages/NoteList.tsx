import React, { useState } from 'react'
import { Link } from "react-router-dom"
import ReactSelect from "react-select/creatable"
import { Row, Col, Stack, Button, Form } from "react-bootstrap"
import "./noteList.css"
import { Tag } from '../types/noteTypes'
import { NoteListProps } from '../types/propsTypes'

const NoteList: React.FC<NoteListProps> = ({ availableTags }) => {

    const [tags, setTags] = useState<Tag[]>([])

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
                        <Button variant='outline-secondary'>
                            Edit Tags
                        </Button>
                    </Stack>
                </Col>
            </Row>
            <Form className='row'>
                <Form.Group className='child mb-3' controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" required placeholder="Please enter the title" />
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
        </>
    )
}

export default NoteList