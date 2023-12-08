import React from 'react'
import Users from './Users'
import Detail from './Detail'
import { UserContextProvider } from '../context/UserContext'

export default function Hero() {
  return (
    <UserContextProvider>
        <div className='w-screen flex'>
            <Users />
            <Detail />
        </div>
    </UserContextProvider>
  )
}
