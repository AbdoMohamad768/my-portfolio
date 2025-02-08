import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactItem({ method, details, icon }) {
  return (
    <li className="flex items-center gap-6">
      <div className="w-20 h-20 bg-primary flex items-center justify-center rounded-full text-2xl">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-2xl font-bold">{method}</span>
        <span className="text-gray-400">{details}</span>
      </div>
    </li>
  );
}

export default ContactItem;
