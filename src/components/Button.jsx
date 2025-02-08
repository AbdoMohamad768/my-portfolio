function Button({ children, onClick, type = "primary", classes = "" }) {
  const base =
    "transition-all duration-300 rounded-full font-semibold cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:translate-y-[101%] after:w-full after:h-full after:z-[1] after:transition after:duration-300 relative overflow-hidden hover:after:translate-y-0 text-sm";
  const types = {
    primary:
      "py-4 px-6 bg-primary hover:after:h-full hover:text-black after:bg-white text-white",
    secondary:
      "py-2 px-4 bg-white hover:after:h-full hover:text-white after:bg-primary text-black",
  };

  return (
    <button className={`${base} ${types[type]} ${classes}`} onClick={onClick}>
      <span className="z-[2] relative">{children}</span>
    </button>
  );
}

export default Button;
