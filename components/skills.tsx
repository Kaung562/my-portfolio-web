"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: readonly string[];
}) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
      {skills.map((skill, index) => (
        <motion.li
          className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          key={skill}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  </div>
);

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-left sm:mb-40 mx-auto"
    >
      <SectionHeading>My skills</SectionHeading>

      <div className="mt-12 space-y-8">
        <div className="border-b border-gray-300 pb-6">
          <SkillCategory title="Frontend" skills={skillsData.frontend} />
        </div>
        <div className="border-b border-gray-300 pb-6">
          <SkillCategory title="Backend" skills={skillsData.backend} />
        </div>
        <div>
          <SkillCategory title="Database" skills={skillsData.database} />
        </div>
      </div>
    </section>
  );
}

