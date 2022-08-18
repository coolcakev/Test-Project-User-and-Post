import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import CreateUser from './createModal.ts/CreateUser'
import DeleteUserModal from './deleteModal/deleteModal'
import UserTable from './UserTable/UserTable'
export interface ModalOpen {
    create: false,  
    delete: false
}
const UserContainer = () => {
    const [modalShow, setModalShow] = useState<ModalOpen>({
        create: false,      
        delete: false,
    });

    const handleClose = (modelType: keyof ModalOpen) => setModalShow((modalOpen: ModalOpen) => {
        return ({
            create: false,
            delete: false,            
            [modelType]: !modalOpen[modelType]
        })
    })
  
    return (
        <div>
            <Button variant="primary" onClick={()=>handleClose("create")}>Create user</Button>
            <UserTable handleClose={handleClose}/>
            <CreateUser show={modalShow.create} handleClose={()=>handleClose("create")}/>
            <DeleteUserModal show={modalShow.delete} handleClose={()=>handleClose("delete")}/>
        </div>
    )
}

export default UserContainer