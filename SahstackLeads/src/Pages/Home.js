import React, { useState } from 'react';
import { CheckCircle, Eye, Phone, Mail, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const Navigate=useNavigate();
  const scrollToHowItWorks = () => {
  const section = document.getElementById('how-it-works');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
const scrollToHowItWorks1 = () => {
  const section = document.getElementById('packages');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-900 rounded-xl p-6 max-w-md w-full border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
          </div>
          {children} 
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden " style={{ paddingLeft: '12vh',paddingRight: '22vh'}}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500 rounded-full opacity-10 animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-teal-500 rounded-full opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16" style={{ paddingTop: '22vh'}}>
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-600 bg-opacity-20 border border-green-500 rounded-full">
              <span className="text-green-400 font-medium text-sm">Premium Lead Solutions</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-blue-300">Get 50,000</span>
                <br />
                <span className="text-green-400">Indian Leads</span>
                <br />
                <span className="text-white">For Just ₹19</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Supercharge your marketing campaigns with high-quality, verified leads at unbeatable prices.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25" onClick={scrollToHowItWorks1}
              >
                Buy Now
              </button>
              <button className="px-8 py-4 border border-gray-400 text-gray-300 hover:text-white hover:border-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105" onClick={scrollToHowItWorks}>
                How It Works
              </button>
            </div>
          </div>

          {/* Right Content - Lead Preview Card */}
          <div className="relative">
            {/* Floating card with glassmorphism effect */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Premium Leads</h3>
                  <p className="text-gray-400 text-sm">Verified & Updated</p>
                </div>
              </div>

              {/* Lead Features */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </span>
                </div>
              </div>

              {/* Sample data preview with blur effect */}
              <div className="mt-6 p-4 bg-black bg-opacity-20 rounded-lg">
                <div className="text-xs text-gray-400 mb-2">Sample Data Preview:</div>
                <div className="space-y-2 text-sm">
                  <div className="text-white filter blur-sm hover:blur-none transition-all duration-300">
                    Rajesh Kumar - +91 98765-43210
                  </div>
                  <div className="text-white filter blur-sm hover:blur-none transition-all duration-300">
                    Priya Sharma - priya@email.com
                  </div>
                  <div className="text-white filter blur-sm hover:blur-none transition-all duration-300">
                    Mumbai, Maharashtra
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements around the card */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-bounce delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Purchase Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Get Your Leads">
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">₹19 Only</div>
            <div className="text-gray-400">50,000 Premium Indian Leads</div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">Verified contact information</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">Updated within 30 days</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">Instant download</span>
            </div>
          </div>

          <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300">
            Purchase Now
          </button>
          
          <div className="text-xs text-gray-400 text-center">
            Secure payment • 30-day money back guarantee
          </div>
        </div>
      </Modal>
    </div>
  );
}
