import React, { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

// Create a context for the authentication state
const AuthContext = createContext(null);

// Create a provider component for the authentication context
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const login = () => {
    setAuth(true);
    Navigate("/dashboard"); // Redirect to the home page
  };
  // Logout function
  const logout = () => {
    setAuth(false);
  };
  // The value provided will be the current auth state and a setter function

  return (
    <AuthContext.Provider auth={auth} login={login} logout={logout}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a hook that uses the authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
