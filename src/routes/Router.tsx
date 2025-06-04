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
import Profile  from '../pages/Profile';
import Settings from '../pages/Settings';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/dashboard/insights', element: <Insights /> },
  { path: '/dashboard/contacts', element: <Contacts /> },
  { path: '/dashboard/clients', element: <Clients /> },
  { path: '/dashboard/leads', element: <Leads /> },
  { path: '/dashboard/taskmanager', element: <Taskmanager /> },
  { path: '/dashboard/calendar', element: <Calendar/> },
  { path: '/dashboard/settings', element: <Settings /> },
  { path: '/dashboard/profile', element: <Profile /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
