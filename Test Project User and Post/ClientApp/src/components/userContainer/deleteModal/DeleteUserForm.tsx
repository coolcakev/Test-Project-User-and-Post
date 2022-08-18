import React from 'react'
import { Button } from 'react-bootstrap'
import { useAppDispatch, useTypedSelector } from '../../../hooks/useTypedSelector'
import { deleteUser } from '../../../store/effects/userEffect'

interface DeleteUserFormProps {
    handleClose: () => void
}
const DeleteUserForm = (props: DeleteUserFormProps) => {
    const currentUser = useTypedSelector(state => state.user.curentSelectedUser)
    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(deleteUser(currentUser?.id!));
        props.handleClose()
    }

    return (
        <div>
            <h2> Do you want to delete <strong>{currentUser?.fullName}</strong></h2>
            <Button type="button" onClick={handleClick}>Delete user</Button>
        </div>
    )
}

export default DeleteUserForm