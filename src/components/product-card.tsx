'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { Product } from '@/lib/definitions';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Props = { product: Product; className?: string };

export default function ProductCard({ product, className }: Props) {
  const router = useRouter();

  const handleBuyNow = () => {
    const query = new URLSearchParams({
      name: product.name,
      price: product.price?.toString() || '0',
      image: product.imageUrl,
    }).toString();

    router.push(`/buynow?${query}`);
  };

  return (
    <Card className={cn('overflow-hidden transition-all duration-300 hover:shadow-xl', className)}>
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] w-full">
          {/* next/image requires external hosts config, but keep as you had */}
          <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
        </div>
      </CardHeader>

      <CardContent className="p-4 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg font-headline">{product.name}</CardTitle>
          <Badge variant="secondary" className="capitalize">{product.category}</Badge>
        </div>

        <CardDescription className="text-sm text-muted-foreground">{product.description}</CardDescription>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-green-600 font-semibold">
            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.price)}
          </div>


          <button
            onClick={handleBuyNow}
            className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Buy Now
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
