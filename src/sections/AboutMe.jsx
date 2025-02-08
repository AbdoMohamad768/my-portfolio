import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/Button";
import Title from "./../components/Title";
import { faAward, faDownload } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  function handleCV() {
    window.open(
      "https://drive.google.com/file/d/1dMAbFIk0we7sXUg-BVBaKqImHIy1nVVO/view?usp=sharing",
      "_blank"
    );
  }

  return (
    <section className="pb-15" id="about">
      <Title
        header="About Me"
        paragraph="A Passionate Developer Who Loves to Code"
      />
      <div className="flex flex-col lg:flex-row gap-12 relative">
        <div className="lg:basis-[50%] grow relative">
          <figure className="lg:flex lg:justify-end lg:items-start">
            <img
              src="/about-me.png"
              alt="Me"
              className="rounded-xl w-120 lg:w-90 2xl:w-120"
            />
          </figure>
          <figure className="absolute hidden lg:block lg:left-0 bottom-30 2xl:bottom-0">
            <img src="/2.webp" alt="2" className="rounded-xl w-85" />
          </figure>
          <div className="absolute left-5 top-65 bg-primary rounded-md text-5xl p-6 hidden lg:block 2xl:text-8xl 2xl:left-0 2xl:top-63">
            <FontAwesomeIcon icon={faAward} />
          </div>
          <div className="gap-4 p-2 absolute hidden lg:flex left-0 bottom-5 2xl:bottom-8 2xl:left-92 before:absolute before:content-[''] before:w-2.5 before:h-full before:bg-primary before:left-0 before:top-0">
            <span className="text-6xl font-bold pl-7">1</span>
            <span className="text-lg">
              Successful
              <br /> years So Far
            </span>
          </div>
        </div>

        <div className="lg:basis-[50%] grow">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="leading-7.5 text-gray-400 mb-6">
            Front-End developer with 1 year of experience in JavaScript and
            React JS framework, designing and developing attractive, interactive
            and responsive user interfaces that provides top-notch UX. <br />
            <br />
            I’m constantly working on improving my technical and personal skills
            and always strive to learn something new every day as my passion is
            front-end development since I entered the field and I look forward
            to be a Full Stack Developer. <br />
            <br />I look forward to working within an environment where I can
            learn, impact my team and help in achieving the company goals.
          </p>
          <ul className="border-2 rounded-lg flex flex-col border-gray-400 md:flex-row mb-11">
            <li className="basis-full grow p-7">
              <ul className="flex flex-col gap-3">
                <li>
                  <h3 className="font-[500] mb-1 2xl:text-xl">Name</h3>
                  <p className="text-gray-400">Abdelrahman Mohamad</p>
                </li>
                <li>
                  <h3 className="font-[500] mb-1 2xl:text-xl">Email</h3>
                  <p className="text-gray-400">abdomohmed768@gmail.com</p>
                </li>
                <li>
                  <h3 className="font-[500] mb-1 2xl:text-xl">Phone</h3>
                  <p className="text-gray-400">+20 01020348458</p>
                </li>
              </ul>
            </li>
            <li className="basis-full grow p-7 md:border-l-2 md:border-gray-400">
              <ul className="flex flex-col gap-3">
                <li>
                  <h3 className="font-[500] mb-1 2xl:text-xl">Address</h3>
                  <p className="text-gray-400">Cairo, Egypt</p>
                </li>
                <li>
                  <h3 className="font-[500] mb-1 2xl:text-xl">Degree</h3>
                  <p className="text-gray-400">Very Good</p>
                </li>
                <li>
                  <h3 className="font-[500] mb-1 2xl:text-xl">Freelance</h3>
                  <p className="text-gray-400">Available</p>
                </li>
              </ul>
            </li>
          </ul>
          <Button
            text="Download CV"
            onClick={handleCV}
            classes="2xl:text-[18px]"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
