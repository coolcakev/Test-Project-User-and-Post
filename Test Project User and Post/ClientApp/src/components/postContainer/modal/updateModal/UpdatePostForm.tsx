import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useAppDispatch, useTypedSelector } from '../../../../hooks/useTypedSelector'
import { updatePost } from '../../../../store/effects/postEffect'
import { PostDTO } from '../../../../types/DTOs/PostDTOs/PostDTO'
import styles from "./UpdatePost.module.css"
interface CreateFormProps {
    handleClose: () => void
}
const UpdatePostForm = (props: CreateFormProps) => {
    const { currentUpdatePost } = useTypedSelector(state => state.post);
    const [post, setPost] = useState<PostDTO>(currentUpdatePost!)
    const dispatch = useAppDispatch()


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPost((prev: PostDTO) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        event.stopPropagation();

        dispatch(updatePost({
            id: post.id,
            body: post.body,
            title: post.title,
        }))
        props.handleClose()
    }

    return (
        <Form className={styles.myform} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group className={styles.group} as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        className={styles.input}
                        type="text"
                        name="title"
                        value={post.title}
                        onChange={handleChange}
                    />

                    <Form.Label>Body</Form.Label>
                   
                    <Form.Control
                        as="textarea" rows={3}
                        className={styles.input}
                        type="text"
                        name="body"
                        value={post.body}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Row>
            <Button type="submit">Save post</Button>
        </Form>
    )
}

export default UpdatePostForm