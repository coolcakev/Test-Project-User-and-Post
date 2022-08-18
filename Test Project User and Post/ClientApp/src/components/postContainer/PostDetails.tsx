import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchPost } from '../../store/effects/postEffect';

const PostDetails = () => {
    const dispatch = useAppDispatch()
    const post = useTypedSelector(state => state.post.currentViewPost)
    let params = useParams();
    useEffect(() => {
        dispatch(fetchPost(Number(params.postId)))
    }, [])

    if (post == null) {
        return null;
    }
    return (
        <>
            <div className="d-flex">
                <label><strong>Body :</strong></label>
                <span>{post?.body}</span>
            </div>
            <div className="d-flex">
                <label><strong>Title :</strong></label>
                <span>{post?.title}</span>
            </div>            
            <div className="d-flex">
                <label><strong>User :</strong></label>
                <span>{post?.user.name}</span>
            </div>
            
        </>
    )
}

export default PostDetails