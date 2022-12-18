import iconMinus from "../assets/icon-minus.svg";
import iconplus from "../assets/icon-plus.svg";

const Counter = ({
  qty,
  increment,
  decrement,
}: {
  qty: number;
  increment: () => void;
  decrement: () => void;
}) => {
  return (
    <div className="px-3 flex-1 bg-LightBrayishBlue rounded-md flex justify-between  items-center ">
      <button
        aria-label="increase"
        onClick={decrement}
        className="h-12 w-12  hover:opacity-70 transition-opacity flex justify-center items-center "
      >
        <img src={iconMinus} alt="minus" />
      </button>
      <span className="text-sm font-bold">{qty}</span>
      <button
        aria-label="decrease"
        onClick={increment}
        className=" h-12 w-12 hover:opacity-70 transition-opacity  flex justify-center items-center "
      >
        <img src={iconplus} alt="plus" />
      </button>
    </div>
  );
};

export default Counter;
