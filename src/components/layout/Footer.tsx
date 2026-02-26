import Link from 'next/link';
import { Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#172554] py-12 md:py-16 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="bg-white/10 p-2 rounded-lg text-white">
                <Building2 size={24} />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The premier job portal.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-white mb-4">For Job Seekers</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/jobs" className="hover:text-white transition-colors">Browse Jobs</Link></li>
              <li><Link href="/profile" className="hover:text-white transition-colors">Create Profile</Link></li>
              <li><Link href="/applications" className="hover:text-white transition-colors">My Applications</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-white mb-4">For Employers</h3>
             <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/post-job" className="hover:text-white transition-colors">Post a Job</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
               <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
             <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © 2026 All rights reserved. ATS platform.
        </div>
      </div>
    </footer>
  );
}
