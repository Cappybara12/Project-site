export const NovaFooter = () => {
  return (
    <footer className="relative bg-black border-t border-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © 2025 ALTURA. ALL RIGHTS RESERVED
          </p>

          {/* Language Selector */}
          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-400 hover:text-white transition-colors">
              EN
            </button>
            <span className="text-gray-700">/</span>
            <button className="text-sm text-gray-400 hover:text-white transition-colors">
              ES
            </button>
            <span className="text-gray-700">/</span>
            <button className="text-sm text-gray-400 hover:text-white transition-colors">
              PT
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

