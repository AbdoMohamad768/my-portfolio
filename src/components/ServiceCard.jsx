import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServiceCard({ title, descreption, icon }) {
  return (
    <li className="service-card flex flex-col justify-center items-center transition bg-tertiary rounded-xl p-15 pt-30">
      <figure className="relative h-16 w-16 hover:h-16 hover:w-16 bg-light-tertiary rounded-full mb-8 after:content-[''] after:w-16 after:h-16 after:bg-primary after:absolute after:left-1/2 after:top-0 after:translate-x-[-50%] after:rounded-full after:transition">
        <FontAwesomeIcon
          icon={icon}
          className="icon transition absolute z-10 left-[50%] top-[50%] translate-[-120%] text-7xl text-primary"
        />
      </figure>
      <h2 className="mb-5 text-xl font-bold text-center">{title}</h2>
      <p className="text-gray-400 text-center leading-7">{descreption}</p>
    </li>
  );
}

export default ServiceCard;
