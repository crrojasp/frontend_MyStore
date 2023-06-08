import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [productos, setProductos] = useState([])

  return (
    
    <UserContext.Provider value={[productos, setProductos]}>
      {children}
    </UserContext.Provider>
    
  );
};
