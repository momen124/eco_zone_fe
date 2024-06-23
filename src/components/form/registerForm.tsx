import { Button } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import TextInput from '../ui/TextInput';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <TextInput
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        required
      />
      <TextInput
        value={confirmPassword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        type="password"
        required
      />
      <Button type="submit" className='flex justify-center text-gray-700'>Continue</Button>
      <div className='text-form-text' style={{ textAlign: 'center', marginTop: '4px' }}>
        Already a member? <Link href="/login">Login</Link>
        
      </div>
    </form>
  );
}
