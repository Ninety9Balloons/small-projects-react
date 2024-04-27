/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

export const DataContext = createContext({});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [steamData, setSteamData] = useState({ test: "test" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("./minsteamdb.json")
            .then((response) => response.json())
            .then((data) => setSteamData(data))
            .then(setLoading(false))
            .catch((error) => console.error("error", error));
    }, [setSteamData]);

    return (
        <DataContext.Provider value={{ steamData, setSteamData, loading }}>
            {children}
        </DataContext.Provider>
    );
};
