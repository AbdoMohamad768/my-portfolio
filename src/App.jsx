import AboutMe from "./sections/AboutMe";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
// import Stats from "./sections/Stats";
import Skills from "./sections/Skills";
// import SkillsView from "./sections/SkillsView";
import Services from "./sections/Services";
// import Resume from "./sections/Resume";
import Portfolio from "./sections/Portfolio";
// import Testimonials from "./sections/Testimonials";
// import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Features from "./sections/Features";
import { InView, useInView } from "react-intersection-observer";
import { useState } from "react";
import PagePosition from "./components/PagePosition";

// const sections = [
//   <Hero key={1} />,
//   <Features key={2} />,
//   <AboutMe key={3} />,
//   // <Stats key={2} />,
//   <Skills key={4} />,
//   // <SkillsView key={3} />,
//   <Services key={5} />,
//   // <Resume key={4} />,
//   <Portfolio key={6} />,
//   // <Testimonials key={5} />,
//   // <Blog key={5} />,
//   <Contact key={7} />,
// ];
const sections = [
  {
    id: "hero",
    element: <Hero />,
  },
  {
    id: "features",
    element: <Features />,
  },
  {
    id: "about",
    element: <AboutMe />,
  },
  {
    id: "skills",
    element: <Skills />,
  },
  {
    id: "services",
    element: <Services />,
  },
  {
    id: "portfolio",
    element: <Portfolio />,
  },
  {
    id: "contact",
    element: <Contact />,
  },
];

function App() {
  const [visibleSection, setVisibleSection] = useState("home");

  const { ref: refForHero, inView: homeView } = useInView({
    threshold: 0.5,
  });

  const setInView = (inView, entry) => {
    if (inView) {
      setVisibleSection(entry.target.getAttribute("id"));
    }
  };

  return (
    <div>
      <header
        className={`transition fixed z-50 left-0 top-0 right-0 bg-secondary border-b-gray-700 border-b-1 lg:border-0 ${
          homeView ? "lg:bg-transparent" : "lg:bg-secondary"
        }`}
      >
        <div className="container">
          <NavBar homeView={homeView} visibleSection={visibleSection} />
        </div>
      </header>
      <main>
        <div id="home" className="container h-1" ref={refForHero}></div>
        <div className="container overflow-x-hidden">
          {sections.map((section) => (
            <InView onChange={setInView} threshold={0.8} key={section.id}>
              {({ ref }) => {
                return (
                  <div id={`${section.id}`} ref={ref}>
                    {section.element}
                  </div>
                );
              }}
            </InView>
          ))}
        </div>
      </main>
      <footer>
        <div className="container h-40 flex items-center justify-center">
          <p className="text-gray-400">
            Developed by{" "}
            <span className="font-bold text-white">Abdelrahman Mohamad</span> ©
            2025
          </p>
        </div>
      </footer>
      <PagePosition />
    </div>
  );
}

export default App;
