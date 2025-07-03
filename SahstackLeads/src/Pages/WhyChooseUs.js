import React from 'react';
import { Shield, DollarSign, Settings, Zap, BarChart3, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Verified Data',
      description: 'All our leads are thoroughly verified to ensure accuracy and reliability, maximizing your conversion rates.',
      icon: Shield,
      color: 'emerald'
    },
    {
      id: 2,
      title: 'Unbeatable Pricing',
      description: 'Get high-quality leads at the lowest prices in the market, making our services accessible for businesses of all sizes.',
      icon: DollarSign,
      color: 'blue'
    },
    {
      id: 3,
      title: 'Customization Options',
      description: 'Get leads tailored to your specific requirements, including industry, location, and other demographic factors.',
      icon: Settings,
      color: 'purple'
    },
    {
      id: 4,
      title: 'Instant Delivery',
      description: 'Receive your leads instantly after payment, allowing you to start your marketing campaigns without delay.',
      icon: Zap,
      color: 'emerald'
    },
    {
      id: 5,
      title: 'Multiple Formats',
      description: 'Receive your leads in various formats including Excel, CSV, and PDF, for easy integration with your systems.',
      icon: BarChart3,
      color: 'blue'
    },
    {
      id: 6,
      title: '24/7 Support',
      description: 'Our dedicated support team is available round the clock to assist you with any queries or concerns.',
      icon: Headphones,
      color: 'purple'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      emerald: {
        iconBg: 'bg-emerald-500/20',
        iconColor: 'text-emerald-500',
        border: 'border-emerald-500/30'
      },
      blue: {
        iconBg: 'bg-blue-500/20',
        iconColor: 'text-blue-500',
        border: 'border-blue-500/30'
      },
      purple: {
        iconBg: 'bg-purple-500/20',
        iconColor: 'text-purple-500',
        border: 'border-purple-500/30'
      }
    };
    return colorMap[color];
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose <span className="text-emerald-500">SAHSTACK</span> Leads
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We provide high-quality, verified leads to help your business grow
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            const colorClasses = getColorClasses(feature.color);
            
            return (
              <div
                key={feature.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 
                           border border-gray-700/50 hover:border-gray-600/50
                           transition-all duration-300 hover:transform hover:-translate-y-2
                           hover:shadow-2xl hover:shadow-black/20"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${colorClasses.iconBg} rounded-full flex items-center 
                               justify-center mb-6 ${colorClasses.border} border`}>
                  <IconComponent className={`w-7 h-7 ${colorClasses.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Optional CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold 
                           px-8 py-4 rounded-xl text-lg transition-all duration-300 
                           hover:transform hover:-translate-y-1 hover:shadow-lg
                           active:scale-95" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Start Your Campaign Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;