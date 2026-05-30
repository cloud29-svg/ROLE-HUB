import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<"Admin" | "Editor" | "Viewer">("Viewer");
  const { login } = useAuth();   
  const navigate = useNavigate(); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() !== "") {
      login({ username, role });  
      navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as "Admin" | "Editor" | "Viewer")}
        >
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};