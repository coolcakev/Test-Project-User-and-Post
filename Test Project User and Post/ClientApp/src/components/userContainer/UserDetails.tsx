import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchUser } from '../../store/effects/userEffect'

const UserDetails = () => {
    const dispatch = useAppDispatch()
    const user = useTypedSelector(state => state.user.currentViewUser)
    let params = useParams();
    useEffect(() => {
        dispatch(fetchUser(Number(params.userId)))
    }, [])

    if (user == null) {
        return null;
    }
    return (
        <>
            <div className="d-flex">
                <label><strong>Name :</strong></label>
                <span>{user?.fullName}</span>
            </div>
            <div className="d-flex">
                <label><strong>Username :</strong></label>
                <span>{user?.username}</span>
            </div>
            <div className="d-flex">
                <label><strong>City :</strong></label>
                <span>{user?.city}</span>
            </div>
            <div className="d-flex">
                <label><strong>Phone :</strong></label>
                <span>{user?.phone}</span>
            </div>
            <div className="d-flex">
                <label><strong>Street :</strong></label>
                <span>{user?.street}</span>
            </div>

            {user?.postset?.length > 0 &&
                <div className="d-flex">
                    <label>Posts</label>
                </div>}
        </>
    )
}

export default UserDetails