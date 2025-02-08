import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLink from "../components/NavLink";
import { useState } from "react";

const links = [
  "Home",
  "Features",
  "About",
  "Skills",
  "Services",
  "Portfolio",
  "Contact",
];

function NavBar({ homeView, visibleSection }) {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    setOpenMenu((openMenu) => !openMenu);
  }

  return (
    <div
      className={`transition-all flex justify-between items-center py-3 ${
        homeView ? "lg:py-8" : "lg:py-3"
      }`}
    >
      <a
        href="#"
        className={`flex justify-center items-center transition text-3xl text-primary font-bold ${
          homeView
            ? "lg:scale-100 lg:translate-x-0 2xl:scale-120 2xl:translate-x-4"
            : "lg:scale-80 2xl:scale-100"
        } `}
      >
        <img className="w-10 lg:w-14 mr-2" src="/AM.png" alt="Logo" />
        A.M
      </a>
      <nav
        className={`${
          openMenu
            ? "absolute left-0 top-[calc(100%+1px)] gap-6 flex-col lg:flex-row bg-secondary lg:bg-transparent w-full px-10 py-6 lg:p-0 scale-y-100"
            : `scale-y-0`
        } transition duration-500 origin-top lg:scale-y-100 lg:flex lg:justify-end lg:relative lg:items-center lg:gap-16 2xl:text-lg`}
      >
        <ul
          className={`${
            openMenu
              ? "after:content-[''] flex flex-col gap-1.5 mb-3 font-bold text-xl"
              : "hidden"
          } lg:mb-0 text-[16px] 2xl:text-lg lg:after:content-['|'] lg:relative lg:font-[400] lg:flex lg:flex-row lg:gap-6 2xl:gap-11 after:absolute after:right-[-36px] after:font-[400]`}
        >
          {links.map((link, index) => {
            const currentLink = link === "Home" ? "hero" : link.toLowerCase();

            return (
              <NavLink
                key={index}
                visible={visibleSection === currentLink}
                setOpenMenu={setOpenMenu}
                onClick={() => {
                  document
                    .getElementById(link.toLowerCase())
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link}
              </NavLink>
            );
          })}
        </ul>
        <ul
          className={`${
            openMenu ? "flex gap-3 justify-center" : "hidden"
          } lg:flex lg:gap-5 lg: 2xl:text-xl`}
        >
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100006260202629"
              target="_blank"
              className="transition hover:text-primary"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a
              href="www.linkedin.com/in/abdelrahman-mohamad-020a0b237"
              className="transition hover:text-primary"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AbdoMohamad768"
              className="transition hover:text-primary"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleMenu}
        className="text-3xl cursor-pointer lg:hidden"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
}

export default NavBar;
