import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const value = {};
  return (
    // eslint-disable-next-line react/prop-types
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
