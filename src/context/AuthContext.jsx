import React, { createContext, useContext, useState } from "react";

// --- Hardcoded User Database ---
const dbUsers = [
  {
    id: 1,
    email: "shreeut2704@gmail.com",
    password: "1234",
    name: "Kumar Utkarsh",
    plan: "Pro Plan",
  },
  {
    id: 2,
    email: "kapil.solanki5@gmail.com",
    password: "1234",
    name: "Kapil Solanki",
    plan: "Team Plan",
  },
  {
    id: 3,
    email: "vishy.gupta@gmail.com",
    password: "1234",
    name: "Vishesh Gupta",
    plan: "Free Plan",
  },
  {
    id: 4,
    email: "Jack@gmail.com",
    password: "1234",
    name: "Jack",
    plan: "Free Plan",
  },
  {
    id: 5,
    email: "emailtest@test.com",
    password: "1234",
    name: "Test User",
    plan: "Free Plan",
  },
];
// ---------------------------------

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (email, password) => {
    const user = dbUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setCurrentUser(user);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const value = { currentUser, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to easily access auth state
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
