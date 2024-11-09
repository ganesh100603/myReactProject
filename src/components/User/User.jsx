import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userID}=useParams()
    return (
        <>
        <div className='text-center text-3xl bg-gray-700 text-white py-4'>
        User: {userID}
        </div>
        </>
    )
}

export default User
