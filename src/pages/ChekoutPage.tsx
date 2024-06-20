import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CheckoutForm from '@/components/form/CheckoutForm';

const CheckoutPage = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <CheckoutForm />
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
