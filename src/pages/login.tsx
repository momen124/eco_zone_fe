import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginForm from '@/components/form/LoginForm';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white p-8 shadow-md rounded w-full max-w-md">
          <h1 className="text-2xl mb-4 text-center">Login</h1>
          <LoginForm />
          <div className="text-center mt-4">
            <span className="text-gray-600">OR</span>
          </div>
          <div className="text-center mt-4">
            <span className="text-gray-600">New user? </span>
            <Link href="/register" legacyBehavior>
              <a className="text-blue-500">Create an account</a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
