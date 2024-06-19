// pages/login.tsx
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white p-8 shadow-md rounded w-full max-w-md">
          <h1 className="text-2xl mb-4 text-center">Login</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="example@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Continue
            </button>
          </form>
          <div className="text-center mt-4">
            <span className="text-gray-600">OR</span>
          </div>
          <div className="text-center mt-4">
            <span className="text-gray-600">New user? </span>
            <Link href="/register" className="text-blue-500">Create an account</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
