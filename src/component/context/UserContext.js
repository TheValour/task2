import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currId, setCurrId] = useState(1);
  const [show, setShow] = useState(2);

  const setUserId = (val) => {
    setCurrId(val);
  };
  const setShowScreen = (val) => {
    setShow(val);
  };

  return (
    <UserContext.Provider value={{ currId, setUserId, show, setShowScreen }}>
      {children}
    </UserContext.Provider>
  );
};

export const useSharedState = () => useContext(UserContext);
