import React from 'react';
import { Bell, Lock, Globe, Users, Mail, Palette } from 'lucide-react';

const settingSections = [
  {
    title: 'Company Settings',
    icon: Globe,
    settings: [
      { name: 'Company Name', value: 'TechCorp Inc.' },
      { name: 'Location', value: 'New York, USA' },
      { name: 'Time Zone', value: 'EST (UTC-5)' }
    ]
  },
  {
    title: 'Notifications',
    icon: Bell,
    settings: [
      { name: 'Email Notifications', value: 'Enabled' },
      { name: 'Push Notifications', value: 'Disabled' },
      { name: 'Alert Preferences', value: 'High Priority Only' }
    ]
  },
  {
    title: 'Security',
    icon: Lock,
    settings: [
      { name: 'Two-Factor Authentication', value: 'Enabled' },
      { name: 'Password Policy', value: 'Strong' },
      { name: 'Session Timeout', value: '30 minutes' }
    ]
  }
];

export default function Settings() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <button className="btn btn-primary">Save Changes</button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {settingSections.map((section) => (
          <div key={section.title} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-6">
              <section.icon className="w-6 h-6 text-indigo-600" />
              <h2 className="text-lg font-semibold text-gray-800">{section.title}</h2>
            </div>
            <div className="space-y-4">
              {section.settings.map((setting) => (
                <div key={setting.name} className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">{setting.name}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-800">{setting.value}</span>
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-6 h-6 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-800">User Management</h2>
          </div>
          <div className="space-y-4">
            <button className="w-full text-left flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">Manage User Roles</span>
              <span className="text-indigo-600 hover:text-indigo-800 text-sm">Configure</span>
            </button>
            <button className="w-full text-left flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">Access Permissions</span>
              <span className="text-indigo-600 hover:text-indigo-800 text-sm">Configure</span>
            </button>
            <button className="w-full text-left flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">Department Access</span>
              <span className="text-indigo-600 hover:text-indigo-800 text-sm">Configure</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}