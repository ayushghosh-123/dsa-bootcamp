import React, { useState } from 'react';
import Countdown from './CountDown';
import ParticleText from '../miniCompo/ParticleTest';
import Login from './Login';
import Register from './Register';

const HeroSection: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-r animate-[gradientAnimation_6s_infinite_alternate] opacity-90"
        style={{
          backgroundSize: '200% 200%',
          backgroundImage: 'linear-gradient(90deg, hsla(100, 80%, 45%, 1) 0%, hsla(212, 82%, 50%, 1) 100%)'
        }}
      />

      {/* Content wrapper */}
      <div className="relative max-w-7xl mx-auto text-center px-6">
        <div className="p-8">
          <ParticleText />
          <p className="text-xl mb-12 text-white font-bold tracking-wide"
            style={{ textShadow: '0 0 10px rgba(0,0,0,0.4)' }}>
            February 16 - March 23, 2025
          </p>
          <div className="flex justify-center items-center">
            <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg shadow-lg">
              <Countdown />
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={() => setIsLoginOpen(true)}
              style={{ background: '#273239' }}
              className="px-8 py-3 text-lg font-semibold text-white rounded-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 shadow-lg hover:shadow-xl backdrop-blur-sm">
              Login
            </button>
            <button
              onClick={() => setIsRegisterOpen(true)}
              style={{ background: '#273239' }}
              className="px-8 py-3 text-lg font-semibold text-white rounded-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 shadow-lg hover:shadow-xl backdrop-blur-sm">
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Login Form - Conditionally Rendered */}
      {isLoginOpen && (
        <Login />
      )}
      {isRegisterOpen && (
        <Register />
      )}

      {/* Tailwind animation keyframes */}
      <style jsx>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;