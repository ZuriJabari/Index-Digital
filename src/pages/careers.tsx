import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeadFC } from 'gatsby';
import { Layout as MainLayout } from '../components/layout';
import { JobApplicationForm } from '../components/job-application-form';

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const jobPositions: JobPosition[] = [
  {
    title: 'Senior React Native Developer',
    department: 'Engineering',
    location: 'Kampala, Uganda',
    type: 'Full-time',
    description: 'We are looking for an experienced React Native developer to join our mobile development team. You will be responsible for building and maintaining high-performance mobile applications for our clients.',
    requirements: [
      'At least 4 years of experience with React Native',
      'Strong understanding of JavaScript/TypeScript',
      'Experience with state management (Redux, MobX, etc.)',
      'Knowledge of iOS and Android platforms',
      'Experience with RESTful APIs and GraphQL',
      'Strong problem-solving skills',
    ],
    responsibilities: [
      'Develop and maintain React Native applications',
      'Write clean, maintainable, and efficient code',
      'Collaborate with the design team to implement user interfaces',
      'Optimize applications for maximum performance',
      'Participate in code reviews and provide constructive feedback',
    ],
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Kampala, Uganda',
    type: 'Full-time',
    description: 'We are seeking a talented UI/UX Designer to create beautiful and functional interfaces for our web and mobile applications. You will work closely with our development team to bring designs to life.',
    requirements: [
      'At least 3 years of UI/UX design experience',
      'Proficiency in Figma and other design tools',
      'Strong portfolio demonstrating web and mobile design',
      'Understanding of user-centered design principles',
      'Experience with design systems',
      'Knowledge of frontend development is a plus',
    ],
    responsibilities: [
      'Create user-centered designs for web and mobile applications',
      'Develop and maintain design systems',
      'Conduct user research and usability testing',
      'Create wireframes, prototypes, and high-fidelity designs',
      'Collaborate with developers to ensure design implementation',
    ],
  },
];

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);

  return (
    <MainLayout>
      <div className="relative min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our <span className="text-secondary">Team</span>
            </h1>
            <p className="text-neutral-light/70 max-w-2xl mx-auto text-lg">
              We're always looking for talented individuals to help us build the future of digital experiences in East Africa
            </p>
          </motion.div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 gap-8">
            {jobPositions.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Graph Paper Background */}
                <div className="absolute inset-0 graph-paper-small opacity-10" />
                <div className="absolute inset-0 graph-paper-accent opacity-15" />

                {/* Job Card */}
                <div className="relative bg-[#1e1e1e]/40 backdrop-blur-sm rounded-lg overflow-hidden border border-[#323232]/30 hover:border-secondary/20 transition-all duration-500 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">{job.title}</h2>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="text-neutral-light/70">
                          <span className="text-secondary">{job.department}</span>
                        </span>
                        <span className="text-neutral-light/70">
                          <span className="text-secondary">•</span> {job.location}
                        </span>
                        <span className="text-neutral-light/70">
                          <span className="text-secondary">•</span> {job.type}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="mt-4 md:mt-0 px-6 py-2.5 rounded-lg bg-secondary text-white font-medium hover:bg-secondary/90 transition-colors inline-flex items-center group"
                    >
                      Apply Now
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>

                  <p className="text-neutral-light/70 mb-6">{job.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Requirements</h3>
                      <ul className="space-y-2">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-neutral-light/70">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Responsibilities</h3>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-neutral-light/70">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Application Form Modal */}
      <AnimatePresence>
        {selectedJob && (
          <JobApplicationForm
            jobTitle={selectedJob.title}
            onClose={() => setSelectedJob(null)}
          />
        )}
      </AnimatePresence>
    </MainLayout>
  );
};

export default CareersPage;

export const Head: HeadFC = () => (
  <>
    <title>Careers | Index Digital Studio</title>
    <meta
      name="description"
      content="Join our team at Index Digital and help us build the future of digital experiences in East Africa. View our current job openings and apply today."
    />
  </>
);
