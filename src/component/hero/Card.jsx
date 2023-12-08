import React from "react";
import { useSharedState } from '../context/UserContext';

export default function Card({user}){
    const { setUserId } = useSharedState();

    const onClickHandler = (id) =>{
        setUserId(id);
    }

    return (
        <div key={user.createdAt} onClick={() => onClickHandler(user.id)}
            className='my-2 border border-slate-300 flex p-1 cursor-pointer bg-gray-100'>
            
            <img src={user.avatar} alt="img" className="w-10 mr-2"/>
            <h2>{user.profile.username}</h2>
        </div>
    )
};