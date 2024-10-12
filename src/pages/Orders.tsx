import React from 'react';
import { ShoppingCart, Package, Truck } from 'lucide-react';

const Orders: React.FC = () => {
  const orders = [
    { id: 1, customer: 'John Doe', items: 3, total: 59.97, status: 'Pending' },
    { id: 2, customer: 'Jane Smith', items: 2, total: 39.98, status: 'Processing' },
    { id: 3, customer: 'Bob Johnson', items: 5, total: 99.95, status: 'Shipped' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Items</th>
              <th className="p-3 text-left">Total</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-b">
                <td className="p-3">#{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.items}</td>
                <td className="p-3">${order.total.toFixed(2)}</td>
                <td className="p-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'Processing':
      return 'bg-blue-100 text-blue-800';
    case 'Shipped':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Pending':
      return <ShoppingCart className="w-4 h-4 mr-1" />;
    case 'Processing':
      return <Package className="w-4 h-4 mr-1" />;
    case 'Shipped':
      return <Truck className="w-4 h-4 mr-1" />;
    default:
      return null;
  }
};

export default Orders;