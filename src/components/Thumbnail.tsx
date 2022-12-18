import classNames from "classnames";

const Thumbnail = ({
  src,
  active,
  handleClick,
  className = "",
}: {
  src: string;
  active: boolean;
  handleClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={handleClick}
      className={classNames(
        " group relative rounded-md overflow-hidden border",
        active ? " border-Orange " : "border-transparent",
        className
      )}
    >
      <span
        className={classNames(
          "absolute inset-0 group-hover:bg-white/50 transition ",
          active && "bg-white/50"
        )}
      ></span>
      <img src={src} alt="thumbnail" className={classNames("object-cover")} />
    </button>
  );
};
export default Thumbnail;
