import type { Product } from '@/lib/definitions';
import { ProductCard } from './product-card';

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground">No products available at the moment. Please check back later!</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
