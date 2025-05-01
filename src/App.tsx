import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSpinner from "./components/LayoutSpinner";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Education = lazy(() => import("./components/Education/Education"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));
import SectionErrorBoundary from "./components/SectionErrorBoundary";
import BackToTop from "./components/BackToTop";
import { COMMON_PADDING } from "./constant/constantStyles";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Layout>
          <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
            <Suspense fallback={<LoadingSpinner />}>
              <SectionErrorBoundary sectionName="Navigation">
                <Navbar />
              </SectionErrorBoundary>
              <main className="relative">
                {/* Gradient background */}
                <div className="fixed inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)),transparent_50%)] opacity-20" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-5" />
                </div>

                {/* Content with glass effect sections */}
                <div className={`relative ${COMMON_PADDING}`}>
                  <SectionErrorBoundary sectionName="About">
                    <About />
                  </SectionErrorBoundary>
                  <SectionErrorBoundary sectionName="Skills">
                    <Skills />
                  </SectionErrorBoundary>
                  <SectionErrorBoundary sectionName="Experience">
                    <Experience />
                  </SectionErrorBoundary>
                  <SectionErrorBoundary sectionName="Education">
                    <Education />
                  </SectionErrorBoundary>
                  <SectionErrorBoundary sectionName="Contact">
                    <Contact />
                  </SectionErrorBoundary>
                </div>
              </main>
              <SectionErrorBoundary sectionName="Footer">
                <Footer />
              </SectionErrorBoundary>
              <BackToTop />
            </Suspense>
          </div>
        </Layout>
      </ErrorBoundary>
      <Analytics />
      <SpeedInsights />
    </HelmetProvider>
  );
}

export default App;
