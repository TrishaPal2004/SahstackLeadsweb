import React from 'react';
import { ShoppingBag, User, Building, MapPin, CheckCircle, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CustomLeads() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6" style={{ paddingTop: '10vh' }}>
      <div className="max-w-7xl mx-auto">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative z-10">
          {/* Main Content - Left Section */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
              <h1 className="text-4xl font-bold text-white mb-6">
                Need <span className="text-green-400">Custom Leads</span>?
              </h1>
              
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                We understand that every business has unique requirements. 
                Our team can provide customized lead packages tailored 
                specifically to your needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Industry-Specific Leads</h3>
                    <p className="text-slate-400">Target specific industries relevant to your business.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Location-Based Targeting</h3>
                    <p className="text-slate-400">Get leads from specific cities, states, or regions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Demographic Filtering</h3>
                    <p className="text-slate-400">Filter leads based on age, income, job title, and more.</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              onClick={()=>navigate('/contact')}>
                <Info className="w-5 h-5" />
                Get Custom Quote
              </button>
            </div>
          </div>

          {/* Service Cards - Right Section */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {/* B2B Leads Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-blue-500/50 group">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-2xl mb-6 group-hover:bg-blue-500/30 transition-colors duration-300">
                <ShoppingBag className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">B2B Leads</h3>
              <p className="text-slate-300 leading-relaxed">
                High-quality business leads with decision-maker contact information.
              </p>
            </div>

            {/* B2C Leads Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-green-500/50 group">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-2xl mb-6 group-hover:bg-green-500/30 transition-colors duration-300">
                <User className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">B2C Leads</h3>
              <p className="text-slate-300 leading-relaxed">
                Consumer leads with detailed demographic information for targeted marketing.
              </p>
            </div>

            {/* Industry Verticals Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-purple-500/50 group">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-2xl mb-6 group-hover:bg-purple-500/30 transition-colors duration-300">
                <Building className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Industry Verticals</h3>
              <p className="text-slate-300 leading-relaxed">
                Specialized leads for healthcare, finance, education, technology, and more.
              </p>
            </div>

            {/* Geo-Targeted Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-red-500/50 group">
              <div className="flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-2xl mb-6 group-hover:bg-red-500/30 transition-colors duration-300">
                <MapPin className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Geo-Targeted</h3>
              <p className="text-slate-300 leading-relaxed">
                Leads from specific countries, states, cities, or even zip codes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}