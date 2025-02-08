import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Title from "../components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Testimonials() {
  return (
    <section className="relative">
      <Title header="Testimonials" paragraph="What Clients Say" />
      <ul className="mb-8 flex relative w-full">
        <li className="pb-15 w-full h-full">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="w-full mb-12 text-9xl text-primary mx-auto text-center"
          />
          <p className="text-center leading-10 text-[18px] sm:text-xl md:text-[27px] italic">
            Really the Code Quality, Customer Support, and design are awesome
            and its good support they are giving. They give an instant solution
            to our needs. Really awesome. I will strongly recommend to my
            friends. Simply amazing team and amazing theme! Thank you from
            United States of America!
          </p>
          <div className="m-auto flex justify-center items-center gap-7 mt-16">
            <figure>
              <img src="" alt="" />
              Image
            </figure>
            <div>
              <h2 className="text-2xl font-bold">Name</h2>
              <span className="text-[16px] text-gray-400">Work</span>
            </div>
          </div>
        </li>
        <li className="absolute hidden w-full h-full">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="w-full mb-12 text-9xl text-primary mx-auto text-center"
          />
          <p className="text-center leading-10 text-[18px] sm:text-xl md:text-[27px] italic">
            Really the Code Quality, Customer Support, and design are awesome
            and its good support they are giving. They give an instant solution
            to our needs. Really awesome. I will strongly recommend to my
            friends. Simply amazing team and amazing theme! Thank you from
            United States of America!
          </p>
          <div className="m-auto flex justify-center items-center gap-7 mt-16">
            <figure>
              <img src="" alt="" />
              Image
            </figure>
            <div>
              <h2 className="text-2xl font-bold">Name</h2>
              <span className="text-[16px] text-gray-400">Work</span>
            </div>
          </div>
        </li>
        <li className="absolute hidden w-full h-full">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="w-full mb-12 text-9xl text-primary mx-auto text-center"
          />
          <p className="text-center leading-10 text-[18px] sm:text-xl md:text-[27px] italic">
            Really the Code Quality, Customer Support, and design are awesome
            and its good support they are giving. They give an instant solution
            to our needs. Really awesome. I will strongly recommend to my
            friends. Simply amazing team and amazing theme! Thank you from
            United States of America!
          </p>
          <div className="m-auto flex justify-center items-center gap-7 mt-16">
            <figure>
              <img src="" alt="" />
              Image
            </figure>
            <div>
              <h2 className="text-2xl font-bold">Name</h2>
              <span className="text-[16px] text-gray-400">Work</span>
            </div>
          </div>
        </li>
      </ul>
      <ul className="absolute left-1/2 translate-x-[-50%] bottom-0 flex gap-2">
        <li className="cursor-pointer w-4 h-4 bg-primary border-2 outline-2  rounded-full border-black"></li>
        <li className="cursor-pointer w-4 h-4 bg-primary rounded-full"></li>
        <li className="cursor-pointer w-4 h-4 bg-primary rounded-full"></li>
      </ul>
    </section>
  );
}

export default Testimonials;
