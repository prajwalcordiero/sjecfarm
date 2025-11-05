'use client'

import { useFormStatus } from 'react-dom';
import { Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { deleteProduct } from '@/lib/actions';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="destructive"
      type="submit"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? 'Deleting...' : 'Delete'}
    </Button>
  )
}


export function DeleteProductButton({ productId }: { productId: string }) {
  const deleteProductWithId = async (formData: FormData) => {
    const result = await deleteProduct(productId);
    // You can handle the result here if needed
    // For example, show a toast notification
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Trash2 className="h-4 w-4 text-destructive" />
          <span className="sr-only">Delete Product</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form action={deleteProductWithId}>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the product
              from the servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <DeleteButton />
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
