import React from "react";
import { useSharedState } from '../context/UserContext';

export default function Card({user}){
    const { setUserId, currId, setShowScreen } = useSharedState();
    console.log(currId)
    const onClickHandler = (id) =>{
        setShowScreen(1);
        setUserId(id);
    }

    return (
        <div key={user.createdAt} onClick={() => onClickHandler(user.id)}
            className="overflow-ellipsis my-2 border border-slate-300 flex p-1 cursor-pointer bg-gray-100" 
            id={`${user.id === currId?'bg-blue':''}`}>
            
            <img src={user.avatar} alt="img" className="w-10 mr-2"/>
            <h2 className="w-7/12 overflow-ellipsis">{user.profile.username}</h2>
        </div>
    )
};