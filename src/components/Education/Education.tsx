import { FC, memo } from "react";
import { education } from "../../constant/constants";
import { EducationItem, EducationProps } from "../../types/types";
import { motion } from "framer-motion";
import LoadingImage from "../LoadingImage";
import { SECTION_PADDING } from "../../constant/constantStyles";

const Education: FC<EducationProps> = memo(({ educationList = education }) => {
  return (
    <section
      id="education"
      className={SECTION_PADDING}
      aria-label="Education Section"
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
          EDUCATION
        </h2>
        <div className="w-32 h-1 bg-[hsl(var(--primary))] mx-auto mt-4" />
        <p className="text-[hsl(var(--muted-foreground))] mt-4 text-lg">
          My academic background that laid the foundation for my tech career.
        </p>
      </motion.div>

      {/* Education Timeline */}
      <div className="space-y-12">
        {educationList.map((education: EducationItem, index: number) => (
          <motion.div
            key={education.id}
            className="relative"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[hsl(var(--primary)_/_0.2)]" />

            {/* Education Card */}
            <div className="relative ml-8 group">
              {/* Timeline dot */}
              <div className="absolute -left-10 top-5 w-3 h-3 rounded-full bg-[hsl(var(--primary))] ring-4 ring-[hsl(var(--background))] ring-offset-2 ring-offset-[hsl(var(--primary)_/_0.2)]" />

              <div className="p-6 rounded-xl bg-[hsl(var(--background))] border border-[hsl(var(--primary)_/_0.1)] hover:border-[hsl(var(--primary)_/_0.2)] transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <LoadingImage
                      src={education.img}
                      alt={education.school}
                      className="w-12 h-12 rounded-lg object-contain"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-[hsl(var(--primary))]">
                        {education.degree}
                      </h3>
                      <p className="text-[hsl(var(--muted-foreground))]">
                        {education.school}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm text-[hsl(var(--muted-foreground))]">
                      {education.date}
                    </span>
                    <span className="text-sm font-medium text-[hsl(var(--primary))]">
                      {education.grade}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-[hsl(var(--foreground))] leading-relaxed">
                  {education.desc}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[hsl(var(--primary)_/_0.2)] to-[hsl(var(--primary)_/_0.1)] opacity-0 group-hover:opacity-100 transition-opacity blur" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

Education.displayName = "Education";

export default Education;
