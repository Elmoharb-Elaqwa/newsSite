import { createContext} from "react";

const ContextUserInuse = createContext();

function ContextUserProvider({ children }) {
  

  return (
    <ContextUserInuse.Provider value={{ }}>
      {children}
    </ContextUserInuse.Provider>
  );
}


export {  ContextUserProvider ,ContextUserInuse, };