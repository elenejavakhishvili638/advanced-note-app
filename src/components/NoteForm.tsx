import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import { Form, Button, Stack } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import "./noteForm.css"
import CreatableReactSelect from "react-select/creatable"
import { NoteFormProps } from '../types/propsTypes'
import { Tag } from '../types/noteTypes'

const NoteForm: React.FC<NoteFormProps> = ({ onSubmit, onAddTag, availableTags }) => {

    // const [title, setTitle] = useState<HTMLInputElement>()
    // const [body, setBody] = useState<HTMLTextAreaElement>()
    const [tags, setTags] = useState<Tag[]>([])
    const titleRef = useRef<HTMLInputElement>(null)
    const bodyRef = useRef<HTMLTextAreaElement>(null)
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent) => {
        console.log("note")
        event.preventDefault()
        onSubmit({
            title: titleRef.current!.value,
            markdown: bodyRef.current!.value,
            tags: tags
        })
        navigate("..")
    }

    return (
        <Form className="row" onSubmit={handleSubmit}>
            <Form.Group className='child mb-3' controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control ref={titleRef} type="text" required placeholder="Please enter the title" />
            </Form.Group>
            <Form.Group className='child mb-3' controlId="Tags">
                <Form.Label>Tags</Form.Label>
                <CreatableReactSelect
                    onCreateOption={label => {
                        console.log("onCreate")
                        const newTag = { id: uuidv4(), label }
                        onAddTag(newTag)
                        setTags((prevTags) => [...prevTags, newTag])
                    }}
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
                    isMulti
                />
            </Form.Group>
            <Form.Group controlId="markdown" className='mb-3'>
                <Form.Label>Body</Form.Label>
                <Form.Control ref={bodyRef} required as="textarea" rows={15}></Form.Control>
            </Form.Group>
            <Stack direction='horizontal' gap={2} className="button-container">
                <Button type="submit" variant='success'>Save</Button>
                <Link to="..">
                    <Button type='button' variant='outline-danger'>Cancel</Button>
                </Link>
            </Stack>
        </Form>
    )
}

export default NoteForm




// <Form>
//     <Stack>
//         <Row>
//             <Col>
//                 <Form.Group>
//                     <Form.Label>Title</Form.Label>
//                     <Form.Control required type='text' placeholder='Please enter the title'></Form.Control>
//                 </Form.Group>
//             </Col>
//             <Col>
//                 <Form.Group>
//                     <Form.Label>Tags</Form.Label>
//                     <Form.Select required></Form.Select>
//                 </Form.Group>
//             </Col>
//         </Row>
//     </Stack>
// </Form>