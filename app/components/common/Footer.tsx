import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                     <div className="grid grid-cols-2 gap-0.5">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm opacity-60"></div>
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm opacity-40"></div>
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></div>
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm opacity-80"></div>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">yuno</span>
                </div>
                <p className="text-gray-500 text-sm mb-6 max-w-xs">
                    Technology Infrastructure that Automates, Connects and Empowers Your Business.
                </p>
            </div>

            <div>
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Products</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                    <li><Link href="/products/whatsapp" className="hover:text-blue-600">WhatsApp</Link></li>
                    <li><Link href="/products/instagram" className="hover:text-blue-600">Instagram</Link></li>
                    <li><Link href="/products/messenger" className="hover:text-blue-600">Messenger</Link></li>
                    <li><Link href="/products/email" className="hover:text-blue-600">Email</Link></li>
                    <li><Link href="/products/calls" className="hover:text-blue-600">Calls</Link></li>
                    <li><Link href="/nova" className="hover:text-blue-600">NOVA AI</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Industries</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                    <li><Link href="#" className="hover:text-blue-600">E-commerce</Link></li>
                    <li><Link href="#" className="hover:text-blue-600">Travel</Link></li>
                    <li><Link href="#" className="hover:text-blue-600">Mobility</Link></li>
                    <li><Link href="#" className="hover:text-blue-600">Gaming</Link></li>
                </ul>
            </div>

             <div>
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Company</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                    <li><Link href="/about-us" className="hover:text-blue-600">About Us</Link></li>
                    <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
                    <li><Link href="/book-a-demo" className="hover:text-blue-600">Book a Demo</Link></li>
                    <li><Link href="/pricing" className="hover:text-blue-600">Pricing</Link></li>
                </ul>
            </div>
            
            <div>
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Resources</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                    <li><Link href="/integrations" className="hover:text-blue-600">Integrations</Link></li>
                    <li><Link href="/trust-and-security" className="hover:text-blue-600">Trust & Security</Link></li>
                    <li><Link href="/terms-and-conditions" className="hover:text-blue-600">Terms & Conditions</Link></li>
                </ul>
            </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">© 2024 Yuno. All rights reserved.</p>
            <div className="flex gap-6">
                {/* Social Icons Placeholder */}
                <div className="w-5 h-5 bg-gray-200 rounded-full hover:bg-blue-600 transition-colors cursor-pointer"></div>
                <div className="w-5 h-5 bg-gray-200 rounded-full hover:bg-blue-600 transition-colors cursor-pointer"></div>
                <div className="w-5 h-5 bg-gray-200 rounded-full hover:bg-blue-600 transition-colors cursor-pointer"></div>
            </div>
        </div>
      </div>
    </footer>
  );
};

