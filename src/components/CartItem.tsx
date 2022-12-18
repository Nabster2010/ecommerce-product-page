import { CartItemType, Product } from "../../TYPES";
import { useCart } from "../context/cartContext";
import iconTrash from "../assets/icon-delete.svg";
const CartItem = ({ item }: { item: CartItemType }) => {
  const { products, removeFromCart } = useCart();

  const product: Product | undefined = products.find((p) => p.id === item.id);
  const itemPrice = product ? product.price * (product.discount / 100) : 0;
  const totalPrice = itemPrice * item.qty;
  return (
    <div className="flex gap-4">
      <img
        className="w-12 h-12 rounded-md"
        src="/images/image-product-1-thumbnail.jpg"
        alt=""
      />
      <div>
        <h2 className="text-DarkGrayishBlue text-sm">{product?.title}</h2>
        <p className="text-DarkGrayishBlue text-sm">
          ${itemPrice.toFixed(2)} &times; {item.qty}{" "}
          <span className="text-black font-bold">${totalPrice.toFixed(2)}</span>
        </p>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="ml-auto"
        aria-label="remove item from the cart"
      >
        <img src={iconTrash} alt="" />
      </button>
    </div>
  );
};

export default CartItem;
