import { createContext, useContext, useState} from "react";
const ContextUser = createContext();

function ContextProvider({ children }) {
  const [openAuth, setOpenAuth] = useState();

    function openRegister() {
        setOpenAuth( 'register' );
}
    function openLogin() {
      setOpenAuth("login");
    }

    function closeAuth() {
        setOpenAuth( '' );
}
  function successRegister() {
  setOpenAuth('successRegister')
  }
  function Forget() {
    setOpenAuth("forget");
  }
  function openInform() {
    setOpenAuth( 'enterinform' );
  }
  function successAddInForm(){
    setOpenAuth( 'successaddinform' );
  }
  return (
    <ContextUser.Provider
      value={{
        openAuth,
        openRegister,
        openLogin,
        closeAuth,
        successRegister,
        Forget,
        openInform,
        successAddInForm,
      }}
    >
      {children}
    </ContextUser.Provider>
  );
}

function useUser() {
  const context = useContext(ContextUser);
  if (context === undefined) {
    throw new Error("proplem in context");
  }
  return context;
}
export { useUser, ContextProvider };
