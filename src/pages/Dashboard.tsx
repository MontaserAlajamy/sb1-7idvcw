import React from 'react';
import { Package, ShoppingCart, DollarSign, AlertCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Items"
          value="1,234"
          icon={<Package className="h-8 w-8 text-blue-500" />}
        />
        <DashboardCard
          title="Pending Orders"
          value="56"
          icon={<ShoppingCart className="h-8 w-8 text-green-500" />}
        />
        <DashboardCard
          title="Total Sales"
          value="$45,678"
          icon={<DollarSign className="h-8 w-8 text-yellow-500" />}
        />
        <DashboardCard
          title="Low Stock Items"
          value="23"
          icon={<AlertCircle className="h-8 w-8 text-red-500" />}
        />
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      {icon}
    </div>
  </div>
);

export default Dashboard;