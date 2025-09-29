import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { FarmerDashboard } from '@/components/Dashboards/FarmerDashboard';
import { TestingDashboard } from '@/components/Dashboards/TestingDashboard';
import { ManufacturerDashboard } from '@/components/Dashboards/ManufacturerDashboard';
import { PackagingDashboard } from '@/components/Dashboards/PackagingDashboard';
import { AdminDashboard } from '@/components/Dashboards/AdminDashboard';

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) return null;

  switch (user.role) {
    case 'farmer':
      return <FarmerDashboard />;
    case 'testing':
      return <TestingDashboard />;
    case 'manufacturer':
      return <ManufacturerDashboard />;
    case 'packaging':
      return <PackagingDashboard />;
    case 'admin':
      return <AdminDashboard />;
    default:
      return <div>Unknown role</div>;
  }
}