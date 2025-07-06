import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '@/services/api/authService';
const AdminGuard = ({ children }) => {
  const navigate = useNavigate();

useEffect(() => {
    if (!authService.isAuthenticated()) {
      navigate('/admin-panel-2024');
    } else {
      // Refresh session on component mount
      authService.refreshSession();
    }
  }, [navigate]);

  if (!authService.isAuthenticated()) {
    return null;
  }

  return children;
};

export default AdminGuard;