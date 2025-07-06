import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminGuard = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin-panel-2024');
    }
  }, [navigate]);

  const isAuthenticated = localStorage.getItem('adminAuthenticated');
  
  if (!isAuthenticated) {
    return null;
  }

  return children;
};

export default AdminGuard;