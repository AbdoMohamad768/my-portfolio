import { useEffect, useRef, useState } from "react";

function PagePosition() {
  const [pagePosition, setpagePosition] = useState(window.scrollY);
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setpagePosition(window.scrollY);

      // Get Full Page Height
      const pageHeight =
        document.querySelector("body").scrollHeight - window.innerHeight;

      // Set Height Based On Page Position
      // document
      //   .querySelector(":root")
      //   .style.setProperty(
      //     "--el-height",
      //     `${Math.ceil((pagePosition / pageHeight) * 100)}%`
      //   );
      ref.current.style.height = `${Math.ceil(
        (pagePosition / pageHeight) * 100
      )}%`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pagePosition]);

  return (
    <div
      className={`${
        pagePosition <= 1 ? "translate-x-60" : ""
      } transition duration-500 fixed bottom-6 right-3 z-50 text-white text-[14px] flex flex-col gap-3 items-center`}
    >
      <button
        className="cursor-pointer"
        onClick={() => {
          document
            .getElementById("home")
            .scrollIntoView({ behavior: "smooth" });
        }}
        style={{ writingMode: "vertical-rl" }}
      >
        To Top
      </button>
      {/* scroll-percentage */}
      <span className=" block h-40 w-[1px] bg-gray-500 relative">
        <div
          ref={ref}
          className="absolute w-full left-0 top-0 bg-primary"
        ></div>
      </span>
    </div>
  );
}

export default PagePosition;
