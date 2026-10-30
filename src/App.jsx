import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LenisScroll from "./components/LenisScroll";
import ProjectDetail from "./components/ProjectDetail";
import { projects } from "./projects";

export default function App() {
  const projectSlug = new URLSearchParams(window.location.search).get("project");
  const project = projects.find(({ slug }) => slug === projectSlug);

  if (project) {
    return <ProjectDetail project={project} />;
  }

  return (
    <>
      <LenisScroll />
      <Navbar />
      <Header />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
