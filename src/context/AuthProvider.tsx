import { useState } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./auth-context";

interface UserData {
  username: string;
  role: "Admin" | "Editor" | "Viewer";
  // [key: string]: unknown;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserData | null>(null);

  const login = (userData: UserData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};