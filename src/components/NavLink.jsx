function NavLink({ children, onClick = () => {}, visible, setOpenMenu }) {
  return (
    <li>
      <button
        onClick={() => {
          onClick();
          setOpenMenu(false);
        }}
        className={`transition hover:text-primary cursor-pointer ${
          visible ? "text-primary" : ""
        }`}
      >
        {children}
      </button>
    </li>
  );
}

export default NavLink;
