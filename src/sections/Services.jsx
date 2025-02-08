import ServiceCard from "../components/serviceCard";
import Title from "../components/Title";
import {
  faArrowsRotate,
  faGlobe,
  faLink,
  faPaintbrush,
  faRocket,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Custom Web Development",
    descreption:
      "Building fully responsive and interactive websites tailored to client needs",
    icon: faGlobe,
  },
  {
    title: "UI/UX Design Implementation",
    descreption:
      "Converting design mockups (Figma, Adobe XD, Sketch) into pixel-perfect frontend interfaces",
    icon: faPaintbrush,
  },
  {
    title: "Performance Optimization",
    descreption:
      "Enhancing website speed, SEO, and accessibility for better user experience",
    icon: faRocket,
  },
  {
    title: "API Integration & Frontend Logic",
    descreption:
      "Connecting web applications with RESTful APIs, GraphQL, and backend services",
    icon: faLink,
  },
  {
    title: "Single Page Applications (SPAs)",
    descreption:
      "Developing dynamic and fast React.js applications with seamless navigation",
    icon: faArrowsRotate,
  },
  {
    title: "Maintenance & Support",
    descreption:
      "Providing ongoing support, bug fixes, and feature enhancements for websites and web apps",
    icon: faScrewdriverWrench,
  },
];

function Services() {
  return (
    <section>
      <Title header="Services" paragraph="What I Do for My Clients" />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            title={service.title}
            descreption={service.descreption}
            icon={service.icon}
            key={index}
          />
        ))}
      </ul>
    </section>
  );
}

export default Services;
