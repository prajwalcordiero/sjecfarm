export type Product = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  category: 'bread' | 'vegetables' | 'eggs';
  price: number;
};
