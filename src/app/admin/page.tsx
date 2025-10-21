import { Header } from '@/components/header';
import { AdminDashboard } from '@/components/admin-dashboard';
import { getProducts } from '@/lib/data';

export default async function AdminPage() {
  const products = await getProducts();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto py-8">
        <AdminDashboard initialProducts={products} />
      </main>
    </div>
  );
}
