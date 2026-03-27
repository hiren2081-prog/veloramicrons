import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = '919119711811';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Velora Microns LLP
            </h3>
            <p className="text-slate-300 mb-4">
              Premium Calcium Carbonate (CaCO₃) manufacturer based in Morbi, Gujarat - delivering quality and reliability to industries across India.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-slate-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Facebook">

                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn">

                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Twitter">

                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/applications" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Applications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Products</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Calcium Carbonate Powder
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Coated Calcium Carbonate
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Micronized CaCO₃
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Custom Mesh Grades
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Morbi, Gujarat, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+919119711811" className="text-slate-300 hover:text-blue-400 transition-colors">
                  +91 9119711811
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@veloramicrons.com" className="text-slate-300 hover:text-blue-400 transition-colors">veloramicrons@gmail.com

                </a>
              </li>
              <li>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors mt-2">

                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Velora Microns LLP. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;