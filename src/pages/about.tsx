import React from 'react';
import { motion } from 'framer-motion';
import { Layout as MainLayout } from '../components/layout';
import { HeadFC } from 'gatsby';

const AboutPage = () => {
  const missions = [
    {
      title: "Our Mission",
      description: "To empower businesses and individuals in Uganda through innovative digital solutions that drive growth and success in the modern economy."
    },
    {
      title: "Our Vision",
      description: "To be the leading force in Uganda's digital transformation, creating technology that makes a real difference in people's lives."
    },
    {
      title: "Our Values",
      points: [
        "Innovation - Pushing boundaries in technology",
        "Quality - Delivering excellence in every project",
        "Integrity - Building trust through honest partnerships",
        "Community - Contributing to Uganda's tech ecosystem"
      ]
    }
  ];

  const timeline = [
    {
      year: "2015",
      title: "Foundation",
      description: "Index Digital was established with a vision to transform Uganda's digital landscape."
    },
    {
      year: "2017",
      title: "Early Growth",
      description: "Expanded our client base and established strong partnerships within Uganda's tech ecosystem."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Led major digital transformation projects, helping businesses adapt to the changing landscape."
    },
    {
      year: "2023",
      title: "Innovation Hub",
      description: "Launched our innovation hub, fostering tech talent and driving digital innovation in Uganda."
    },
    {
      year: "2024",
      title: "Market Leadership",
      description: "Continuing our legacy of excellence with a growing portfolio of successful projects across East Africa."
    }
  ];

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
              About <span className="text-secondary">Index Digital</span>
            </h1>
            <p className="text-neutral-light/70 max-w-2xl mx-auto text-lg">
              We're a team of passionate technologists dedicated to driving digital innovation
              and transformation across Uganda and East Africa.
            </p>
          </motion.div>

          {/* Mission and Vision */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {missions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 graph-paper-small opacity-10" />
                <div className="relative bg-[#1e1e1e]/40 backdrop-blur-sm rounded-lg p-6 border border-[#323232]/30 hover:border-secondary/20 transition-all duration-500">
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  {item.description ? (
                    <p className="text-neutral-light/70">{item.description}</p>
                  ) : (
                    <ul className="space-y-2">
                      {item.points?.map((point, i) => (
                        <li key={i} className="text-neutral-light/70 flex items-center">
                          <span className="w-1.5 h-1.5 bg-secondary/60 rounded-full mr-2" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#323232]/50" />
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <div className="w-1/2 pr-8 text-right">
                      <div className={`${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'}`}>
                        <span className="text-secondary font-mono text-sm">{item.year}</span>
                        <h3 className="text-white font-bold mb-2">{item.title}</h3>
                        <p className="text-neutral-light/70">{item.description}</p>
                      </div>
                    </div>
                    <div className="relative flex items-center justify-center w-8 h-8">
                      <div className="w-3 h-3 bg-secondary rounded-full" />
                    </div>
                    <div className="w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => (
  <>
    <title>About Us | Index Digital Studio</title>
    <meta name="description" content="Learn about Index Digital's mission, vision, and journey in transforming Uganda's digital landscape." />
  </>
);
