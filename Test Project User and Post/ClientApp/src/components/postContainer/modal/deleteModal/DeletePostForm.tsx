import React from 'react'
import { Button } from 'react-bootstrap'
import { useAppDispatch, useTypedSelector } from '../../../../hooks/useTypedSelector'
import { deletePost } from '../../../../store/effects/postEffect'

interface DeleteFormProps {
    handleClose: () => void
}
const DeletePostForm = (props: DeleteFormProps) => {
    const currentPost = useTypedSelector(state => state.post.currentUpdatePost)
    const dispatch = useAppDispatch()

    const handleClick = () => {       
        dispatch(deletePost(currentPost?.id!));
        props.handleClose()
    }

    return (
        <div>
            <h2> Do you want to delete <strong>{ currentPost?.title }</strong></h2>
            <Button type="button" onClick={handleClick}>Delete post</Button>
        </div>
    )
}

export default DeletePostForm