import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Choose Your Package',
      description: 'Select from our range of lead packages based on your target region and requirements.',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Make Payment',
      description: 'Complete your purchase securely using our payment gateway with UPI, card, or bank transfer.',
      color: 'bg-emerald-500'
    },
    {
      id: 3,
      title: 'Receive Your Leads',
      description: 'Get instant access to your leads via email download link after successful payment.',
      color: 'bg-purple-500'
    }
  ];
 const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4" id='how-it-works'>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How It <span className="text-emerald-500">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get your premium leads in three simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 
                         border border-gray-700/50 hover:border-gray-600/50
                         transition-all duration-300 hover:transform hover:-translate-y-2
                         hover:shadow-2xl hover:shadow-black/20"
            >
              {/* Step Number Circle */}
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center 
                              justify-center mb-8 mx-auto shadow-lg`}>
                <span className="text-2xl font-bold text-white">
                  {step.id}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="text-2xl font-bold text-white text-center mb-6">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-400 text-center text-lg leading-relaxed">
                {step.description}
              </p>

              {/* Connecting Line (except for last step) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-6 lg:-right-12">
                  <div className="w-6 lg:w-12 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700">
                  </div>
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-gray-600 rounded-full">
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Optional CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold 
                           px-8 py-4 rounded-xl text-lg transition-all duration-300 
                           hover:transform hover:-translate-y-1 hover:shadow-lg
                           active:scale-95" style={{ boxShadow: '0 4px 20px rgba(250, 250, 250, 0.2)' }} onClick={() => navigate('/packages')}>
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;