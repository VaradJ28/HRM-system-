import React from 'react';
import { BarChart, PieChart, LineChart, Download } from 'lucide-react';

export default function Reports() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Reports & Analytics</h1>
        <button className="btn btn-primary flex items-center gap-2">
          <Download className="w-4 h-4" /> Export Reports
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Employee Distribution</h3>
            <PieChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500">Employee distribution chart will be displayed here</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Attendance Trends</h3>
            <LineChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500">Attendance trends chart will be displayed here</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Department Budget Allocation</h3>
            <BarChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500">Budget allocation chart will be displayed here</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Recruitment Statistics</h3>
            <LineChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500">Recruitment statistics chart will be displayed here</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Metrics Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Total Employees</p>
            <p className="text-2xl font-bold text-gray-800">156</p>
            <p className="text-xs text-green-600">↑ 12% from last month</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Average Attendance</p>
            <p className="text-2xl font-bold text-gray-800">96%</p>
            <p className="text-xs text-green-600">↑ 2% from last month</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Open Positions</p>
            <p className="text-2xl font-bold text-gray-800">8</p>
            <p className="text-xs text-blue-600">3 in review</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Total Departments</p>
            <p className="text-2xl font-bold text-gray-800">12</p>
            <p className="text-xs text-gray-600">No change</p>
          </div>
        </div>
      </div>
    </div>
  );
}