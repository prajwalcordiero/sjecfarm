import { Header } from '@/components/header';
import { ProductGrid } from '@/components/product-grid';
import { getProducts } from '@/lib/data';

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground mb-2">
              Our Fresh Selection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the best of the farm, from crusty breads to fresh eggs and vibrant vegetables, all sourced with care.
            </p>
          </section>
          <ProductGrid products={products} />
        </div>
      </main>
      <footer className="py-6 bg-background border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Farm Fresh Finds. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
