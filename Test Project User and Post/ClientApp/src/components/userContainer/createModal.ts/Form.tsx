import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useAppDispatch } from '../../../hooks/useTypedSelector';
import { createUser } from '../../../store/effects/userEffect';
import styles from "./Form.module.css"

interface CreateFormProps{
    handleClose:()=>void
}
const CreateForm = (props:CreateFormProps) => {
    const [userId, setUserId] = useState(0)

    const dispatch = useAppDispatch()
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(Number(event.target.value))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(createUser(userId))
        props.handleClose()
    }

    return (
        <Form className={styles.myform} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group className={styles.group}  as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        className={styles.input}
                        type="number"
                        name="firstName"
                        value={userId}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Row>
            <Button type="submit">Save user</Button>
        </Form>
    )
}

export default CreateForm