import { useEffect, useRef, useState } from 'react';
import { GraduationCap, BookOpen, BarChart3 } from 'lucide-react';

const instructorCourses = [
  {
    code: 'DATA 611',
    title: 'Predictive Analytics',
    institution: 'Haskayne School of Business',
    description: 'Core course of the Master of Data Science program. Covers various data mining, machine learning, and AI topics.',
    icon: BarChart3,
  },
  {
    code: 'OPMA 317',
    title: 'Fundamentals of Operations and Supply Chain Management',
    institution: 'Haskayne School of Business',
    description: 'Core course of the Bachelor of Commerce program. Covers process analysis, capacity, inventory, and supply chain management.',
    icon: BookOpen,
  },
  {
    code: 'COMM 204',
    title: 'Logistics and Operations Management',
    institution: 'UBC Sauder School of Business',
    description: 'Introductory course covering major fundamental areas in operations management, including process analysis, queueing, inventory, and supply chain management.',
    icon: GraduationCap,
  },
];



export default function Teaching() {
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
      id="teaching"
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ backgroundColor: 'var(--color-bg-gray)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`section-title transition-all duration-600 ${
              visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            Teaching
          </h2>
          <p
            className={`section-subtitle max-w-2xl mx-auto transition-all duration-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{
              transitionDelay: '200ms',
              transitionTimingFunction: 'var(--ease-smooth)',
            }}
          >
            Mentoring the next generation of business leaders and data scientists
          </p>
        </div>

        {/* Instructor Courses */}
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
            <GraduationCap size={24} className="text-[var(--color-accent)]" />
            <h3 className="font-serif text-2xl font-semibold text-[var(--color-dark)]">
              Instructor
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructorCourses.map((course, index) => (
              <div
                key={course.code}
                className={`group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-400 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${400 + index * 120}ms`,
                  transitionTimingFunction: 'var(--ease-expo-out)',
                  transform: visible
                    ? 'perspective(1000px) rotateX(0) translateY(0)'
                    : 'perspective(1000px) rotateX(15deg) translateY(40px)',
                }}
              >
                {/* Course Code Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] text-sm font-medium mb-4 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors duration-300">
                  {course.code}
                </div>

                {/* Icon */}
                <div className="absolute top-6 right-6 p-3 bg-[var(--color-bg-gray)] rounded-lg group-hover:bg-[var(--color-accent-light)] transition-colors duration-300">
                  <course.icon
                    size={20}
                    className="text-[var(--color-text-light)] group-hover:text-[var(--color-accent)] transition-colors duration-300"
                  />
                </div>

                {/* Content */}
                <h4 className="text-lg font-medium text-[var(--color-dark)] mb-2 pr-14 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {course.title}
                </h4>
                <p className="text-sm text-[var(--color-text-light)] mb-3">
                  {course.institution}
                </p>
                <p className="text-sm text-[var(--color-text-gray)] leading-relaxed">
                  {course.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
