import React, { createContext, useState } from "react";

// Create a context for the authentication state
export const AuthContext = createContext(null);

// Create a provider component for the authentication context
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  // The value provided will be the current auth state and a setter function

  return (
    <AuthContext.Provider value={auth} setAuth={setAuth}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a hook that uses the authentication context
