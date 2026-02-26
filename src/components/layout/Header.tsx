import Link from 'next/link';
import { Building2, Bell, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 py-3 bg-white border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary-teal p-1.5 rounded-lg text-white">
            <Building2 size={24} />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className="text-gray-900 font-medium px-3 py-1 bg-gray-100/50 rounded-md"
          >
            Home
          </Link>
          <Link 
            href="/jobs" 
            className="text-gray-600 hover:text-primary-teal font-medium transition-colors"
          >
            Browse Jobs
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-gray-700 p-1">
            <Bell size={20} />
          </button>
          
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-primary-dark text-white flex items-center justify-center font-semibold text-sm">
              B
            </div>
            <button className="text-gray-400">
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
