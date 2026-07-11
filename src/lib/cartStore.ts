import { useState, useEffect } from 'react';
import { CartItem } from '../types/commerce';

const STORAGE_KEY = 'automobili_parfums_bag_v1';

// Initial state from localStorage if available
function getInitialCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed reading cart from localStorage', e);
    return [];
  }
}

// Global state container for lightweight, fast reactive subscriptions
let cartItems: CartItem[] = getInitialCart();
let isDrawerOpen = false;
const listeners = new Set<() => void>();

function notify() {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed writing cart to localStorage', e);
    }
  }
  listeners.forEach((listener) => listener());
}

export const cartStore = {
  getItems: () => cartItems,
  getIsDrawerOpen: () => isDrawerOpen,

  openDrawer: () => {
    isDrawerOpen = true;
    notify();
  },

  closeDrawer: () => {
    isDrawerOpen = false;
    notify();
  },

  toggleDrawer: () => {
    isDrawerOpen = !isDrawerOpen;
    notify();
  },

  addItem: (product: {
    productId: string;
    variantId: string;
    name: string;
    concentration: string;
    volume: string;
    unitPriceMinor: number;
    image: string;
    quantity?: number;
  }) => {
    const qty = product.quantity || 1;
    const existingIndex = cartItems.findIndex(
      (item) => item.productId === product.productId && item.variantId === product.variantId
    );

    if (existingIndex > -1) {
      cartItems = cartItems.map((item, idx) =>
        idx === existingIndex
          ? { ...item, quantity: item.quantity + qty }
          : item
      );
    } else {
      const newLineId = `${product.productId}-${product.variantId}-${Date.now()}`;
      cartItems = [
        ...cartItems,
        {
          lineId: newLineId,
          productId: product.productId,
          variantId: product.variantId,
          name: product.name,
          concentration: product.concentration,
          volume: product.volume,
          unitPriceMinor: product.unitPriceMinor,
          quantity: qty,
          image: product.image,
        },
      ];
    }
    isDrawerOpen = true;
    notify();
  },

  updateQuantity: (lineId: string, quantity: number) => {
    if (quantity <= 0) {
      cartItems = cartItems.filter((item) => item.lineId !== lineId);
    } else {
      cartItems = cartItems.map((item) =>
        item.lineId === lineId ? { ...item, quantity } : item
      );
    }
    notify();
  },

  removeItem: (lineId: string) => {
    cartItems = cartItems.filter((item) => item.lineId !== lineId);
    notify();
  },

  clearCart: () => {
    cartItems = [];
    notify();
  },
};

export function useCart() {
  const [, setTick] = useState(0);

  useEffect(() => {
    const handleChange = () => setTick((t) => t + 1);
    listeners.add(handleChange);
    return () => {
      listeners.delete(handleChange);
    };
  }, []);

  const items = cartStore.getItems();
  const subtotalMinor = items.reduce(
    (acc, item) => acc + item.unitPriceMinor * item.quantity,
    0
  );
  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return {
    items,
    subtotalMinor,
    totalCount,
    isDrawerOpen: cartStore.getIsDrawerOpen(),
    openDrawer: cartStore.openDrawer,
    closeDrawer: cartStore.closeDrawer,
    toggleDrawer: cartStore.toggleDrawer,
    addItem: cartStore.addItem,
    updateQuantity: cartStore.updateQuantity,
    removeItem: cartStore.removeItem,
    clearCart: cartStore.clearCart,
  };
}
