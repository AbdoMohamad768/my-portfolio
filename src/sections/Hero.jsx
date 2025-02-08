import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Button from "./../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero() {
  function handleGetConnected() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }
  function handleCV() {
    window.open(
      "https://drive.google.com/file/d/1dMAbFIk0we7sXUg-BVBaKqImHIy1nVVO/view?usp=sharing",
      "_blank"
    );
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <section className="flex flex-col items-center w-full text-center lg:flex-row-reverse lg:justify-between">
        <figure className="basis-[50%] w-106 max-w-full flex items-center">
          <img src="/hero.png" alt="Hero" className="" />
        </figure>
        <div className="lg:basis-[65%] 2xl:basis-[60%] mt-8 lg:text-left">
          <h1 className="text-4xl font-extrabold mb-1 lg:text-5xl 2xl:text-8xl 2xl:mb-6">
            <span className="text-primary">Abdelrahman</span> Mohamad
          </h1>
          <p className="mb-6 text-2xl lg:text-3xl 2xl:text-4xl">
            Frontend Developer
          </p>
          <div className="flex gap-4 justify-center lg:justify-start items-center flex-wrap">
            <Button onClick={handleGetConnected} classes="text-3xl">
              Get Connected
            </Button>
            <Button onClick={handleCV} type="secondary">
              <FontAwesomeIcon icon={faDownload} />
              Download CV
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
