// src/pages/CheckoutPage.tsx

import Header from '../components/Header';
import Footer from '../components/Footer';

const CheckoutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto flex-grow py-10">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <nav className="mb-8">
          <a href="/" className="text-gray-600">Homepage</a> / <span className="text-gray-800">Checkout</span>
        </nav>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-2/3 px-4">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Contact Info</h2>
              <div className="bg-white shadow-md rounded p-6">
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Your phone number</label>
                    <input type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email address</label>
                    <input type="email" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
              <div className="bg-white shadow-md rounded p-6">
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2">First name</label>
                    <input type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Last name</label>
                    <input type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Address line 1</label>
                    <input type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Apt, Suite</label>
                    <input type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Address line 2</label>
                    <input type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
                    <input type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2">State/Province</label>
                    <input type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Postal code</label>
                    <input type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                </div>
                <div className="w-full px-3">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Country</label>
                  <input type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Payment</h2>
              <div className="bg-white shadow-md rounded p-6">
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3 mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Card number</label>
                    <input type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                  <div className="w-full px-3 mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name on the card</label>
                    <input type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Expiration date (MM/YY)</label>
                    <input type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">CVC</label>
                    <input type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <div className="bg-white shadow-md rounded p-6">
              <h2 className="text-xl font-bold mb-4">Order summary</h2>
              <div className="flex items-center mb-4">
                <img src="path/to/image.jpg" alt="Black Automatic Watch" className="w-20 h-20 object-cover mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">Black Automatic Watch</h3>
                  <p className="text-gray-600">One size</p>
                  <p className="text-gray-800">$169.99</p>
                  <p className="text-gray-500 line-through">$199.99</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <img src="path/to/image.jpg" alt="Black Automatic Watch" className="w-20 h-20 object-cover mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">Black Automatic Watch</h3>
                  <p className="text-gray-600">One size</p>
                  <p className="text-gray-800">$169.99</p>
                  <p className="text-gray-500 line-through">$199.99</p>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800">$169.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Shipping estimate</span>
                  <span className="text-gray-800">$5.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Tax estimate</span>
                  <span className="text-gray-800">$24.90</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600 font-bold">Order total</span>
                  <span className="text-gray-800 font-bold">$199.89</span>
                </div>
                <button className="w-full bg-black text-white py-3 rounded">Confirm order</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
