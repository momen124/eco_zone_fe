import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RegisterForm from '@/components/form/registerForm';
import type { NextPage } from 'next';

const RegisterPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white p-8 shadow-md rounded w-full max-w-md">
          <h1 className="text-2xl mb-4 text-center">Register</h1>
          <RegisterForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
