import { useEffect, useRef, useState } from 'react';
import { Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <footer
      id="footer"
      ref={sectionRef}
      className="relative py-20 lg:py-24 overflow-hidden"
      style={{ backgroundColor: 'var(--color-dark)' }}
    >
      {/* Animated Gradient Border */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
          backgroundSize: '200% 100%',
          animation: 'gradientShift 8s linear infinite',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Main Text */}
          <h2
            className={`font-serif text-3xl lg:text-4xl font-semibold text-white mb-4 transition-all duration-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{
              transitionDelay: '200ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            Thank you for visiting
          </h2>

          <p
            className={`text-white/70 mb-8 transition-all duration-400 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionDelay: '350ms',
              transitionTimingFunction: 'var(--ease-smooth)',
            }}
          >
            Feel free to reach out and connect
          </p>

          {/* Email Buttons */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-400 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionDelay: '450ms',
              transitionTimingFunction: 'var(--ease-smooth)',
            }}
          >
            <button
              onClick={() => handleEmailClick('yiwen.jin@ucalgary.ca')}
              className="group flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail size={18} className="text-[var(--color-accent)]" />
              <span className="text-white">yiwen.jin@ucalgary.ca</span>
              <ExternalLink size={14} className="text-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button
              onClick={() => handleEmailClick('ywjin37@gmail.com')}
              className="group flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail size={18} className="text-[var(--color-accent)]" />
              <span className="text-white">ywjin37@gmail.com</span>
              <ExternalLink size={14} className="text-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Divider */}
          <div
            className={`w-24 h-[1px] bg-white/20 mx-auto mb-8 transition-all duration-600 ${
              visible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{
              transitionDelay: '550ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          />

          {/* Copyright */}
          <div
            className={`text-white/50 text-sm transition-all duration-400 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDelay: '700ms',
            }}
          >
            <span>&copy; {new Date().getFullYear()} Yiwen Jin. All rights reserved.</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </footer>
  );
}
