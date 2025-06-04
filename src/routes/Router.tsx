import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Insights from '../pages/Insights';
import Contacts from '../pages/Contacts';
import Clients from '../pages/Clients';
import Leads from '../pages/Leads';
import Taskmanager from '../pages/Taskmanager';
import Calendar from '../pages/Calendar';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';

import ProtectedRoute from '../pages/ProtectedRoute';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '/dashboard/insights',
    element: (
      <ProtectedRoute>
        <Insights />
      </ProtectedRoute>
    )
  },
  {
    path: '/dashboard/contacts',
    element: (
      <ProtectedRoute>
        <Contacts />
      </ProtectedRoute>
    )
  },
  {
    path: '/dashboard/clients',
    element: (
      <ProtectedRoute>
        <Clients />
      </ProtectedRoute>
    )
  },
  {
    path: '/dashboard/leads',
    element: (
      <ProtectedRoute>
        <Leads />
      </ProtectedRoute>
    )
  },
  {
    path: '/dashboard/taskmanager',
    element: (
      <ProtectedRoute>
        <Taskmanager />
      </ProtectedRoute>
    )
  },
  {
    path: '/dashboard/calendar',
    element: (
      <ProtectedRoute>
        <Calendar />
      </ProtectedRoute>
    )
  },
  {
    path: '/dashboard/settings',
    element: (
      <ProtectedRoute>
        <Settings />
      </ProtectedRoute>
    )
  },
  {
    path: '/dashboard/profile',
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    )
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
