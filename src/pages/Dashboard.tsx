import { useAuth } from "../context/AuthContext";

export const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return <p>Redirecting...</p>;

  switch (user.role) {
    case "Admin":
      return (
        <div>
          <h1>Admin Dashboard</h1>
          <p>Admin controls: manage users, view all data, etc.</p>
        </div>
      );
    case "Editor":
      return (
        <div>
          <h1>Editor Dashboard</h1>
          <p>Content editor panel: write/edit articles.</p>
        </div>
      );
    case "Viewer":
      return (
        <div>
          <h1>Viewer Dashboard</h1>
          <p>Read-only reports: view analytics.</p>
        </div>
      );
    default:
      return null;
  }
};