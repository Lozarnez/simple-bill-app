import React, {createContext, useContext, useState, useEffect} from 'react';

const AuthContext = createContext();

// Hook to get context
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    
  });

  return (
    <AuthContext.Provider value={{usuario: true}}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthProvider, AuthContext, useAuth};