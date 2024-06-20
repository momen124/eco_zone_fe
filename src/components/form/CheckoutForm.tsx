import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckoutFormValues, checkoutSchema } from '../../../schemas/checkoutSchema';

const initialValues: CheckoutFormValues = {
  contactInfo: {
    phone: '',
    email: '',
  },
  shippingAddress: {
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  },
  payment: {
    cardNumber: '',
    cardName: '',
    expirationDate: '',
    cvc: '',
  },
};

const CheckoutForm = () => {
  const handleSubmit = (values: CheckoutFormValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        const result = checkoutSchema.safeParse(values);
        if (!result.success) {
          return result.error.formErrors.fieldErrors;
        }
        return {};
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-2/3 px-4">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Contact Info</h2>
              <div className="bg-white shadow-md rounded p-6">
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Your phone number</label>
                    <Field name="contactInfo.phone" type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="contactInfo.phone" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email address</label>
                    <Field name="contactInfo.email" type="email" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="contactInfo.email" component="div" className="text-red-500 text-sm" />
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
                    <Field name="shippingAddress.firstName" type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="shippingAddress.firstName" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Last name</label>
                    <Field name="shippingAddress.lastName" type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="shippingAddress.lastName" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Address line 1</label>
                    <Field name="shippingAddress.address1" type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="shippingAddress.address1" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Apt, Suite</label>
                    <Field name="shippingAddress.address2" type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="shippingAddress.address2" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
                    <Field name="shippingAddress.city" type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="shippingAddress.city" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">State/Province</label>
                    <Field name="shippingAddress.state" type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="shippingAddress.state" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Postal code</label>
                    <Field name="shippingAddress.postalCode" type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="shippingAddress.postalCode" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Country</label>
                    <Field name="shippingAddress.country" type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="shippingAddress.country" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Payment</h2>
              <div className="bg-white shadow-md rounded p-6">
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3 mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Card number</label>
                    <Field name="payment.cardNumber" type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="payment.cardNumber" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="w-full px-3 mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name on the card</label>
                    <Field name="payment.cardName" type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="payment.cardName" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Expiration date (MM/YY)</label>
                    <Field name="payment.expirationDate" type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="payment.expirationDate" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">CVC</label>
                    <Field name="payment.cvc" type="text" className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <ErrorMessage name="payment.cvc" component="div" className="text-red-500 text-sm" />
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
                <button type="submit" className="w-full bg-black text-white py-3 rounded" disabled={isSubmitting}>Confirm order</button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;
