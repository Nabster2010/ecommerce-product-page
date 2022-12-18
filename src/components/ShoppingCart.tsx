import classNames from "classnames";
import { useCart } from "../context/cartContext";
import CartItem from "./CartItem";

const ShoppingCart = ({ open }: { open: boolean }) => {
  //const totalPrice = qty * product.price * (product.discount / 100);
  const { cartItems } = useCart();
  return (
    <div
      className={classNames(
        "flex flex-col transition duration-500 md:min-w-[300px] min-h-[250px] py-4 bg-white shadow-xl absolute md:top-20 top-24 z-20 right-2  md:right-24 left-2 md:left-auto rounded-md",
        open ? "translate-y-0 opacity-100" : "-translate-y-[100vh] opacity-0"
      )}
    >
      <h1 className="border-b px-4 pb-2 text-sm font-bold">Cart</h1>
      {cartItems.length > 0 ? (
        <div className="p-4 flex flex-col flex-1  w-full ">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <button className="mt-auto block  bg-Orange hover:opacity-70 transition-opacity px-4 py-3 rounded-md text-white text-sm font-bold w-full ">
            Checkout
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center p-4 text-sm font-bold text-DarkGrayishBlue text-center flex-1">
          Your Cart Is Empty
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
