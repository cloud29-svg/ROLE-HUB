import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthProvider";
import type { ReactNode } from "react";
import { useAuth } from "../context/useAuth";

type Props = {
  children: ReactNode;
  allowedRoles?: ("Admin" | "Editor" | "Viewer")[];
};

export const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};