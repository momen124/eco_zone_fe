
import Link from 'next/link';
import { useState } from 'react';
import Button from '../Base/Button';
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
}
