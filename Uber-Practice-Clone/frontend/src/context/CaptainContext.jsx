import { createContext, useState } from 'react';

// Create the context
export const CaptainDataContext = createContext();



// Context Provider component
 const CaptainContext = ({ children }) => {
    // States
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to update captain data
    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };

    // Value to provide
    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain,
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};



export default  CaptainContext