import React from 'react'
import { Modal } from 'react-bootstrap';
import DeletePostForm from './DeletePostForm';

interface DeleteModalProps {
    show: boolean|undefined;
    handleClose:()=>void
}

const DeleteModal = (props: DeleteModalProps) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DeletePostForm  handleClose={props.handleClose}/>
            </Modal.Body>      
        </Modal>
    )
}

export default DeleteModal