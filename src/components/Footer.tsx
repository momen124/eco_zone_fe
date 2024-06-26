import { FaCcMastercard, FaCcVisa, FaFacebook, FaPaypal, FaStripe, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary-400 py-6 border-t border-secondary-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Facebook" className="text-white-50 hover:text-gray-800"><FaFacebook size={24} /></a>
            <a href="#" aria-label="YouTube" className="text-white-50 hover:text-gray-800"><FaYoutube size={24} /></a>
            <a href="#" aria-label="Telegram" className="text-white-50 hover:text-gray-800"><FaTelegram size={24} /></a>
            <a href="#" aria-label="Twitter" className="text-white-50 hover:text-gray-800"><FaTwitter size={24} /></a>
          </div>
          <div className="flex space-x-8">
            <div className="text-center">
              <h3 className="text-white">Getting started</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-white hover:text-secondary-150">Release Notes</a></li>
                <li><a href="#" className="text-white hover:text-secondary-150">Upgrade Guide</a></li>
                <li><a href="#" className="text-white hover:text-secondary-150">Browser Support</a></li>
                <li><a href="#" className="text-white hover:text-secondary-150">Dark Mode</a></li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-white">Explore</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-white hover:text-secondary-150">Prototyping</a></li>
                <li><a href="#" className="text-white hover:text-secondary-150">Design systems</a></li>
                <li><a href="#" className="text-white hover:text-secondary-150">Pricing</a></li>
                <li><a href="#" className="text-white hover:text-secondary-150">Security</a></li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-white">Community</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-white hover:text-secondary-150">Discussion Forums</a></li>
                <li><a href="#" className="text-white hover:text-secondary-150">Code of Conduct</a></li>
                <li><a href="#" className="text-white hover:text-secondary-150">Contributing</a></li>
                <li><a href="#" className="text-white hover:text-secondary-150">API Reference</a></li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Visa" className="text-white-50 hover:text-gray-800"><FaCcVisa size={32} /></a>
            <a href="#" aria-label="PayPal" className="text-white-50 hover:text-gray-800"><FaPaypal size={32} /></a>
            <a href="#" aria-label="Stripe" className="text-white-50 hover:text-gray-800"><FaStripe size={32} /></a>
            <a href="#" aria-label="MasterCard" className="text-white-50 hover:text-gray-800"><FaCcMastercard size={32} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
