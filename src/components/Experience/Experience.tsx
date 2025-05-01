import { FC, memo } from "react";
import { experienceList } from "../../constant/constants";
import { ExperienceItem, ExperienceProps } from "../../types/types";
import { motion } from "framer-motion";
import LoadingImage from "../LoadingImage";
import { SECTION_PADDING } from "../../constant/constantStyles";

const Experience: FC<ExperienceProps> = memo(
  ({ experiences = experienceList }) => {
    return (
      <section
        id="experience"
        className={SECTION_PADDING}
        aria-label="Work Experience Section"
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-[hsl(var(--foreground))]">
            EXPERIENCE
          </h2>
          <div className="w-32 h-1 bg-[hsl(var(--primary))] mx-auto mt-4" />
          <p className="text-[hsl(var(--muted-foreground))] mt-4 text-lg">
            Highlights from my career building real-world applications.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((experience: ExperienceItem, index: number) => (
            <motion.div
              key={experience.id}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[hsl(var(--primary)_/_0.2)]" />

              {/* Experience Card */}
              <div className="relative ml-8 group">
                {/* Timeline dot */}
                <div className="absolute -left-10 top-5 w-3 h-3 rounded-full bg-[hsl(var(--primary))] ring-4 ring-[hsl(var(--background))] ring-offset-2 ring-offset-[hsl(var(--primary)_/_0.2)]" />

                <div className="p-6 rounded-xl bg-[hsl(var(--background))] border border-[hsl(var(--primary)_/_0.1)] hover:border-[hsl(var(--primary)_/_0.2)] transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <LoadingImage
                        src={experience.img}
                        alt={experience.company}
                        className="w-12 h-12 rounded-lg object-contain"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-[hsl(var(--primary))]">
                          {experience.role}
                        </h3>
                        <p className="text-[hsl(var(--muted-foreground))]">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-[hsl(var(--muted-foreground))]">
                      {experience.date}
                    </span>
                  </div>

                  <div className="mt-4 text-[hsl(var(--foreground))] leading-relaxed space-y-2">
                    {experience.desc.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm rounded-full bg-[hsl(var(--primary)_/_0.1)] text-[hsl(var(--primary))]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }
);

Experience.displayName = "Experience";

export default Experience;
