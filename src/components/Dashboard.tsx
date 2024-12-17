import React from 'react';
import { Users, Clock, FileText, Calendar } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const stats = [
  { icon: Clock, label: 'Time Today', value: '8h 30m', change: '', color: 'bg-blue-500' },
  { icon: Calendar, label: 'Attendance Rate', value: '96%', change: '+2%', color: 'bg-green-500' },
  { icon: FileText, label: 'Leave Balance', value: '12 days', change: '', color: 'bg-purple-500' },
  { icon: Users, label: 'Team Members', value: '8', change: '', color: 'bg-yellow-500' },
];

export default function Dashboard() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Welcome, {user?.name}</h2>
        <p className="text-gray-600">Employee Dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              {stat.change && (
                <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
              )}
            </div>
            <h3 className="text-gray-600 text-sm mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium text-gray-800">Checked In</p>
                <p className="text-sm text-gray-500">Today at 9:00 AM</p>
              </div>
              <Clock className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium text-gray-800">Submitted Report</p>
                <p className="text-sm text-gray-500">Yesterday at 4:30 PM</p>
              </div>
              <FileText className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium text-gray-800">Team Meeting</p>
                <p className="text-sm text-gray-500">Yesterday at 2:00 PM</p>
              </div>
              <Users className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium text-gray-800">Team Review</p>
                <p className="text-sm text-gray-500">Tomorrow at 10:00 AM</p>
              </div>
              <Users className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium text-gray-800">Project Deadline</p>
                <p className="text-sm text-gray-500">March 20, 2024</p>
              </div>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium text-gray-800">Training Session</p>
                <p className="text-sm text-gray-500">March 22, 2024</p>
              </div>
              <FileText className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}