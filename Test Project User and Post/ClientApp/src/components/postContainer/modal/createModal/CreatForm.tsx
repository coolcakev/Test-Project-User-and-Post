import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useAppDispatch } from '../../../../hooks/useTypedSelector'
import { createPost } from '../../../../store/effects/postEffect'
import styles from './Form.module.css'
interface CreateFormProps {
    handleClose: () => void
}
const CreatePostForm = (props: CreateFormProps) => {
    const [postId, setPostId] = useState(0)
    const [userId, setUserId] = useState(0)

    const dispatch = useAppDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name == "userId") {
            setUserId(Number(event.target.value))
        } else
            setPostId(Number(event.target.value))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(createPost(userId, postId))
        props.handleClose()
    }

    return (
        <Form className={styles.myform} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group className={styles.group} as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>UserId</Form.Label>
                    <Form.Control
                        className={styles.input}
                        type="number"
                        name="userId"
                        value={userId}
                        onChange={handleChange}
                    />

                    <Form.Label>PostId</Form.Label>
                    <Form.Control
                        className={styles.input}
                        type="number"
                        name="postId"
                        value={postId}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Row>
            <Button type="submit">Save post</Button>
        </Form>
    )
}

export default CreatePostForm