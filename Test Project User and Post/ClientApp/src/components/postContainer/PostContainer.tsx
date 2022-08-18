import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import CreatePost from './modal/createModal/CreatePost';
import DeleteModal from './modal/deleteModal/DeleteModal';
import UpdatePostModel from './modal/updateModal/UpdatePostModel';
import PostTable from './PostTable/PostTable'
export interface ModalOpen {
    create: false,
    update: false,
    delete: false
}
const PostContainer = () => {
    const [modalShow, setModalShow] = useState<ModalOpen>({
        create: false,
        update: false,
        delete: false,
    });

    const handleClose = (modelType: keyof ModalOpen) => setModalShow((modalOpen: ModalOpen) => {
        return ({
            create: false,
            delete: false,
            update: false,
            [modelType]: !modalOpen[modelType]
        })
    })


    return (
        <div>
            <Button variant="primary" onClick={() => handleClose('create')}>Create post</Button>
            <PostTable handleClose={handleClose}/>
            <CreatePost show={modalShow?.create} handleClose={() => handleClose('create')} />
            <UpdatePostModel show={modalShow?.update} handleClose={() => handleClose('update')} />
            <DeleteModal show={modalShow?.delete} handleClose={() => handleClose('delete')} />
        </div>
    )
}

export default PostContainer