import React from 'react'
import { FaFacebook, FaYoutube, FaTelegram } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">NEXTON</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaFacebook className="mr-2" />
              <a href="#" className="text-gray-700 hover:text-blue-500">Facebook</a>
            </li>
            <li className="flex items-center">
              <FaYoutube className="mr-2" />
              <a href="#" className="text-gray-700 hover:text-blue-500">YouTube</a>
            </li>
            <li className="flex items-center">
              <FaTelegram className="mr-2" />
              <a href="#" className="text-gray-700 hover:text-blue-500">Telegram</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Getting started</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Release Notes</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Upgrade Guide</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Browser Support</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Dark Mode</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Prototyping</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Design Systems</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Pricing</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Security</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Community</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Discussion Forums</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Code of Conduct</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Contributing</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">API Reference</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center text-gray-500">
        <p>&copy; NEXTON eCommerce. All rights reserved.</p>
      </div>
      <div className="container mx-auto mt-4 flex justify-center space-x-4">
        <img src="/path/to/visa-logo.png" alt="Visa" className="h-6"/>
        <img src="/path/to/paypal-logo.png" alt="PayPal" className="h-6"/>
        <img src="/path/to/amex-logo.png" alt="Amex" className="h-6"/>
      </div>
    </footer>
  )
}

export default Footer
