import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function WorkView({ title, category, img, link, github }) {
  const [shake, setShake] = useState(false);
  const [bounce, setBounce] = useState(false);

  function handleActivateShake() {
    setShake(true);
  }
  function handleDisableShake() {
    setShake(false);
  }

  function handleActivateBounce() {
    setBounce(true);
  }
  function handleDisableBounce() {
    setBounce(false);
  }

  return (
    <li className="relative overflow-hidden work-view">
      <figure className="rounded-xl h-100 relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className="rounded-xl absolute max-w-[1000px] left-1/2 top-0 translate-x-[-50%]"
        />
      </figure>
      <div className="absolute z-10 left-1/2 bottom-0 translate-x-[-50%] translate-y-[150px] transition bg-tertiary p-4 rounded-2xl flex justify-between gap-5 info w-[250px]">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="text-lg flex gap-2 items-center justify-end">
          <a
            href={github}
            target="_blank"
            onMouseEnter={handleActivateBounce}
            onMouseLeave={handleDisableBounce}
            className="transition text-xl hover:text-primary"
          >
            <FontAwesomeIcon icon={faGithub} bounce={bounce} />
          </a>
          <a
            href={link}
            target="_blank"
            onMouseEnter={handleActivateShake}
            onMouseLeave={handleDisableShake}
            className="transition hover:text-primary"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} shake={shake} />
          </a>
        </div>
      </div>
    </li>
  );
}

export default WorkView;
