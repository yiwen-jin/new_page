import { useEffect, useRef, useState } from 'react';
import { Activity, Truck, Database, Landmark, User } from 'lucide-react';

const researchInterests = [
  {
    icon: Activity,
    title: 'Healthcare Operations',
    description: 'Improving efficiency and outcomes in healthcare delivery systems',
  },
  {
    icon: Truck,
    title: 'Supply Chain Management',
    description: 'Optimizing flows from production to consumption',
  },
  {
    icon: Database,
    title: 'Data Analytics & AI',
    description: 'Leveraging data to inform decision-making',
  },
  {
    icon: Landmark,
    title: 'Public Policy',
    description: 'Using data to shape effective public policies',
  },
];

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
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
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Photo Column */}
          <div
            className={`transition-all duration-800 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
            style={{
              transitionDelay: '200ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
            }}
          >
            <div className="relative">
              {/* Photo Placeholder */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-white to-[var(--color-accent-light)]">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-text-light)]">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg">
                    <User size={40} className="text-[var(--color-accent)]" />
                  </div>
                  <p className="text-sm font-medium">About Photo</p>
                  <p className="text-xs mt-1 opacity-70">Upload your image here</p>
                </div>
              </div>
              
              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[var(--color-accent)]/20 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Content Column */}
          <div>
            {/* Bio */}
            <div
              className={`transition-all duration-600 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: '400ms',
                transitionTimingFunction: 'var(--ease-smooth)',
              }}
            >
              <p className="text-[var(--color-text-gray)] mb-6 leading-relaxed">
                Hello, and welcome to my website! I am an Assistant Professor of Operations & 
                Supply Chain Management at the Haskayne School of Business, University of Calgary. 
                I received my Ph.D. in Management Science at the Operations and Logistics Division, 
                UBC Sauder School of Business, where I was fortunate to be advised by{' '}
                <a href="https://sites.google.com/view/yichuanding/home" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] font-medium hover:underline">Yichuan Ding</a>,{' '}
                <a href="https://sites.google.com/view/maheshnagarajan/home" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] font-medium hover:underline">Mahesh Nagarajan</a>, and{' '}
                <a href="https://sites.google.com/view/stevenshechter/home" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] font-medium hover:underline">Steven Shechter</a>.
              </p>
              <p className="text-[var(--color-text-gray)] mb-10 leading-relaxed">
                My research focuses on healthcare operations, technology, and supply chain management, 
                using primarily empirical and queueing-based methods. My work has appeared in leading 
                journals such as <em className="text-[var(--color-dark)]">Manufacturing & Service Operations Management</em> and has been 
                recognized with multiple major paper competition winners in the field. 
                Broadly, I also work on large-scale societal and environmental data to inform public 
                policy and organizational decision-making, with a growing emphasis on how AI reshapes 
                human behavior.
              </p>
            </div>

            {/* Research Interests */}
            <div
              className={`transition-all duration-600 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: '600ms',
                transitionTimingFunction: 'var(--ease-smooth)',
              }}
            >
              <h3 className="font-serif text-xl font-semibold text-[var(--color-dark)] mb-6">
                Research Interests
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {researchInterests.map((interest, index) => (
                  <div
                    key={interest.title}
                    className={`group p-5 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-2 ${
                      visible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      transitionDelay: `${600 + index * 120}ms`,
                      transitionTimingFunction: 'var(--ease-expo-out)',
                      transform: visible ? 'rotateY(0)' : 'rotateY(-90deg)',
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[var(--color-accent-light)] rounded-lg group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                        <interest.icon
                          size={20}
                          className="text-[var(--color-accent)] group-hover:text-white transition-colors duration-300 group-hover:rotate-[360deg]"
                          style={{ transition: 'transform 0.6s var(--ease-expo-out)' }}
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-[var(--color-dark)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                          {interest.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className={`mt-10 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{
                transitionDelay: '1000ms',
                transitionTimingFunction: 'var(--ease-smooth)',
              }}
            >
              <p className="text-[var(--color-text-gray)] italic">
                Feel free to reach out and connect!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
