import React from 'react'
import { Modal } from 'react-bootstrap';
import UpdatePostForm from './UpdatePostForm';
interface UpdatePostProps {
    show: boolean|undefined;
    handleClose:()=>void
}
const UpdatePostModel = (props: UpdatePostProps) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UpdatePostForm  handleClose={props.handleClose}/>
            </Modal.Body>      
        </Modal>
    )
}
export default UpdatePostModel