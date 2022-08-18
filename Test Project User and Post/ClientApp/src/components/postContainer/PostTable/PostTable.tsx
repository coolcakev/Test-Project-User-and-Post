import React, { useEffect } from 'react'
import { Button, Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '../../../hooks/useTypedSelector';
import { SetCurrentUpdatePost } from '../../../store/actions/postAction';
import { fetchPosts } from '../../../store/effects/postEffect';
import { PostDTO } from '../../../types/DTOs/PostDTOs/PostDTO';
import { ModalOpen } from '../PostContainer';
import styles from './PostTable.module.css'
interface PostTableProps {
    handleClose: (modelType: keyof ModalOpen) => void;
}
const PostTable = (props:PostTableProps) => {
    let navigate = useNavigate();
    const { posts, loading } = useTypedSelector(state => state.post)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    const clickViewHandle = (id: number) => {
        navigate(`../post/${id}`);
    }
    const clickUpdateHandle = (post: PostDTO) => {
        dispatch(SetCurrentUpdatePost(post))
        props.handleClose("update")
    }
    const clickDeleteHandle = (post: PostDTO) => {
        dispatch(SetCurrentUpdatePost(post))
        props.handleClose("delete")
    }

    if (loading) {
        return <Spinner className={styles.spinner} animation="border" variant="primary" />
    }
    return (
        <Table className="mt-4" striped bordered hover>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>User name</th>
                    <th>body</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody >
                {posts.map((post) =>
                (
                    <tr>
                        <td>{post.title}</td>
                        <td>{post.user.name}</td>
                        <td>{post.body}</td>
                        <td className='d-flex'>
                            <Button variant="primary" onClick={(event) => clickViewHandle(post.id)}>View</Button>
                            <Button variant="warning" onClick={(event) => clickUpdateHandle(post)}>Update</Button>
                            <Button variant="danger" onClick={(event) => clickDeleteHandle(post)}>Delete</Button>
                        </td>
                    </tr>
                ))}

                {posts.length == 0 && <td align="center" colSpan={4}>No Data</td>}

            </tbody>
        </Table>
    );
}
export default PostTable