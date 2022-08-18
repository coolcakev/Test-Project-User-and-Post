import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import CreateForm from './Form';

interface CreateUserProps {
    show: boolean;
    handleClose:()=>void
}

const CreateUser = (props: CreateUserProps) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreateForm  handleClose={props.handleClose}/>
            </Modal.Body>      
        </Modal>
    )
}

export default CreateUser