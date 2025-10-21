import type { Product } from '@/lib/definitions';
import { UploadForm } from './upload-form';
import { AdminProductList } from './admin-product-list';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type AdminDashboardProps = {
  initialProducts: Product[];
};

export function AdminDashboard({ initialProducts }: AdminDashboardProps) {
  return (
    <div className="grid gap-8 md:grid-cols-12">
      <div className="md:col-span-4 lg:col-span-3">
        <Card>
          <CardHeader>
            <CardTitle>Add New Product</CardTitle>
            <CardDescription>Fill out the form to add a new item to the store.</CardDescription>
          </CardHeader>
          <CardContent>
            <UploadForm />
          </CardContent>
        </Card>
      </div>
      <div className="md:col-span-8 lg:col-span-9">
         <Card>
          <CardHeader>
            <CardTitle>Manage Products</CardTitle>
            <CardDescription>View and delete existing products.</CardDescription>
          </CardHeader>
          <CardContent>
            <AdminProductList products={initialProducts} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
