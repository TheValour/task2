import React from 'react'

function DetailCard({user}) {
  return (
    <>
        {user.avatar && <img src={user.avatar} alt="Avatar" className="w-16 h-16 rounded-full mx-auto mb-4" />}
        <h2 className="text-xl font-semibold mb-2">{user.jobTitle}</h2>
        <p className="text-gray-600 mb-4">{user.Bio}</p>
        <div className="text-gray-700">
        <p>
            <span className="font-bold">Username:</span> {user.profile.username}
        </p>
        <p>
            <span className="font-bold">Name:</span> {user.profile.firstName} {user.profile.lastName}
        </p>
        <p>
            <span className="font-bold">Email:</span> {user.profile.email}
        </p>
        <p>
            <span className="font-bold">ID:</span> {user.id}
        </p>
        <p>
            <span className="font-bold">Created At:</span> {user.createdAt}
        </p>
        </div>
  </>
  )
}

export default DetailCard