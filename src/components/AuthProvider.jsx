import React, { useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

let AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  let signin = (newUser, callback) => {
    console.log("AuthProvider signin", newUser);
    setUser(newUser);
    callback();
  };

  let signout = (callback) => {
    setUser(null);
    callback();
  };

  const value = useMemo(
    () => ({
      user,
      signin,
      signout
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default AuthProvider;
