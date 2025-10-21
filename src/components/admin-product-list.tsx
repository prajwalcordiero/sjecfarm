import Image from 'next/image';
import type { Product } from '@/lib/definitions';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { DeleteProductButton } from './delete-product-button';

export function AdminProductList({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center rounded-md border border-dashed p-8 text-center">
        <p className="text-muted-foreground">No products yet. Add one using the form!</p>
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={40}
                  height={40}
                  className="rounded-md object-cover"
                />
              </TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>
                <Badge variant="outline" className="capitalize">{product.category}</Badge>
              </TableCell>
              <TableCell className="text-right">
                <DeleteProductButton productId={product.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
