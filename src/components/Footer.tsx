
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TS</span>
              </div>
              <span className="text-2xl font-bold">Simmons Builders</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building dreams with exceptional craftsmanship and unwavering commitment 
              to quality for over 20 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Custom Home Building</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Home Renovations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Commercial Construction</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Interior Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Home Maintenance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Smart Home Integration</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-amber-400 transition-colors">Projects</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-amber-400 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">Main: (256) 123-4567</p>
                  <p className="text-gray-400">Emergency: (256) 911-BUILD</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-amber-400 mt-1" size={16} />
                <p className="text-gray-400">info@simmonsbuilders.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-amber-400 mt-1" size={16} />
                <p className="text-gray-400">123 Builder's Lane<br />Huntsville, AL 35810</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Simmons Builders. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">License Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
