import { useContext, useState } from "react";
import { createContext } from "react";

const GlobalLoadingContext = createContext({
    globalLoading: false,
    setGlobalLoading: () => {},
});

export const useGlobalLoading = () => useContext(GlobalLoadingContext);

function GlobalLoadingProvider({ children }) {
    const [loading, setLoading] = useState(false);

    const value = {
        globalLoading: loading,
        setGlobalLoading: setLoading,
    };

    return (
        <GlobalLoadingContext.Provider value={value}>
            {children}
        </GlobalLoadingContext.Provider>
    );
}

export default GlobalLoadingProvider;
