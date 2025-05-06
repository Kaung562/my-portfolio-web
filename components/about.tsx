"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  I began my tech journey with a <span className="font-medium">Bachelor's in Information Technology at West Yangon Technological University</span> and completed an intensive bootcamp at Lithan Educlaas, where I mastered <span className="font-medium">Java, JavaScript, React, and Bootstrap</span>. I further developed my skills during a <span className="font-medium">3-month apprenticeship at DAT</span>, a Japan-Myanmar collaborative company, working on large-scale projects. My responsibilities included <span className="font-medium">mockup design, API documentation, token generation with JWT, and real-time notifications using web sockets and web push</span>. I also gained experience with <span className="font-medium">Java and Spring Boot on an insurance project</span>, and explored <span className="font-medium">RPA technologies with UIPath and C#</span>. Now, I’m eager to bring my skills to a forward-thinking organization, contributing to impactful projects.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching movies, and playing football. I also enjoy <span className="font-medium">learning new things</span>. At the moment, I’m exploring <span className="font-medium">TypeScript and web security as part of my current learning module</span>.
</p>

      <div className="mb-2 mt-10 flex justify-center">
        <div className="w-full max-w-[560px] aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/fHpW8C9VP-o"
            title="Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </motion.section>
  );
}
