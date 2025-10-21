import Image from 'next/image';
import { Wheat, Carrot, Egg } from 'lucide-react';
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

const categoryIcons = {
  bread: <Wheat className="h-4 w-4" />,
  vegetables: <Carrot className="h-4 w-4" />,
  eggs: <Egg className="h-4 w-4" />,
};

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Card className={cn('overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1', className)}>
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product.imageHint}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg font-headline">{product.name}</CardTitle>
          <Badge variant="secondary" className="flex items-center gap-1 capitalize">
            {categoryIcons[product.category]}
            {product.category}
          </Badge>
        </div>
        <CardDescription>{product.description}</CardDescription>
      </CardContent>
    </Card>
  );
}
