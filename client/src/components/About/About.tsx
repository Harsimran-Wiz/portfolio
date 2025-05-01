import { FC, memo } from "react";
import Tilt from "react-parallax-tilt";
import { AboutProps } from "../../types/types";
import TypingEffect from "./TypingEffect";
import { Helmet } from "react-helmet-async";
import { profileData } from "./profileData";
import LoadingImage from "../LoadingImage";
import { SECTION_PADDING } from "../../constant/constantStyles";

const About: FC<AboutProps> = memo(
  ({
    name = profileData.name,
    title = profileData.title,
    description = profileData.description,
    image = profileData.image,
  }) => {
    return (
      <>
        <Helmet>
          <title>{`${name} - ${title}`}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={`${name} - ${title}`} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
        </Helmet>

        <section
          id="about"
          className={`${SECTION_PADDING} pt-32 md:pt-36`}
          aria-label="About Me Section"
        >
          <div className="w-full flex flex-col-reverse md:flex-row md:justify-between md:gap-8 items-center">
            {/* Left Side - Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left mt-12 md:mt-0 animate-fadeIn">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[hsl(var(--primary))] mb-2">
                Hi, I am
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-[hsl(var(--foreground))]">
                {name}
              </h2>
              <div className="h-[28px] sm:h-[36px] lg:h-[44px]">
                <TypingEffect
                  text={[title]}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-[hsl(var(--primary))]"
                  speed={100}
                  delay={2000}
                />
              </div>
              <p className="text-base sm:text-lg text-[hsl(var(--muted-foreground))] mb-8 mt-6 leading-relaxed max-w-2xl animate-fadeIn">
                {description}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative animate-slideIn">
              <Tilt
                className="relative z-10"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 mx-auto">
                  <LoadingImage
                    src={image}
                    alt={`${name} - ${title}`}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    loadingClass="!rounded-2xl"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[hsl(var(--primary)_/_0.2)] to-[hsl(var(--secondary)_/_0.2)]" />
                </div>
              </Tilt>
              {/* Background decorative element */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(var(--primary)_/_0.2)] to-[hsl(var(--secondary)_/_0.2)] rounded-2xl blur" />
            </div>
          </div>
        </section>
      </>
    );
  }
);

About.displayName = "About";

export default About;
