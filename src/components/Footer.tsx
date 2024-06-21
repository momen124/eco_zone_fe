export default function Footer() {
  return (
    <footer className="bg-primary-50 py-6 border-t border-deep-blue-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-deep-blue-500">EcoZone eCommerce</h2>
            {/* <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-gray-900"><IconFacebook size={24} /></a>
              <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-gray-900"><IconYouTube size={24} /></a>
              <a href="#" aria-label="Telegram" className="text-gray-500 hover:text-gray-900"><IconTelegram size={24} /></a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-900"><IconTwitter size={24} /></a>
            </div> */}
          </div>
          <div className="flex space-x-8">
            <div>
              <h3 className="text-lg font-semibold text-deep-blue-500">Getting started</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-secondary-500 hover:text-deep-blue-500">Release Notes</a></li>
                <li><a href="#" className="text-secondary-500 hover:text-deep-blue-500">Upgrade Guide</a></li>
                <li><a href="#" className="text-secondary-500 hover:text-deep-blue-500">Browser Support</a></li>
                <li><a href="#" className="text-secondary-500 hover:text-deep-blue-500">Dark Mode</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-deep-blue-500">Explore</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-secondary-500 hover:text-deep-blue-500">Prototyping</a></li>
                <li><a href="#" className="text-secondary-500 hover:text-deep-blue-500">Design systems</a></li>
                <li><a href="#" className="text-secondary-500 hover:text-deep-blue-500">Pricing</a></li>
                <li><a href="#" className="text-secondary-500 hover:text-deep-blue-500">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-deep-blue-500">Community</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-secondary-500 hover:text-deep-blue-500">Discussion Forums</a></li>
                <li><a href="#" className="text-secondary-500 hover:text-deep-blue-500">Code of Conduct</a></li>
                <li><a href="#" className="text-secondary-500 hover:text-deep-blue-500">Contributing</a></li>
                <li><a href="#" className="text-secondary-500 hover:text-deep-blue-500">API Reference</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-4 text-secondary-500">
            EcoZone eCommerce. © 2024
          </div>
          {/* <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Visa" className="text-gray-500 hover:text-gray-900"><IconVisa size={32} /></a>
            <a href="#" aria-label="PayPal" className="text-gray-500 hover:text-gray-900"><IconPayPal size={32} /></a>
            <a href="#" aria-label="Stripe" className="text-gray-500 hover:text-gray-900"><IconStripe size={32} /></a>
            <a href="#" aria-label="MasterCard" className="text-gray-500 hover:text-gray-900"><IconMasterCard size={32} /></a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
