import React from 'react'
import { Modal } from 'react-bootstrap';
import CreatePostForm from './CreatForm';


interface CreatePostProps {
    show: boolean|undefined;
    handleClose:()=>void
}

const CreatePost = (props: CreatePostProps) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreatePostForm  handleClose={props.handleClose}/>
            </Modal.Body>      
        </Modal>
    )
}

export default CreatePost