import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h2>Welcome to Dashboard</h2>
        <div className="user-info">
          <p><strong>Email:</strong> {currentUser?.email}</p>
          {currentUser?.displayName && (
            <p><strong>Name:</strong> {currentUser.displayName}</p>
          )}
        </div>
        <button onClick={handleLogout} className="logout-button">
          Log Out
        </button>
      </div>
    </div>
  );
}

