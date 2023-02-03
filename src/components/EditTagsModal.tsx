import React from 'react'
import { Button, Col, Form, Modal, Row, Stack } from 'react-bootstrap'
import { editTagsModalProps } from '../types/propsTypes'

const EditTagsModal = ({ availableTags, show, handleClose, updateTag, deleteTag }: editTagsModalProps) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Edit Tags
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Stack gap={2}>
                        {availableTags.map((tag) => (
                            <Row key={tag.id}>
                                <Col>
                                    <Form.Control type="text" value={tag.label} onChange={(event) => updateTag(tag.id, event.target.value)} />
                                </Col>
                                <Col xs="auto">
                                    <Button variant='outline-danger' onClick={() => { deleteTag(tag.id) }}>&times;</Button>
                                </Col>
                            </Row>
                        ))}
                    </Stack>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default EditTagsModal