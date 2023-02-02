import React from 'react'
import {Form, Row, Button, Stack} from "react-bootstrap"
import {Link} from "react-router-dom"
import "./noteForm.css"
import CreatableReactSelect from "react-select/creatable"

const NoteForm = () => {
  return (
    <Form as={Row} className="row">
        <Form.Group className='child mb-3' controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" required placeholder="Please enter the title" />
        </Form.Group>
        <Form.Group className='child mb-3' controlId="Tags">
            <Form.Label>Tags</Form.Label>
            <CreatableReactSelect isMulti/>
        </Form.Group>
        <Form.Group controlId="markdown" className='mb-3'> 
            <Form.Label>Body</Form.Label>
            <Form.Control required as="textarea" rows={15}></Form.Control>
        </Form.Group>
        <Stack direction='horizontal' gap={2} className="button-container">
            <Button type='submit' variant='success'>Save</Button>
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