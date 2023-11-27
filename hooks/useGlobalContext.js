import { createContext, useContext, useState } from "react";

const AppContext = createContext({
  username: "abc",
  setUserName: () => undefined,
});

export const GlobalContextProvider = ({ children }) => {
  const [username, setUserName] = useState(null);

  const contentValue = {
    username,
    setUserName,
  };

  return (
    <AppContext.Provider value={contentValue}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
