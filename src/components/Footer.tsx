import { FaCcMastercard, FaCcVisa, FaFacebook, FaPaypal, FaStripe, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Facebook"><FaFacebook size={24} /></a>
            <a href="#" aria-label="YouTube"><FaYoutube size={24} /></a>
            <a href="#" aria-label="Telegram"><FaTelegram size={24} /></a>
            <a href="#" aria-label="Twitter"><FaTwitter size={24} /></a>
          </div>
          <div className="flex space-x-8">
            <div className="text-center">
              <h3>Getting started</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#">Release Notes</a></li>
                <li><a href="#">Upgrade Guide</a></li>
                <li><a href="#">Browser Support</a></li>
                <li><a href="#">Dark Mode</a></li>
              </ul>
            </div>
            <div className="text-center">
              <h3>Explore</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#">Prototyping</a></li>
                <li><a href="#">Design systems</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
            <div className="text-center">
              <h3>Community</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#">Discussion Forums</a></li>
                <li><a href="#">Code of Conduct</a></li>
                <li><a href="#">Contributing</a></li>
                <li><a href="#">API Reference</a></li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Visa"><FaCcVisa size={32} /></a>
            <a href="#" aria-label="PayPal"><FaPaypal size={32} /></a>
            <a href="#" aria-label="Stripe"><FaStripe size={32} /></a>
            <a href="#" aria-label="MasterCard"><FaCcMastercard size={32} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
