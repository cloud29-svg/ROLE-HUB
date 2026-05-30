import { createContext } from "react";

export type User = {
  username: string;
  role: "Admin" | "Editor" | "Viewer";
};

export type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);