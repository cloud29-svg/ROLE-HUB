import { useAuth } from "../context/AuthContext";

export const Profile = () => {
  const { user } = useAuth();

  if (!user) return <p>Redirecting...</p>;

  return (
    <div>
      <h1>Profile</h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
};