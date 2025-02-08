import Title from "../components/Title";
import {
  faCircleCheck,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import ContactItem from "../components/ContactItem";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contactInfo = [
  {
    method: "Address",
    details: "Cairo, Egypt",
    icon: faLocationDot,
  },
  {
    method: "Email",
    details: "abdomohmed768@gmail.com",
    icon: faEnvelope,
  },
  {
    method: "Phone",
    details: "+20 01020348458",
    icon: faPhone,
  },
];

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_y367ytv", "template_ceuxoy6", form.current, {
        publicKey: "v0B91MAsal15xynTx",
      })
      .then(
        () => {
          setSent(true);
          setTimeout(() => setSent(false), 3 * 1000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <section className="pt-30" id="contact">
        <Title header="Contact" paragraph="I Want to Hear from You" />
        <div className="flex flex-col items-left lg:flex-row lg:justify-between gap-5">
          <ul className="basis-1/2 flex flex-col gap-8 mb-4">
            {contactInfo.map((contact, index) => (
              <ContactItem
                method={contact.method}
                details={contact.details}
                icon={contact.icon}
                key={index}
              />
            ))}
          </ul>
          <form
            ref={form}
            onSubmit={(e) => sendEmail(e)}
            className="basis-1/2 grid grid-cols-1 gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              autoComplete="name webauthn"
              className="focus:border-primary p-4 outline-0 border-1 border-gray-400 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              autoComplete="email webauthn"
              className="focus:border-primary p-4 outline-0 border-1 border-gray-400 rounded-lg"
            />
            <textarea
              placeholder="Message"
              className="focus:border-primary p-4 outline-0 border-1 border-gray-400 rounded-lg h-50"
              name="message"
            ></textarea>
            <Button classes="w-fit">Submit Now</Button>
          </form>
        </div>
      </section>
      <div
        className={`transition duration-300 fixed z-30 top-[-20%] ${
          sent ? "translate-y-[210px]" : ""
        } left-1/2 translate-x-[-50%] bg-tertiary p-5 rounded-2xl`}
      >
        <FontAwesomeIcon icon={faCircleCheck} className="text-green-600 mr-3" />
        <span className="text-md font-bold">Message Sent Successfully</span>
      </div>
    </>
  );
}

export default Contact;
