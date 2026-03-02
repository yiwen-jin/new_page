import { useEffect, useRef, useState } from 'react';
import { Mail, ExternalLink, User, FileText, GraduationCap, Linkedin } from 'lucide-react';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-warm-beige)' }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, var(--color-accent-light) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(74, 111, 165, 0.1) 0%, transparent 40%)`,
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Name */}
            <div className="mb-6">
              <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-[var(--color-dark)] mb-2">
                {'Yiwen Jin'.split('').map((char, index) => (
                  <span
                    key={index}
                    className={`inline-block transition-all duration-500 ${
                      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{
                      transitionDelay: `${600 + index * 25}ms`,
                      transitionTimingFunction: 'var(--ease-expo-out)',
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
                <span
                  className={`inline-block text-2xl lg:text-3xl font-normal text-[var(--color-text-light)] ml-2 transition-all duration-500 ${
                    visible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
                  }`}
                  style={{
                    transitionDelay: '900ms',
                    transitionTimingFunction: 'var(--ease-elastic)',
                  }}
                >
                  , Ph.D.
                </span>
              </h1>
            </div>

            {/* Title */}
            <div
              className={`overflow-hidden mb-4 transition-all duration-600 ${
                visible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: '1000ms',
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            >
              <p className="text-xl lg:text-2xl font-medium text-[var(--color-dark)]">
                Assistant Professor
              </p>
            </div>

            {/* Affiliation */}
            <div
              className={`transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{
                transitionDelay: '1100ms',
                transitionTimingFunction: 'var(--ease-smooth)',
              }}
            >
              <p className="text-lg text-[var(--color-text-gray)] mb-2">
                Operations & Supply Chain Management
              </p>
              <p className="text-base text-[var(--color-text-light)] mb-8">
                Haskayne School of Business, University of Calgary
              </p>
            </div>

            {/* Contact */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{
                transitionDelay: '1200ms',
                transitionTimingFunction: 'var(--ease-smooth)',
              }}
            >
              <button
                onClick={() => handleEmailClick('yiwen.jin@ucalgary.ca')}
                className="group flex items-center gap-2 px-4 py-2.5 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail size={16} className="text-[var(--color-accent)]" />
                <span className="text-sm text-[var(--color-text-gray)] group-hover:text-[var(--color-dark)] transition-colors">
                  yiwen.jin@ucalgary.ca
                </span>
                <ExternalLink size={12} className="text-[var(--color-text-light)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={() => handleEmailClick('ywjin37@gmail.com')}
                className="group flex items-center gap-2 px-4 py-2.5 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail size={16} className="text-[var(--color-accent)]" />
                <span className="text-sm text-[var(--color-text-gray)] group-hover:text-[var(--color-dark)] transition-colors">
                  ywjin37@gmail.com
                </span>
                <ExternalLink size={12} className="text-[var(--color-text-light)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            {/* Links */}
            <div
              className={`flex flex-wrap gap-3 mt-4 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{
                transitionDelay: '1300ms',
                transitionTimingFunction: 'var(--ease-smooth)',
              }}
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <FileText size={14} className="text-[var(--color-accent)]" />
                <span className="text-sm text-[var(--color-text-gray)] group-hover:text-[var(--color-dark)] transition-colors">
                  CV
                </span>
              </a>
              <a
                href="https://scholar.google.com/citations?user=your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <GraduationCap size={14} className="text-[var(--color-accent)]" />
                <span className="text-sm text-[var(--color-text-gray)] group-hover:text-[var(--color-dark)] transition-colors">
                  Google Scholar
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <Linkedin size={14} className="text-[var(--color-accent)]" />
                <span className="text-sm text-[var(--color-text-gray)] group-hover:text-[var(--color-dark)] transition-colors">
                  LinkedIn
                </span>
              </a>
            </div>

            {/* Decorative Line */}
            <div
              className={`mt-12 transition-all duration-800 ${
                visible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: '1400ms',
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            >
              <div className="w-24 h-[2px] bg-[var(--color-accent)] animate-pulse" />
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className={`relative transition-all duration-1000 ${
                visible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
              style={{
                transitionDelay: '400ms',
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            >
              {/* Image Container */}
              <div className="relative w-72 h-96 lg:w-80 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[var(--color-accent-light)] to-[var(--color-bg-gray)]">
                {/* Placeholder for Profile Photo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-text-light)]">
                  <div className="w-24 h-24 rounded-full bg-white/80 flex items-center justify-center mb-4 shadow-lg">
                    <User size={48} className="text-[var(--color-accent)]" />
                  </div>
                  <p className="text-sm font-medium">Profile Photo</p>
                  <p className="text-xs mt-1 opacity-70">Upload your image here</p>
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>

              {/* Decorative Elements */}
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-[var(--color-accent)]/10 -z-10"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              />
              <div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[var(--color-accent)]/5 -z-10"
                style={{ animation: 'float 8s ease-in-out infinite reverse' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transitionDelay: '1600ms',
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-[var(--color-border)] flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[var(--color-accent)] rounded-full animate-bounce" />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
}
