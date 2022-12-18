import classNames from "classnames";
import iconClose from "../assets/icon-close.svg";
const CloseMenuButton = ({
  className = "",
  handler,
}: {
  className?: string;
  handler: () => void;
}) => {
  return (
    <button
      onClick={handler}
      className={classNames(
        "flex md:hidden justify-center items-center",
        className
      )}
      aria-label="close mobile menu"
    >
      <span className="sr-only">close mobile menu</span>
      <img src={iconClose} className="" alt="" />
    </button>
  );
};

export default CloseMenuButton;
