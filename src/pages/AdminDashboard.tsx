import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, UserPlus, DollarSign, Building2, BarChart3, AlertTriangle } from 'lucide-react';
import AddEmployeeModal from '../components/modals/AddEmployeeModal';
import { useEmployeeStore } from '../store/employeeStore';
import { useDepartmentStore } from '../store/departmentStore';
import { usePayrollStore } from '../store/payrollStore';
import toast from 'react-hot-toast';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const employees = useEmployeeStore((state) => state.employees);
  const departments = useDepartmentStore((state) => state.departments);
  const payrollRecords = usePayrollStore((state) => state.records);

  const stats = [
    { 
      icon: Users, 
      label: 'Total Employees', 
      value: employees.length, 
      change: '+12%', 
      color: 'bg-blue-500',
      onClick: () => navigate('/admin/employees')
    },
    { 
      icon: UserPlus, 
      label: 'Open Positions', 
      value: '8', 
      change: '+3', 
      color: 'bg-green-500',
      onClick: () => navigate('/admin/recruitment')
    },
    { 
      icon: DollarSign, 
      label: 'Total Payroll', 
      value: `$${payrollRecords.reduce((acc, curr) => acc + curr.netPay, 0).toLocaleString()}`, 
      change: '+5%', 
      color: 'bg-yellow-500',
      onClick: () => navigate('/admin/payroll')
    },
    { 
      icon: Building2, 
      label: 'Departments', 
      value: departments.length, 
      change: '0', 
      color: 'bg-purple-500',
      onClick: () => navigate('/admin/departments')
    },
  ];

  const alerts = [
    { type: 'warning', message: '3 employees have pending leave requests', action: () => navigate('/admin/employees') },
    { type: 'info', message: 'Monthly payroll processing due in 2 days', action: () => navigate('/admin/payroll') },
    { type: 'error', message: 'System maintenance scheduled for tonight', action: () => toast.info('Maintenance scheduled for 2 AM') },
  ];

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'addEmployee':
        setShowAddEmployee(true);
        break;
      case 'generateReport':
        navigate('/admin/reports');
        break;
      case 'processPayroll':
        navigate('/admin/payroll');
        break;
      case 'manageDepartments':
        navigate('/admin/departments');
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
        <p className="text-gray-600">System overview and controls</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div 
            key={stat.label} 
            className="bg-white rounded-xl shadow-sm p-6 cursor-pointer transition-transform hover:scale-105"
            onClick={stat.onClick}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">System Alerts</h3>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div
                key={index}
                onClick={alert.action}
                className={`flex items-start space-x-3 p-4 rounded-lg cursor-pointer transition-colors hover:opacity-80 ${
                  alert.type === 'warning'
                    ? 'bg-yellow-50 text-yellow-700'
                    : alert.type === 'error'
                    ? 'bg-red-50 text-red-700'
                    : 'bg-blue-50 text-blue-700'
                }`}
              >
                <AlertTriangle className="w-5 h-5" />
                <p>{alert.message}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleQuickAction('addEmployee')}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
            >
              <UserPlus className="w-6 h-6 text-indigo-600 mb-2" />
              <h4 className="font-medium text-gray-800">Add Employee</h4>
              <p className="text-sm text-gray-600">Create new employee record</p>
            </button>
            <button
              onClick={() => handleQuickAction('generateReport')}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
            >
              <BarChart3 className="w-6 h-6 text-indigo-600 mb-2" />
              <h4 className="font-medium text-gray-800">Generate Report</h4>
              <p className="text-sm text-gray-600">Create system reports</p>
            </button>
            <button
              onClick={() => handleQuickAction('processPayroll')}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
            >
              <DollarSign className="w-6 h-6 text-indigo-600 mb-2" />
              <h4 className="font-medium text-gray-800">Process Payroll</h4>
              <p className="text-sm text-gray-600">Run monthly payroll</p>
            </button>
            <button
              onClick={() => handleQuickAction('manageDepartments')}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
            >
              <Building2 className="w-6 h-6 text-indigo-600 mb-2" />
              <h4 className="font-medium text-gray-800">Manage Departments</h4>
              <p className="text-sm text-gray-600">Update department info</p>
            </button>
          </div>
        </div>
      </div>

      {showAddEmployee && (
        <AddEmployeeModal onClose={() => setShowAddEmployee(false)} />
      )}
    </div>
  );
}