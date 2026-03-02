import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'Awards', href: '#awards' },
  { label: 'Services', href: '#services' },
];

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fade in navigation on load
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/92 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)]'
            : 'bg-transparent'
        } ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          height: scrolled ? '64px' : '80px',
          transitionTimingFunction: 'var(--ease-expo-out)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className={`font-serif text-2xl font-semibold text-[var(--color-dark)] transition-transform duration-500 ${
              scrolled ? 'scale-90' : 'scale-100'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            YJ
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative text-sm font-medium text-[var(--color-text-gray)] hover:text-[var(--color-dark)] transition-colors duration-300 group"
                style={{
                  animationDelay: `${100 + index * 80}ms`,
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </div>

          {/* Contact CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#footer')}
            className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-[var(--color-accent)] rounded-full hover:bg-[var(--color-dark)] transition-colors duration-300"
          >
            Contact
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--color-dark)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-500 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-2xl font-serif text-[var(--color-dark)] hover:text-[var(--color-accent)] transition-colors duration-300"
              style={{
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.4s var(--ease-expo-out) ${index * 80}ms`,
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#footer"
            onClick={(e) => handleNavClick(e, '#footer')}
            className="mt-4 px-8 py-3 text-lg font-medium text-white bg-[var(--color-accent)] rounded-full"
            style={{
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.4s var(--ease-expo-out) ${navItems.length * 80}ms`,
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
