import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { ProjectDetail } from "./components/ProjectDetail";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { projects } from "./data/projects";

function getProjectSlug() {
  return window.location.hash.match(/^#\/projects\/([^/?#]+)/)?.[1];
}

export default function App() {
  const [projectSlug, setProjectSlug] = useState(getProjectSlug);

  useEffect(() => {
    const handleRouteChange = () => {
      setProjectSlug(getProjectSlug());
    };

    window.addEventListener("hashchange", handleRouteChange);
    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  useEffect(() => {
    if (projectSlug !== undefined) {
      window.scrollTo({ top: 0 });
    } else if (window.location.hash === "#work") {
      document.getElementById("work")?.scrollIntoView();
    }
  }, [projectSlug]);

  if (projectSlug !== undefined) {
    const project = projects.find(({ slug }) => slug === projectSlug);
    return <ProjectDetail project={project} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}