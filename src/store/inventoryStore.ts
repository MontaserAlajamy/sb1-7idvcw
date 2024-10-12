import create from 'zustand';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface InventoryStore {
  items: InventoryItem[];
  addItem: (item: Omit<InventoryItem, 'id'>) => void;
  updateItem: (id: number, item: Partial<InventoryItem>) => void;
  deleteItem: (id: number) => void;
}

export const useInventoryStore = create<InventoryStore>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, { ...item, id: Date.now() }],
    })),
  updateItem: (id, updatedItem) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      ),
    })),
  deleteItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));