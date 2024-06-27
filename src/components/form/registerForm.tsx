
import { registerSchema } from '@/schemas/registerSchema';
import { showNotification } from '@mantine/notifications';
import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../Base/Button';
import TextInput from '../ui/TextInput';

const RegisterForm: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const logError = async (error: unknown) => {
    try {
      await fetch('/api/logError', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error }),
      });
    } catch (err) {
      console.error('Failed to log error:', err);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate form data using zod schema
    const formData = { email, password, confirmPassword };
    const parsed = registerSchema.safeParse(formData);

    if (!parsed.success) {
      const errorMessage = parsed.error.errors.map(error => error.message).join(', ');
      showNotification({
        title: 'Validation Error',
        message: errorMessage,
        color: 'red',
      });

      // Log the error
      await logError(errorMessage);
      return;
    }

    if (password !== confirmPassword) {
      const errorMessage = 'Passwords do not match!';
      showNotification({
        title: 'Error',
        message: errorMessage,
        color: 'red',
      });

      // Log the error
      await logError(errorMessage);
      return;
    }

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false, // Ensure no redirection
      });

      if (res?.error) {
        showNotification({
          title: 'Registration failed',
          message: res.error,
          color: 'red',
        });

        // Log the error
        await logError(res.error);
      } else {
        showNotification({
          title: 'Registration successful',
          message: 'You have successfully registered!',
          color: 'green',
        });
      }
    } catch (error) {
      const errorMessage = 'An error occurred. Please try again later.';
      showNotification({
        title: 'An error occurred',
        message: errorMessage,
        color: 'red',
      });

      // Log the error
      await logError(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-4 w-full'>
      <TextInput
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className='w-full'
      />
      <TextInput
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        required
        className='w-full'
      />
      <TextInput
        value={confirmPassword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        type="password"
        required
        className='w-full'
      />
      <Button variant='primary' namespace='common' text="continue" type="submit" />
      
      <div className='taxt-form-402' style={{ textAlign: 'center', marginTop: '4px' }}>
        Already a member? <Link href="/login">Login</Link>
        
      </div>
    </form>
  );
};

export default RegisterForm;
