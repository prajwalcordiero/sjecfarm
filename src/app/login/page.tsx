import { LoginForm } from '@/components/login-form';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Leaf } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex justify-center">
            <Leaf className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl font-headline">Admin Login</CardTitle>
          <CardDescription>Enter your credentials to manage products</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
}
