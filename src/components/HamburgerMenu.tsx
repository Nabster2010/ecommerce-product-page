import iconMenu from "../assets/icon-menu.svg";
const HamburgerMenu = ({ handler }: { handler: () => void }) => {
  return (
    <button
      onClick={handler}
      className="flex md:hidden justify-center items-center"
      aria-label="open mobile menu"
    >
      <span className="sr-only">open mobile menu</span>
      <img src={iconMenu} className="" alt="" />
    </button>
  );
};

export default HamburgerMenu;
