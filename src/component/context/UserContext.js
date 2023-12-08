import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currId, setCurrId] = useState(1);

  const setUserId = (val) => {
    setCurrId(val);
  };

  return (
    <UserContext.Provider value={{ currId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useSharedState = () => useContext(UserContext);
