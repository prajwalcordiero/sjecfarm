import 'server-only';
import { Product } from './definitions';
import data from './placeholder-images.json';

// In a real application, this would be a database.
// For this example, we're using an in-memory array.
let products: Product[] = [...data.placeholderImages];

// Simulate database latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getProducts(): Promise<Product[]> {
  await delay(500); // Simulate network delay
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  await delay(200);
  return products.find(p => p.id === id);
}

export async function addProduct(product: Omit<Product, 'id'>): Promise<Product> {
  await delay(1000); // Simulate upload/creation delay
  const newProduct: Product = {
    ...product,
    id: (Math.random() + 1).toString(36).substring(2), // simple unique enough ID
  };
  products = [newProduct, ...products];
  return newProduct;
}

export async function deleteProduct(id: string): Promise<{ success: boolean }> {
  await delay(500);
  const initialLength = products.length;
  products = products.filter(p => p.id !== id);
  return { success: products.length < initialLength };
}
