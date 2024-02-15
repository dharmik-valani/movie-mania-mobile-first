import React, { createContext, useState } from 'react';

// Create a context object
export const MyContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

