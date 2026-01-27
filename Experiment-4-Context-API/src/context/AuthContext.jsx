import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [loginCount, setLoginCount] = useState(0);

  const login = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
    setLoginCount(loginCount + 1);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, login, logout, loginCount }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
