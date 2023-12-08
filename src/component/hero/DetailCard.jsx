import React from 'react'

function DetailCard({user}) {
    const isoDate = new Date(user.createdAt);
    const formattedDate = isoDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

  return (
    <div className='flex flex-col'>
        <div className='flex flex-col items-center mb-2'>
            {user.avatar && <img src={user.avatar} alt="Avatar" className="w-16 h-16 rounded-full mx-auto mb-4 border object-center" />}
            <span className="font-bold"></span> {user.profile.username}
        </div>

        <div className='bg-gray-100 m-2 p-2'>
            <p><span className="font-bold">Title:</span> {user.jobTitle}</p>
            <p className="text-gray-600 mb-4 text-sm">{user.Bio}</p>
        </div>
        
        <div className="text-gray-700">
            <p className='bg-gray-100 m-2 p-2'> <span className="text-gray-500">Full name: </span> {user.profile.firstName} 
            {user.profile.lastName} </p>
            <p className='bg-gray-100 m-2 p-2'> <span className="text-gray-500">Email:</span> {user.profile.email} </p>
            <p className='bg-gray-100 m-2 p-2'> <span className="text-gray-600">Joined At:</span> {formattedDate} </p>
        </div>
  </div>
  )
}

export default DetailCard