import { useEffect, useRef, useState } from 'react';
import { Trophy, Award, Medal, GraduationCap, DollarSign } from 'lucide-react';

const awards = [
  {
    year: '2023',
    title: 'POMS College of Healthcare Operations Management Best Paper Award',
    type: 'winner',
    icon: Trophy,
  },
  {
    year: '2023',
    title: 'POMS International (China) Conference Best Student Paper Competition',
    detail: 'Third Place',
    type: 'award',
    icon: Award,
  },
  {
    year: '2023',
    title: 'The 18th International Conference on Service Systems and Service Management Best Paper Award',
    type: 'winner',
    icon: Trophy,
  },
  {
    year: '2023',
    title: 'Canadian Operational Research Society Healthcare SIG Graduate Student Presentation Competition',
    detail: 'Finalist (Top 5)',
    type: 'finalist',
    icon: Medal,
  },
  {
    year: '2021',
    title: 'Canadian Operational Research Society Healthcare SIG Best Paper in Statistical Methods/Econometric Modelling',
    type: 'winner',
    icon: Trophy,
  },
  {
    year: '2023',
    title: 'UBC Paul Chwelos Memorial Graduate Scholarship of Teaching Excellence',
    type: 'award',
    icon: GraduationCap,
  },
];

const grants = [
  {
    year: '2023',
    title: 'Equity, Diversity, and Inclusion (EDI) Catalyst Grant, UBC',
    amount: '$5,000',
    role: 'Co-applicant',
    icon: DollarSign,
  },
  {
    year: '2021',
    title: 'CIDER Small Grants in Innovative Data, UBC',
    amount: '$12,000',
    role: 'Co-applicant',
    icon: DollarSign,
  },
];

const getTypeStyle = (type: string) => {
  switch (type) {
    case 'winner':
      return 'bg-amber-100 text-amber-700';
    case 'finalist':
      return 'bg-purple-100 text-purple-700';
    default:
      return 'bg-[var(--color-accent-light)] text-[var(--color-accent)]';
  }
};

export default function Awards() {
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
      id="awards"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16">
          <h2
            className={`section-title transition-all duration-600 ${
              visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            Awards & Grants
          </h2>
        </div>

        {/* Awards Timeline */}
        <div className="mb-16">
          <h3
            className={`font-serif text-xl font-semibold text-[var(--color-dark)] mb-8 transition-all duration-500 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{
              transitionDelay: '300ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            Research Awards
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div
              className={`absolute left-4 top-0 bottom-0 w-[2px] bg-[var(--color-border)] transition-all duration-1200 ${
                visible ? 'scale-y-100' : 'scale-y-0'
              }`}
              style={{
                transitionDelay: '400ms',
                transformOrigin: 'top',
              }}
            />

            <div className="space-y-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className={`relative pl-12 transition-all duration-500 ${
                    visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{
                    transitionDelay: `${400 + index * 120}ms`,
                    transitionTimingFunction: 'var(--ease-expo-out)',
                  }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-2 border-[var(--color-accent)] flex items-center justify-center transition-transform duration-300 ${
                      visible ? 'scale-100' : 'scale-0'
                    }`}
                    style={{
                      transitionDelay: `${500 + index * 120}ms`,
                      transitionTimingFunction: 'var(--ease-elastic)',
                    }}
                  >
                    <award.icon size={14} className="text-[var(--color-accent)]" />
                  </div>

                  {/* Award Card */}
                  <div className="group p-5 bg-white border border-[var(--color-border)] rounded-xl hover:shadow-lg hover:border-[var(--color-accent)]/30 transition-all duration-300 hover:translate-x-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-dark)] text-white w-fit">
                        {award.year}
                      </span>
                      <div className="flex-1">
                        <h4 className="text-base font-medium text-[var(--color-dark)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                          {award.title}
                        </h4>
                        {award.detail && (
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mt-2 ${getTypeStyle(award.type)}`}>
                            {award.detail}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grants */}
        <div className="mb-16">
          <h3
            className={`font-serif text-xl font-semibold text-[var(--color-dark)] mb-8 transition-all duration-500 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{
              transitionDelay: '1200ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            Grants
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {grants.map((grant, index) => (
              <div
                key={index}
                className={`group p-6 bg-[var(--color-bg-gray)] rounded-xl hover:shadow-md transition-all duration-400 hover:-translate-y-1 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${1300 + index * 120}ms`,
                  transitionTimingFunction: 'var(--ease-smooth)',
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg">
                      <grant.icon size={18} className="text-[var(--color-accent)]" />
                    </div>
                    <span className="text-sm font-medium text-[var(--color-text-light)]">
                      {grant.year}
                    </span>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                    {grant.amount}
                  </span>
                </div>
                <h4 className="text-base font-medium text-[var(--color-dark)] mb-1 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {grant.title}
                </h4>
                <p className="text-sm text-[var(--color-text-light)]">
                  {grant.role}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
