export default function Footer() {
    return (
      <footer className="bg-white py-6 border-t">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">EcoZone eCommerce</h2>
              {/* <div className="flex space-x-4 mt-2">
                <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-gray-900"><IconFacebook size={24} /></a>
                <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-gray-900"><IconYouTube size={24} /></a>
                <a href="#" aria-label="Telegram" className="text-gray-500 hover:text-gray-900"><IconTelegram size={24} /></a>
                <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-900"><IconTwitter size={24} /></a>
              </div> */}
            </div>
            <div className="flex space-x-8">
              <div>
                <h3 className="text-lg font-semibold">Getting started</h3>
                <ul className="mt-2 space-y-2">
                  <li><a href="#" className="text-gray-500 hover:text-gray-900">Release Notes</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-gray-900">Upgrade Guide</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-gray-900">Browser Support</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-gray-900">Dark Mode</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Explore</h3>
                <ul className="mt-2 space-y-2">
                  <li><a href="#" className="text-gray-500 hover:text-gray-900">Prototyping</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-gray-900">Design systems</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-gray-900">Pricing</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-gray-900">Security</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Community</h3>
                <ul className="mt-2 space-y-2">
                  <li><a href="#" className="text-gray-500 hover:text-gray-900">Discussion Forums</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-gray-900">Code of Conduct</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-gray-900">Contributing</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-gray-900">API Reference</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-4 text-gray-500">
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
  