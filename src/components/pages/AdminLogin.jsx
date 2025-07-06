import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import Button from '@/components/atoms/Button';
import FormField from '@/components/molecules/FormField';
import ApperIcon from '@/components/ApperIcon';
import authService from '@/services/api/authService';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
const navigate = useNavigate();

  useEffect(() => {
    // Check if already authenticated
    if (authService.isAuthenticated()) {
      navigate('/admin-panel-2024/dashboard');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await authService.login(credentials);
      toast.success('Login successful!');
      navigate('/admin-panel-2024/dashboard');
    } catch (error) {
      toast.error(error.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full w-16 h-16 mx-auto mb-4">
              <ApperIcon name="Shield" size={32} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Panel</h1>
            <p className="text-gray-600">RankPro Digital Content Management</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <FormField
              label="Username"
              name="username"
              type="text"
              value={credentials.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
            />

            <FormField
              label="Password"
              name="password"
              type="password"
              value={credentials.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />

            <Button
              type="submit"
              size="lg"
              variant="primary"
              loading={isLoading}
              className="w-full"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Demo Credentials:</h3>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Username:</strong> admin@rankpro
            </p>
            <p className="text-sm text-gray-600">
              <strong>Password:</strong> RankPro2024!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;