import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Lock, Shield } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuthStore } from '../store/authStore';

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const success = await login(formData.id, formData.password);
      
      if (success) {
        const user = useAuthStore.getState().user;
        if (user?.role === 'admin') {
          toast.success('Welcome, Admin!');
          navigate('/admin');
        } else {
          toast.success('Welcome back!');
          navigate('/');
        }
      } else {
        toast.error('Invalid credentials. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred during login.');
    }
  };

  const handleToggleRole = (adminMode: boolean) => {
    setIsAdmin(adminMode);
    setFormData({
      id: adminMode ? 'ADMIN001' : 'EMP001',
      password: adminMode ? 'admin123' : 'password123'
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-indigo-600 p-3 rounded-full mb-4">
            {isAdmin ? (
              <Shield className="w-8 h-8 text-white" />
            ) : (
              <Users className="w-8 h-8 text-white" />
            )}
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            {isAdmin ? 'Admin Login' : 'Employee Login'}
          </h1>
          <p className="text-gray-600 mt-2">Welcome back! Please enter your credentials.</p>
        </div>

        <div className="flex gap-2 mb-6">
          <button
            onClick={() => handleToggleRole(false)}
            className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
              !isAdmin
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Employee
          </button>
          <button
            onClick={() => handleToggleRole(true)}
            className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
              isAdmin
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isAdmin ? 'Admin ID' : 'Employee ID'}
            </label>
            <div className="relative">
              {isAdmin ? (
                <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              ) : (
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              )}
              <input
                type="text"
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                className="pl-10 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder={`Enter your ${isAdmin ? 'admin' : 'employee'} ID`}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="pl-10 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Demo Credentials:
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {isAdmin ? 'Admin ID: ADMIN001, Password: admin123' : 'Employee ID: EMP001, Password: password123'}
          </p>
        </div>
      </div>
    </div>
  );
}