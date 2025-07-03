import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6" style={{ paddingTop: '10vh' }}>
      <div className="max-w-4xl mx-auto">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Get In <span className="text-green-400">Touch</span>
            </h1>
            <p className="text-slate-400 text-xl">
              Have questions or need custom leads? Contact us today!
            </p>
          </div>

          {/* Contact Information Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Address</h3>
                  <p className="text-slate-400">123 Business Avenue, Tech Park, Bangalore, India</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-slate-400">+91 8597766538</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                  <p className="text-slate-400">sah.industry01@gmail.com</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Working Hours</h3>
                  <p className="text-slate-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="mt-12 pt-8 border-t border-slate-700">
              <h3 className="text-white font-semibold text-xl mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/share/19C3mgF9hS/?mibextid=wwXIfr" 
                  className="flex items-center justify-center w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110 group"
                >
                  <Facebook className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center w-12 h-12 bg-slate-700 hover:bg-sky-500 rounded-full transition-all duration-300 hover:scale-110 group"
                >
                  <Twitter className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </a>
                <a 
                  href="https://www.instagram.com/sahstack?igsh=MXJsY2I4M3htN29laQ==" 
                  className="flex items-center justify-center w-12 h-12 bg-slate-700 hover:bg-pink-600 rounded-full transition-all duration-300 hover:scale-110 group"
                >
                  <Instagram className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center w-12 h-12 bg-slate-700 hover:bg-blue-700 rounded-full transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}