import React from 'react'
import { Badge, Button, Col, Row, Stack } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { Link, useNavigate } from 'react-router-dom'
import { useNote } from '../pages/NoteLayout'
import { NoteProps } from '../types/propsTypes'

const Note = ({ onDelete }: NoteProps) => {
    const note = useNote()
    const navigate = useNavigate()

    const { title, tags, id, markdown } = note

    return (
        <>
            <Row className='align-items-center mb-4'>
                <Col>
                    <h1>{title}</h1>
                    {tags.length > 0 && (
                        <Stack gap={1} direction="horizontal" className="flex-wrap" >
                            {tags.map((tag) => (
                                <Badge key={tag.id} className='text-truncate'>
                                    {tag.label}
                                </Badge>
                            ))}
                        </Stack>
                    )}
                </Col>
                <Col xs="auto">
                    <Stack gap={2} direction="horizontal">
                        <Link to={`/${id}/edit-note`}>
                            <Button variant='warning'>
                                Edit
                            </Button>
                        </Link>
                        <Button variant='outline-danger' onClick={() => {
                            onDelete(id)
                            navigate("/")
                        }}>
                            Delete
                        </Button>
                        <Link to="/">
                            <Button variant='outline-secondary'>
                                Back
                            </Button>
                        </Link>
                    </Stack>
                </Col>
            </Row>
            <ReactMarkdown>
                {markdown}
            </ReactMarkdown>
        </>
    )
}

export default Note