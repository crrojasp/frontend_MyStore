import React, { createContext, useState } from 'react'

export const DeseadosContext = createContext([null]);

export const DeseadosProvider = ({ children }) => {

    const [deseado, setDeseado] = useState([])

    return (
        <DeseadosContext.Provider value={[deseado, setDeseado]}>
            {children}
        </DeseadosContext.Provider>
    );
};