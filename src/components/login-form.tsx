'use client'

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/lib/actions';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from 'lucide-react';

export function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input 
          id="username"
          name="username"
          placeholder="admin"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input 
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          required
        />
      </div>
      
      {errorMessage && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Login Failed</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" aria-disabled={pending} disabled={pending}>
      {pending ? 'Logging in...' : 'Log In'}
    </Button>
  );
}
