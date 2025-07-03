import React, { useState, useEffect, use } from 'react';
import { Check, Gift, BadgeIndianRupee, Shield, Users, IndianRupee, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const image = 'https://imgs.search.brave.com/u9dIl9EC2etXhAWZy_aTC6nOX5AhrHOEAc5kMfGdSmw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/NC80MS9GbGFnX29m/X0luZGlhLnN2Zy81/MTJweC1GbGFnX29m/X0luZGlhLnN2Zy5w/bmc';
const image1 = 'https://www.shutterstock.com/image-photo/us-american-flag-full-frame-260nw-2609455371.jpg';
const image2 = 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg';
const image3 = 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg';

const Packs = () => {
  // const navigate = useNavigate();
  
  // Timer state - each package has its own timer
  const [timers, setTimers] = useState({});

  // Initialize timers for each package
  const initializeTimer = () => {
    const now = Date.now();
    const initialTimers = {};
    
    // Each package gets a different timer duration for variety
    const timerDurations = {
      india: 23 * 60 * 60 + 45 * 60 + 30, // 23h 45m 30s
      us: 22 * 60 * 60 + 30 * 60 + 15,    // 22h 30m 15s
      uk: 23 * 60 * 60 + 15 * 60 + 45,    // 23h 15m 45s
      canada: 22 * 60 * 60 + 55 * 60 + 20  // 22h 55m 20s
    };

    Object.keys(timerDurations).forEach(packageId => {
      // Check if we have a stored end time for this package
      const storedEndTime = localStorage.getItem(`timer_${packageId}`);
      let endTime;
      
      if (storedEndTime && parseInt(storedEndTime) > now) {
        // Use stored end time if it's still valid
        endTime = parseInt(storedEndTime);
      } else {
        // Create new end time
        endTime = now + (timerDurations[packageId] * 1000);
        localStorage.setItem(`timer_${packageId}`, endTime.toString());
      }
      
      initialTimers[packageId] = Math.max(0, Math.floor((endTime - now) / 1000));
    });
    
    return initialTimers;
  };

  // Initialize timers on component mount
  useEffect(() => {
    setTimers(initializeTimer());
  }, []);

  // Update timers every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(prevTimers => {
        const newTimers = { ...prevTimers };
        let shouldUpdate = false;
        
        Object.keys(newTimers).forEach(packageId => {
          if (newTimers[packageId] > 0) {
            newTimers[packageId] -= 1;
            shouldUpdate = true;
          } else {
            // Timer reached 0, restart it
            const timerDurations = {
              india: 23 * 60 * 60 + 45 * 60 + 30,
              us: 22 * 60 * 60 + 30 * 60 + 15,
              uk: 23 * 60 * 60 + 15 * 60 + 45,
              canada: 22 * 60 * 60 + 55 * 60 + 20
            };
            
            const newEndTime = Date.now() + (timerDurations[packageId] * 1000);
            localStorage.setItem(`timer_${packageId}`, newEndTime.toString());
            newTimers[packageId] = timerDurations[packageId];
            shouldUpdate = true;
          }
        });
        
        return shouldUpdate ? newTimers : prevTimers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format time display
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: secs.toString().padStart(2, '0')
    };
  };

  const packages = [
    {
      id: 'india',
      title: 'India Leads',
      price1: '₹1299',
      price: '₹19',
      leads: '25,000',
      bestDeal: true,
      icon: image,
      colorClasses: {
        border: 'border-t-emerald-500',
        iconBg: 'bg-emerald-500/20',
        iconColor: 'text-emerald-500',
        checkColor: 'text-emerald-500',
        button: 'bg-emerald-500 hover:bg-emerald-600',
        timer: 'bg-emerald-500/10 border-emerald-500/30'
      }
    },
    {
      id: 'us',
      title: 'US Leads',
      price1: '₹2199',
      price: '₹199',
      leads: '10,000',
      bestDeal: false,
      icon: image1,
      colorClasses: {
        border: 'border-t-blue-500',
        iconBg: 'bg-blue-500/20',
        iconColor: 'text-blue-500',
        checkColor: 'text-blue-500',
        button: 'bg-blue-500 hover:bg-blue-600',
        timer: 'bg-blue-500/10 border-blue-500/30'
      }
    },
    {
      id: 'uk',
      title: 'UK Leads',
      price1: '₹1199',
      price: '₹129',
      leads: '10,000',
      bestDeal: false,
      icon: image2,
      colorClasses: {
        border: 'border-t-purple-500',
        iconBg: 'bg-purple-500/20',
        iconColor: 'text-purple-500',
        checkColor: 'text-purple-500',
        button: 'bg-purple-500 hover:bg-purple-600',
        timer: 'bg-purple-500/10 border-purple-500/30'
      }
    },
    {
      id: 'canada',
      title: 'Canada Leads',
      price1: '₹2299',
      price: '₹99',
      leads: '10,000',
      bestDeal: false,
      icon: image3,
      colorClasses: {
        border: 'border-t-red-500',
        iconBg: 'bg-red-500/20',
        iconColor: 'text-red-500',
        checkColor: 'text-red-500',
        button: 'bg-red-500 hover:bg-red-600',
        timer: 'bg-red-500/10 border-red-500/30'
      }
    }
  ];

  const features = [
    'Premium Leads',
    'Full Contact Details',
    'Verified Data'
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4" id="packages">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-emerald-500">Lead Packages</span>
          </h1>
          <p className="text-xl text-gray-400 font-normal max-w-3xl mx-auto">
            Choose from our affordable lead packages tailored to your business needs
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => {
            const isImageIcon = typeof pkg.icon === 'string';
            const timeLeft = timers[pkg.id] || 0;
            const { hours, minutes, seconds } = formatTime(timeLeft);
            
            return (
              <div
                key={pkg.id}
                className={`relative bg-gray-700 rounded-2xl p-8 border-t-4 ${pkg.colorClasses.border} 
                           transition-all duration-300 hover:transform hover:-translate-y-3 hover:scale-105 
                           hover:shadow-2xl hover:shadow-black/30`}
              >
                {/* Best Deal Badge */}
                {pkg.bestDeal && (
                  <div className="absolute -top-3 right-5 bg-emerald-500 text-white px-5 py-2 
                                rounded-full text-sm font-semibold uppercase tracking-wide">
                    Best Deal
                  </div>
                )}

                {/* Countdown Timer */}
                <div className={`${pkg.colorClasses.timer} border-2 rounded-xl p-4 mb-6`}>
                  <div className="flex items-center justify-center mb-2">
                    <Clock className={`w-4 h-4 ${pkg.colorClasses.iconColor} mr-2`} />
                    <span className="text-white text-sm font-semibold uppercase tracking-wide">
                      Limited Time Offer
                    </span>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <div className="text-center">
                      <div className="bg-white/10 rounded-lg px-2 py-1 min-w-[40px]">
                        <span className="text-white font-bold text-lg">{hours}</span>
                      </div>
                      <span className="text-white/70 text-xs mt-1 block">HRS</span>
                    </div>
                    <div className="text-white text-lg font-bold flex items-center">:</div>
                    <div className="text-center">
                      <div className="bg-white/10 rounded-lg px-2 py-1 min-w-[40px]">
                        <span className="text-white font-bold text-lg">{minutes}</span>
                      </div>
                      <span className="text-white/70 text-xs mt-1 block">MIN</span>
                    </div>
                    <div className="text-white text-lg font-bold flex items-center">:</div>
                    <div className="text-center">
                      <div className="bg-white/10 rounded-lg px-2 py-1 min-w-[40px]">
                        <span className="text-white font-bold text-lg">{seconds}</span>
                      </div>
                      <span className="text-white/70 text-xs mt-1 block">SEC</span>
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 ${pkg.colorClasses.iconBg} rounded-full flex items-center 
                               justify-center mx-auto mb-8 overflow-hidden`}>
                  {isImageIcon ? (
                    <img 
                      src={pkg.icon} 
                      alt={`${pkg.title} flag`}
                      className="w-10 h-10 object-cover rounded"
                    />
                  ) : (
                    <pkg.icon className={`w-8 h-8 ${pkg.colorClasses.iconColor}`} />
                  )}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-white text-center mb-6">
                  {pkg.title}
                </h2>

                {/* Strikethrough Price */}
                <div className="text-center mb-4">
                  <div 
                    className="text-3xl font-bold text-gray-400 line-through"
                    style={{ textShadow: '0 2px 4px rgba(255,255,255,0.1)' }}
                  >
                    {pkg.price1}
                  </div>
                </div>

                {/* Current Price */}
                <div className="text-center mb-10">
                  <div className="text-5xl font-extrabold text-white">
                    {pkg.price}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center text-white text-lg">
                    <Check className={`w-5 h-5 ${pkg.colorClasses.checkColor} mr-3 flex-shrink-0`} />
                    {pkg.leads} {features[0]}
                  </li>
                  {features.slice(1).map((feature, index) => (
                    <li key={index} className="flex items-center text-white text-lg">
                      <Check className={`w-5 h-5 ${pkg.colorClasses.checkColor} mr-3 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                 onClick={() => navigate('/Payment')}
                  className={`w-full py-4 px-8 rounded-xl text-white font-semibold text-lg 
                             uppercase tracking-wide transition-all duration-300 
                             hover:transform hover:-translate-y-1 hover:shadow-lg 
                             ${pkg.colorClasses.button} active:scale-95 shadow-lg`}
                >
                  Buy Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Packs;