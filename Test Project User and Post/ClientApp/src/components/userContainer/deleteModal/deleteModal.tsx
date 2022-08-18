import React from 'react'
import { Modal } from 'react-bootstrap';
import DeleteUserForm from './DeleteUserForm';


interface DeleteUserModalProps {
    show: boolean|undefined;
    handleClose:()=>void
}

const DeleteUserModal = (props: DeleteUserModalProps) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DeleteUserForm  handleClose={props.handleClose}/>
            </Modal.Body>      
        </Modal>
    )
}

export default DeleteUserModal