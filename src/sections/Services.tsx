import { useEffect, useRef, useState } from 'react';
import { BookOpen, Calendar } from 'lucide-react';

const reviewerJournals = [
  'Manufacturing and Service Operations Management',
  'Production and Operations Management',
  'Health Care Management Science',
  'Service Science',
  'Omega',
];

const sessionChairs = [
  { event: 'POMS', year: '2026' },
  { event: 'INFORMS Healthcare', year: '2021' },
  { event: 'INFORMS', year: '2022' },
  { event: 'INFORMS Healthcare', year: '2023' },
  { event: 'INFORMS', year: '2023' },
];

const clusterChairs = [
  { track: 'Queuing and Applied Probability Track', event: 'CORS', years: '2025/2026' },
];

export default function Services() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ backgroundColor: 'var(--color-bg-gray)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16">
          <h2
            className={`section-title transition-all duration-600 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            Services
          </h2>
        </div>

        {/* Reviewer - Featured */}
        <div
          className={`mb-12 transition-all duration-600 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            transitionDelay: '200ms',
            transitionTimingFunction: 'var(--ease-expo-out)',
          }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-[var(--color-accent-light)] rounded-xl">
                <BookOpen size={28} className="text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[var(--color-dark)]">
                  Reviewer
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">
                  Peer review for leading academic journals
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviewerJournals.map((journal, index) => (
                <div
                  key={journal}
                  className={`group p-4 bg-[var(--color-bg-gray)] rounded-lg hover:bg-[var(--color-accent-light)] transition-all duration-300 ${
                    visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                  }`}
                  style={{
                    transitionDelay: `${400 + index * 60}ms`,
                    transitionTimingFunction: 'var(--ease-smooth)',
                  }}
                >
                  <p className="text-sm text-[var(--color-text-gray)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {journal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conference Organization */}
        <div
          className={`transition-all duration-600 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            transitionDelay: '700ms',
            transitionTimingFunction: 'var(--ease-expo-out)',
          }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-[var(--color-accent-light)] rounded-xl">
                <Calendar size={28} className="text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[var(--color-dark)]">
                  Conference Organization
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">
                  Cluster and session chair roles
                </p>
              </div>
            </div>

            {/* Cluster Chairs */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-[var(--color-text-light)] mb-3 uppercase tracking-wide">
                Cluster Chairs
              </h4>
              <div className="space-y-3">
                {clusterChairs.map((chair, index) => (
                  <div
                    key={index}
                    className="p-4 bg-[var(--color-bg-gray)] rounded-lg group hover:bg-[var(--color-accent-light)] transition-colors duration-300"
                  >
                    <p className="text-sm font-medium text-[var(--color-dark)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                      {chair.track}
                    </p>
                    <p className="text-xs text-[var(--color-text-light)] mt-1">
                      {chair.event} {chair.years}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Session Chairs */}
            <div>
              <h4 className="text-sm font-medium text-[var(--color-text-light)] mb-3 uppercase tracking-wide">
                Session Chairs
              </h4>
              <div className="flex flex-wrap gap-2">
                {sessionChairs.map((session, index) => (
                  <span
                    key={index}
                    className={`inline-flex items-center px-3 py-2 rounded-lg bg-[var(--color-bg-gray)] text-sm text-[var(--color-text-gray)] hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)] transition-all duration-300 cursor-default ${
                      visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{
                      transitionDelay: `${900 + index * 80}ms`,
                      transitionTimingFunction: 'var(--ease-smooth)',
                    }}
                  >
                    <span className="font-medium">{session.event}</span>
                    <span className="mx-1.5 text-[var(--color-border)]">|</span>
                    <span className="text-xs">{session.year}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
