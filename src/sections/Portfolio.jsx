import Title from "../components/Title";
import WorkView from "../components/WorkView";

const portfolioData = [
  {
    id: 1,
    title: "Forkify",
    category: "JavaScript",
    img: "/project-1.png",
    link: "https://forkify-abdomohamad.netlify.app/",
    github: "https://github.com/AbdoMohamad768/forkify",
  },
  {
    id: 2,
    title: "Calculator",
    category: "HTML & CSS & JavaScript",
    img: "/project-2.png",
    link: "https://me-the-machine-boy.netlify.app/",
    github: "https://github.com/AbdoMohamad768/calculator",
  },
  {
    id: 3,
    title: "Task Tracker",
    category: "HTML & CSS & JavaScript",
    img: "/project-3.png",
    link: "https://github.com/AbdoMohamad768/todo-app",
    github: "https://task-tracker-abdomohmed768.netlify.app/",
  },
];

function Portfolio() {
  function handleFilter() {}

  return (
    <section className="mt-50 pb-30" id="portfolio">
      <Title header="Portfolio" paragraph="What I Do for My Customers" />
      <ul className="flex justify-center items-center flex-wrap gap-6 mb-12">
        <li className="text-primary text-xl">
          <button onClick={handleFilter} className="cursor-pointer">
            All
          </button>
        </li>
        {/* HTML & CSS & JavaScript */}
        {/* JavaScript */}
        {/* SCSS */}
        {/* React */}
      </ul>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioData.map((work) => (
          <WorkView
            key={work.id}
            img={work.img}
            title={work.title}
            category={work.category}
            link={work.link}
            github={work.github}
          />
        ))}
      </ul>
    </section>
  );
}

export default Portfolio;
