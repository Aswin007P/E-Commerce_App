import { useEffect, useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Login function (save user in state + localStorage)
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout function (clear user)
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Boolean check for auth
  const isAuthenticated = !!user;

  return { user, isAuthenticated, login, logout };
};

export default useAuth;
