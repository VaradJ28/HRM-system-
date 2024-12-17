import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, UserPlus, Calendar, FileText, BarChart3, Settings, Building2, Shield } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export default function Sidebar() {
  const user = useAuthStore((state) => state.user);
  const isAdmin = user?.role === 'admin';

  const adminMenuItems = [
    { icon: Shield, label: 'Dashboard', path: '/admin' },
    { icon: Users, label: 'Employees', path: '/admin/employees' },
    { icon: UserPlus, label: 'Recruitment', path: '/admin/recruitment' },
    { icon: Calendar, label: 'Attendance', path: '/admin/attendance' },
    { icon: FileText, label: 'Payroll', path: '/admin/payroll' },
    { icon: Building2, label: 'Departments', path: '/admin/departments' },
    { icon: BarChart3, label: 'Reports', path: '/admin/reports' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  const employeeMenuItems = [
    { icon: Users, label: 'Dashboard', path: '/' },
    { icon: Calendar, label: 'Attendance', path: '/attendance' },
  ];

  const menuItems = isAdmin ? adminMenuItems : employeeMenuItems;

  return (
    <div className="bg-indigo-900 text-white w-64 min-h-screen p-4">
      <NavLink to={isAdmin ? '/admin' : '/'} className="flex items-center space-x-2 mb-8">
        {isAdmin ? (
          <Shield className="w-8 h-8" />
        ) : (
          <Users className="w-8 h-8" />
        )}
        <h1 className="text-xl font-bold">HRM System</h1>
      </NavLink>
      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-2 w-full p-3 rounded-lg transition-colors mb-1 ${
                isActive ? 'bg-indigo-800' : 'hover:bg-indigo-800'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}