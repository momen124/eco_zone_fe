export default function Footer() {
  return (
    <footer className="bg-footer-background py-6 border-t border-footer-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            {/* <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-gray-900"><IconFacebook size={24} /></a>
              <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-gray-900"><IconYouTube size={24} /></a>
              <a href="#" aria-label="Telegram" className="text-gray-500 hover:text-gray-900"><IconTelegram size={24} /></a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-900"><IconTwitter size={24} /></a>
            </div> */}
          </div>
          <div className="flex space-x-8">
            <div>
              <h3 className="text-footer-title hover:text-footer-title-hover">Getting started</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-footer-items hover:text-footer-items-hover">Release Notes</a></li>
                <li><a href="#" className="text-footer-items hover:text-footer-items-hover">Upgrade Guide</a></li>
                <li><a href="#" className="text-footer-items hover:text-footer-items-hover">Browser Support</a></li>
                <li><a href="#" className="text-footer-items hover:text-footer-items-hover">Dark Mode</a></li>
              </ul>

            </div>
            <div>
              <h3 className="text-footer-title hover:text-footer-title-hover">Explore</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-footer-items hover:text-footer-items-hover">Prototyping</a></li>
                <li><a href="#" className="text-footer-items hover:text-footer-items-hover">Design systems</a></li>
                <li><a href="#" className="text-footer-items hover:text-footer-items-hover">Pricing</a></li>
                <li><a href="#" className="text-footer-items hover:text-footer-items-hover">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-footer-title hover:text-footer-title-hover">Community</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-footer-items hover:text-footer-items-hover">Discussion Forums</a></li>
                <li><a href="#" className="text-footer-items hover:text-footer-items-hover">Code of Conduct</a></li>
                <li><a href="#" className="text-footer-items hover:text-footer-items-hover">Contributing</a></li>
                <li><a href="#" className="text-footer-items hover:text-footer-items-hover">API Reference</a></li>
              </ul>
            </div>
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
