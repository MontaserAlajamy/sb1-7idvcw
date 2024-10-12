import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Plus, Edit, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const Inventory: React.FC = () => {
  const [items, setItems] = useState<InventoryItem[]>([
    { id: 1, name: 'Item 1', quantity: 100, price: 9.99 },
    { id: 2, name: 'Item 2', quantity: 50, price: 19.99 },
    { id: 3, name: 'Item 3', quantity: 75, price: 14.99 },
  ]);
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);

  const { register, handleSubmit, reset } = useForm<InventoryItem>();

  const onSubmit = (data: InventoryItem) => {
    if (editingItem) {
      setItems(items.map(item => item.id === editingItem.id ? { ...item, ...data } : item));
      toast.success('Item updated successfully');
    } else {
      setItems([...items, { ...data, id: Date.now() }]);
      toast.success('Item added successfully');
    }
    reset();
    setEditingItem(null);
  };

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
    toast.success('Item deleted successfully');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            {...register('name', { required: true })}
            placeholder="Item Name"
            className="p-2 border rounded"
          />
          <input
            {...register('quantity', { required: true, valueAsNumber: true })}
            placeholder="Quantity"
            type="number"
            className="p-2 border rounded"
          />
          <input
            {...register('price', { required: true, valueAsNumber: true })}
            placeholder="Price"
            type="number"
            step="0.01"
            className="p-2 border rounded"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            {editingItem ? 'Update Item' : 'Add Item'}
          </button>
        </div>
      </form>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Quantity</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} className="border-b">
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.quantity}</td>
              <td className="p-3">${item.price.toFixed(2)}</td>
              <td className="p-3">
                <button
                  onClick={() => setEditingItem(item)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;