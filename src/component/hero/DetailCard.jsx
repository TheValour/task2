import React from 'react'

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DetailCard({user}) {
    const isoDate = new Date(user.createdAt);
    const formattedDate = isoDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

  return (
    <div className='flex flex-col w-11/12'>
        <div className='flex flex-col items-center mb-2'>
            {user.avatar && <img src={user.avatar} alt="Avatar" className="w-28 h-28 rounded-full mx-auto mb-4 border object-center" />}
            <span className="font-bold bg-green-50 p-2"> {user.profile.username}</span>
        </div>

        <div className='bg-gray-100 m-2 p-2'>
            <p className='font-bold'><span className="font-normal">Title:</span> {user.jobTitle}</p>
            <p className="text-gray-600 mb-4 text-sm">{user.Bio}</p>
        </div>
        
        <div className="text-gray-700">
            <p className='bg-gray-100 m-2 p-2'> <span className="text-gray-500 text-sm">full name: </span> {user.profile.firstName} 
            {user.profile.lastName} </p>

            <p className='bg-gray-100 m-2 p-2 text-blue-800 h-auto cursor-pointer'> 
            <span className="w-5 h-5 text-gray-500 mr-2"><FontAwesomeIcon icon={faEnvelope} /> </span>
            {user.profile.email} </p>

            <p className='bg-gray-100 m-2 p-2'> <span className="text-gray-600 text-sm  ">joined At:</span> {formattedDate} </p>
        </div>
  </div>
  )
}

export default DetailCard