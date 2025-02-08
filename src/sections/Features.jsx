import FeatureCard from "../components/FeatureCard";

const cardInfo = [
  {
    title: "Responsive Design 📱💻",
    description:
      "Ensuring your portfolio looks and functions well on all screen sizes is crucial. Employers and clients will often check how your site adapts to mobile devices.",
    icon: 1,
  },
  {
    title: "Performance Optimization ⚡",
    description:
      "Fast-loading websites create a better user experience. Optimized assets, lazy loading, and efficient code structure show you understand best practices.",
    icon: 2,
  },
  {
    title: "Modern UI/UX 🎨",
    description:
      "A well-designed, visually appealing, and intuitive interface demonstrates your design skills and attention to detail, making your work stand out.",
    icon: 3,
  },
];

function Features() {
  return (
    <section className="w-full flex flex-col gap-15 pb-20 md:flex-row md:gap-8 md:flex-wrap">
      {cardInfo.map((card, index) => (
        <FeatureCard
          key={index}
          cardTitle={card.title}
          descreption={card.description}
          icon={card.icon}
          type="feature"
        />
      ))}
      <div className="md:basis-[45%] p-15 grow hidden md:block lg:hidden"></div>
    </section>
  );
}

export default Features;
