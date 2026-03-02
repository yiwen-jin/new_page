import { useEffect, useRef, useState } from 'react';
import { FileText, Clock, FlaskConical, ExternalLink } from 'lucide-react';

const publications = [
  {
    title: 'Causal Evidence of Task-Switching Cost in Organ Transplantation',
    authors: 'Jiayi Liu, Yiwen Jin, Joel T. Adler',
    year: '2026',
    venue: 'Nature Human Behaviour',
    status: 'Conditionally Accepted',
    statusType: 'accepted' as const,
  },
  {
    title: 'Adaptive Behavior of Service Providers to Schedule Deviations and Its Consequences: Evidence from Operating Rooms',
    authors: 'Jin, Y., Ding, Y., Shechter, S. M., & Arneja, J. S.',
    year: '2026',
    venue: 'Manufacturing & Service Operations Management',
    status: 'Published',
    statusType: 'published' as const,
  },
  {
    title: 'High-risk plastic surgery: An analysis of 108,303 cases from the American College of Surgeons National Surgical Quality Improvement Program (ACS NSQIP)',
    authors: 'Wan, M., Zhang, J.X., Ding, Y., Jin, Y., Bedford, J., Nagarajan, M., Bucevska, M., Courtemanche, D.J. and Arneja, J.S.',
    year: '2020',
    venue: 'Plastic Surgery, 28(1), pp.57-66',
    status: 'Published',
    statusType: 'published' as const,
  },
  {
    title: 'Do microsurgical outcomes differ based on which specialty does the operation? A NSQIP analysis',
    authors: 'Zhang, J.X., Wan, M., Ding, Y., Jin, Y., Nagarajan, M., Courtemanche, D.J., Bedford, J. and Arneja, J.S.',
    year: '2020',
    venue: 'Plastic and Reconstructive Surgery Global Open, 8(4)',
    status: 'Published',
    statusType: 'published' as const,
  },
];

const underReview = [
  {
    title: 'The cost of task switching: Evidence from emergency departments',
    authors: 'Yiwen Jin, Yige Duan, Yichuan Ding, Mahesh Nagarajan, Garth Hunte',
    status: 'Under Revision',
  },
  {
    title: 'When Diversity Aligns: From Boardrooms to Supply Chains',
    authors: 'Yiwen Jin, Minjia Li, Jenny Li Zhang',
    status: 'Under Revision',
  },
];

const ongoingWorks = [
  {
    title: 'Patient routing in emergency rooms: A polling system with switchover times and piecewise linear cost rate',
    authors: 'with Yichuan Ding, Mahesh Nagarajan',
    status: 'In Preparation',
  },
  {
    title: 'Coping with nurse burnout: Key drivers and operational interventions',
    authors: 'with Steven Shechter, Yichuan Ding, Jugpal Arneja',
    status: 'In Preparation',
  },
];

const getStatusStyle = (type: string) => {
  switch (type) {
    case 'accepted':
      return 'bg-green-100 text-green-700';
    case 'published':
      return 'bg-[var(--color-accent-light)] text-[var(--color-accent)]';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

export default function Research() {
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
      id="research"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white"
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
            Research
          </h2>
        </div>

        {/* Publications */}
        <div className="mb-16">
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-500 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{
              transitionDelay: '300ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            <FileText size={24} className="text-[var(--color-accent)]" />
            <h3 className="font-serif text-2xl font-semibold text-[var(--color-dark)]">
              Publications / Accepted Papers
            </h3>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className={`group p-6 bg-white border border-[var(--color-border)] rounded-xl hover:shadow-lg transition-all duration-400 hover:-translate-y-1 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${400 + index * 120}ms`,
                  transitionTimingFunction: 'var(--ease-expo-out)',
                  transform: visible
                    ? `rotate(${index % 2 === 0 ? '0' : '0'}deg)`
                    : `rotate(${index % 2 === 0 ? '2' : '-2'}deg) translateY(50px)`,
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-[var(--color-dark)] mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                      {pub.title}
                    </h4>
                    <p className="text-sm text-[var(--color-text-light)] mb-2">
                      {pub.authors}
                    </p>
                    <p className="text-sm text-[var(--color-text-gray)]">
                      <span className="italic">{pub.venue}</span>, {pub.year}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusStyle(
                      pub.statusType
                    )}`}
                  >
                    {pub.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Under Review */}
        <div className="mb-16">
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-500 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{
              transitionDelay: '900ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            <Clock size={24} className="text-[var(--color-accent)]" />
            <h3 className="font-serif text-2xl font-semibold text-[var(--color-dark)]">
              Under Review / Revision
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {underReview.map((paper, index) => (
              <div
                key={index}
                className={`p-6 bg-[var(--color-bg-gray)] rounded-xl hover:shadow-md transition-all duration-400 hover:-translate-y-1 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${1000 + index * 120}ms`,
                  transitionTimingFunction: 'var(--ease-smooth)',
                }}
              >
                <h4 className="text-base font-medium text-[var(--color-dark)] mb-2">
                  {paper.title}
                </h4>
                <p className="text-sm text-[var(--color-text-light)] mb-3">
                  {paper.authors}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-[var(--color-accent)]">
                  <ExternalLink size={12} />
                  {paper.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ongoing Works */}
        <div>
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-500 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{
              transitionDelay: '1300ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            <FlaskConical size={24} className="text-[var(--color-accent)]" />
            <h3 className="font-serif text-2xl font-semibold text-[var(--color-dark)]">
              Ongoing Works
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ongoingWorks.map((work, index) => (
              <div
                key={index}
                className={`p-6 bg-white border border-dashed border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)] hover:shadow-md transition-all duration-400 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${1400 + index * 120}ms`,
                  transitionTimingFunction: 'var(--ease-smooth)',
                }}
              >
                <h4 className="text-base font-medium text-[var(--color-dark)] mb-2">
                  {work.title}
                </h4>
                <p className="text-sm text-[var(--color-text-light)] mb-3">
                  {work.authors}
                </p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                  {work.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
