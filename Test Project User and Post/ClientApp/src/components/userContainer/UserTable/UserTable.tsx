import React, { useEffect } from 'react'
import { Button, Spinner, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '../../../hooks/useTypedSelector';
import { SetCurrentUpdateUser } from '../../../store/actions/userAction';
import { fetchUsers } from '../../../store/effects/userEffect';
import { UserDTO } from '../../../types/DTOs/UserDTOs/UserDTO';
import { ModalOpen } from '../UserContainer';
import styles from './UserTable.module.css';

interface PostTableProps {
    handleClose: (modelType: keyof ModalOpen) => void;
}
const UserTable = (props:PostTableProps) => {
    let navigate = useNavigate();
    const { users, loading } = useTypedSelector(state => state.user)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const clickViewHandle = (id: number) => {
        navigate(`../user/${id}`);
    }
    const clickDeleteHandle = (user: UserDTO) => {
        dispatch(SetCurrentUpdateUser(user));
        props.handleClose("delete")
    }

    if (loading) {
        return <Spinner className={styles.spinner} animation="border" variant="primary" />
    }
    return (
        <Table className="mt-4" striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody >
                {users.map((user) =>
                (
                    <tr>
                        <td>{user.fullName}</td>
                        <td>{user.username}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td className='d-flex'>
                            <Button variant="primary" onClick={(event) => clickViewHandle(user.id)}>View</Button>
                            <Button variant="danger" onClick={(event) => clickDeleteHandle(user)}>Delete</Button>
                        </td>
                    </tr>
                ))}

                {users.length == 0 && <td align="center" colSpan={4}>No Data</td>}

            </tbody>
        </Table>
    );
}

export default UserTable