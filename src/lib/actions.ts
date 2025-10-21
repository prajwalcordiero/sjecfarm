'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { createSession, deleteSession, verifyCredentials } from '@/lib/auth';
import { addProduct as addProductToDb, deleteProduct as deleteProductFromDb } from '@/lib/data';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const { username, password } = Object.fromEntries(formData.entries());
    const isValid = verifyCredentials(username as string, password as string);

    if (!isValid) {
      return 'Invalid credentials. Please try again.';
    }

    await createSession(username as string);
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'Invalid credentials.';
    }
    return 'Something went wrong.';
  }

  redirect('/admin');
}

export async function logout() {
  await deleteSession();
  redirect('/');
}

const ProductSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters long.' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters long.' }),
  category: z.enum(['bread', 'vegetables', 'eggs']),
});

export async function addProduct(prevState: any, formData: FormData) {
  const validatedFields = ProductSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    category: formData.get('category'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Failed to create product.',
    };
  }

  const { name, description, category } = validatedFields.data;

  try {
    await addProductToDb({
      name,
      description,
      category,
      // In a real app, you would handle file uploads and get a URL from a storage service.
      // Here, we use picsum.photos for demonstration.
      imageUrl: `https://picsum.photos/seed/${name.replace(/\s+/g, '-')}/600/400`,
      imageHint: `${category} ${name}`,
    });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Product.',
    };
  }

  revalidatePath('/admin');
  revalidatePath('/');
  return { message: `Added product ${name}.`, errors: {} };
}

export async function deleteProduct(productId: string) {
  try {
    await deleteProductFromDb(productId);
    revalidatePath('/admin');
    revalidatePath('/');
    return { message: 'Deleted Product.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Product.' };
  }
}
