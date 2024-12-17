import React from 'react';
import { DollarSign, Download, Calendar } from 'lucide-react';

const payrollData = [
  { id: 1, employee: 'Sarah Johnson', salary: 75000, bonus: 5000, deductions: 2500, netPay: 77500, status: 'Paid' },
  { id: 2, employee: 'Michael Chen', salary: 85000, bonus: 7000, deductions: 3000, netPay: 89000, status: 'Pending' },
  { id: 3, employee: 'Emma Davis', salary: 65000, bonus: 4000, deductions: 2000, netPay: 67000, status: 'Paid' },
];

export default function Payroll() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Payroll Management</h1>
        <div className="flex space-x-4">
          <button className="btn btn-secondary flex items-center gap-2">
            <Calendar className="w-4 h-4" /> March 2024
          </button>
          <button className="btn btn-primary flex items-center gap-2">
            <Download className="w-4 h-4" /> Export Payroll
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Total Payroll</h3>
            <DollarSign className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-800">$233,500</p>
          <p className="text-sm text-gray-500 mt-2">For March 2024</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Total Employees</h3>
            <span className="text-blue-500">3</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">3 Active</p>
          <p className="text-sm text-gray-500 mt-2">0 Inactive</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Payment Status</h3>
            <span className="text-green-500">67%</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">2 Paid</p>
          <p className="text-sm text-gray-500 mt-2">1 Pending</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base Salary</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bonus</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deductions</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Pay</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payrollData.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">{item.employee}</td>
                <td className="px-6 py-4 whitespace-nowrap">${item.salary.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">${item.bonus.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">${item.deductions.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap font-medium">${item.netPay.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    item.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}