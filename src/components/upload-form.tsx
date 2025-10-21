'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { addProduct } from '@/lib/actions';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = { message: null, errors: {} };

export function UploadForm() {
  const [state, dispatch] = useFormState(addProduct, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.errors && Object.keys(state.errors).length === 0) {
      toast({
        title: 'Success!',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.message && state.errors && Object.keys(state.errors).length > 0) {
       toast({
        variant: "destructive",
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={dispatch} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Product Name</Label>
        <Input id="name" name="name" placeholder="e.g., Artisan Sourdough" />
        {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" placeholder="A brief description of the product." />
         {state.errors?.description && <p className="text-sm text-destructive">{state.errors.description[0]}</p>}
      </div>
      
       <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select name="category" defaultValue="vegetables">
          <SelectTrigger id="category">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bread">Bread</SelectItem>
            <SelectItem value="vegetables">Vegetables</SelectItem>
            <SelectItem value="eggs">Eggs</SelectItem>
          </SelectContent>
        </Select>
        {state.errors?.category && <p className="text-sm text-destructive">{state.errors.category[0]}</p>}
      </div>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" aria-disabled={pending} disabled={pending}>
      {pending ? 'Adding Product...' : 'Add Product'}
    </Button>
  );
}
