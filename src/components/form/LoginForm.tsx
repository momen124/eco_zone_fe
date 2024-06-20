import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldError } from 'react-hook-form';
import { loginSchema } from '../../../schemas/LoginSchema';

const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="example@example.com"
          {...register('email')}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{(errors.email as FieldError).message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          id="password"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="********"
          {...register('password')}
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{(errors.password as FieldError).message}</p>}
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Continue
      </button>
    </form>
  );
};

export default LoginForm;
