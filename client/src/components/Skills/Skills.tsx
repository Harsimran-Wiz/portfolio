import { FC, memo } from "react";
import { skillsData } from "../../constant/constants";
import Tilt from "react-parallax-tilt";
import { SkillCategory, SkillsProps } from "../../types/types";
import { motion } from "framer-motion";
import LoadingImage from "../LoadingImage";
import { SECTION_PADDING } from "../../constant/constantStyles";

const Skills: FC<SkillsProps> = memo(({ categories = skillsData }) => {
  return (
    <section
      id="skills"
      className={SECTION_PADDING}
      aria-label="Skills Section"
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
          SKILLS
        </h2>
        <div className="w-32 h-1 bg-[hsl(var(--primary))] mx-auto mt-4" />
        <p className="text-[hsl(var(--muted-foreground))] mt-4 text-lg">
          An overview of my core competencies and technologies I work with.
        </p>
      </motion.div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category: SkillCategory, index: number) => (
          <motion.div
            key={category.title}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
              className="relative z-10"
            >
              {/* Category Card */}
              <div className="p-6 rounded-xl bg-[hsl(var(--background))] border border-[hsl(var(--primary)_/_0.1)] hover:border-[hsl(var(--primary)_/_0.2)] transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--primary))]">
                  {category.title}
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center group"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[hsl(var(--background))] group-hover:bg-[hsl(var(--primary)_/_0.1)] transition-colors p-2">
                        <LoadingImage
                          src={skill.logo}
                          alt={skill.name}
                          className="w-full h-full object-contain transition-transform group-hover:scale-110"
                          loadingClass="!rounded-lg"
                        />
                      </div>
                      <span className="mt-2 text-sm text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--foreground))] transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
            {/* Hover Effect */}
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[hsl(var(--primary)_/_0.2)] to-[hsl(var(--primary)_/_0.1)] opacity-0 group-hover:opacity-100 transition-opacity blur" />
          </motion.div>
        ))}
      </div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;
