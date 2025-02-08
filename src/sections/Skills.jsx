import Title from "../components/Title";

function Skills() {
  return (
    <section className="pt-15 mb-45">
      <Title
        header="Skills"
        paragraph="I Work Hard to Improve My Skills Regularly"
      />
      <div className="flex flex-col lg:flex-row lg:gap-32 gap-8">
        <ul className="grow flex flex-col gap-8">
          <li>
            <div className="mb-1 flex w-[75%] justify-between text-[18px] font-medium">
              <span>HTML</span>
              <span className="text-primary">75%</span>
            </div>
            <progress value={75} max={100}>
              75%
            </progress>
          </li>
          <li>
            <div className="mb-1 flex w-[80%] justify-between text-[18px] font-medium">
              <span>CSS</span>
              <span className="text-primary">80%</span>
            </div>
            <progress value={80} max={100}>
              80%
            </progress>
          </li>
          <li>
            <div className="mb-1 flex w-[85%] justify-between text-[18px] font-medium">
              <span>JavaScript</span>
              <span className="text-primary">85%</span>
            </div>
            <progress value={85} max={100}>
              85%
            </progress>
          </li>
        </ul>
        <ul className="grow flex flex-col gap-8">
          <li>
            <div className="mb-1 flex w-[60%] justify-between text-[18px] font-medium">
              <span>React</span>
              <span className="text-primary">60%</span>
            </div>
            <progress value={60} max={100}>
              60%
            </progress>
          </li>
          <li>
            <div className="mb-1 flex w-[80%] justify-between text-[18px] font-medium">
              <span>SASS</span>
              <span className="text-primary">80%</span>
            </div>
            <progress value={80} max={100}>
              80%
            </progress>
          </li>
          <li>
            <div className="mb-1 flex w-[70%] justify-between text-[18px] font-medium">
              <span>Tailwindcss</span>
              <span className="text-primary">70%</span>
            </div>
            <progress value={70} max={100}>
              70%
            </progress>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
