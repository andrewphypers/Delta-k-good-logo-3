import { Mail, Phone, MapPin } from 'lucide-react';
import deltaKLogo from '@/assets/delta-k-logo.png';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={deltaKLogo} 
                alt="Delta K - Kootenay Group" 
                className="h-16 w-auto"
              />
              <div className="flex flex-col justify-center">
                <div className="text-2xl font-bold text-white">
                  DELTA K
                </div>
                <div className="text-xs tracking-wider text-amber-400">
                  KOOTENAY GROUP
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              100% Indigenous-owned electrical company providing professional services throughout the Kootenays region of British Columbia.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+12504028124" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>(250)-402-8124</span>
              </a>
              <a href="mailto:steve@deltatec.ca" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>steve@deltatec.ca</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Serving the Kootenays,<br />British Columbia</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                New Construction Electrical
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                Renovations & Upgrades
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                Industrial Maintenance
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                Commercial Services
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                Residential Services
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Delta K - Kootenay Group. All rights reserved.</p>
            <p className="text-amber-400/60">100% Indigenous-owned and operated</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
