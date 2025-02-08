import {
  faBolt,
  faPalette,
  faPenRuler,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FeatureCard({ cardTitle, descreption, icon }) {
  return (
    <div className="flex flex-col justify-center items-start bg-tertiary rounded-xl p-13 md:basis-[45%] lg:basis-[30.33%] grow">
      {icon === 1 ? (
        <FontAwesomeIcon
          icon={faPenRuler}
          className="text-7xl text-primary mb-11 max-w-full"
        />
      ) : icon === 2 ? (
        <FontAwesomeIcon
          icon={faBolt}
          className="text-7xl text-primary mb-11 max-w-full"
        />
      ) : (
        <FontAwesomeIcon
          icon={faPalette}
          className="text-7xl text-primary mb-11 max-w-full"
        />
      )}

      <h2 className="mb-5 text-xl font-bold">{cardTitle}</h2>
      <p className="text-gray-400 leading-7 grow">{descreption}</p>
    </div>
  );
}

export default FeatureCard;
