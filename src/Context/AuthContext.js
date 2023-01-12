import React, { createContext } from 'react';

export const UserContext = createContext();

const AuthContext = ({ children }) => {


    const data = { Name: "MK" }

    return (
        <UserContext.Provider value={{data}}>
            {children}
        </UserContext.Provider>
    )

};

export default AuthContext;