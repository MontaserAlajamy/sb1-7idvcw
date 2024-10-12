import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Package, ShoppingCart, BarChart2, Settings } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-700">Inventory Manager</span>
          </div>
          <div className="flex space-x-4">
            <NavLink to="/" icon={<Home size={20} />} text="Dashboard" />
            <NavLink to="/inventory" icon={<Package size={20} />} text="Inventory" />
            <NavLink to="/orders" icon={<ShoppingCart size={20} />} text="Orders" />
            <NavLink to="/reports" icon={<BarChart2 size={20} />} text="Reports" />
            <NavLink to="/settings" icon={<Settings size={20} />} text="Settings" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; text: string }> = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900">
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);

export default Navbar;