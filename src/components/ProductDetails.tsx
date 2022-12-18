import { Product } from "../../TYPES";
import Counter from "./Counter";

const ProductDetails = ({
  product,
  addToCart,
  qty,
  increment,
  decrement,
}: {
  product: Product;
  qty: number;
  increment: () => void;
  decrement: () => void;
  addToCart: (id: number, qty: number) => void;
}) => {
  return (
    <div className=" max-w-sm md:flex-1 text-start mx-4 ">
      <div className="my-8">
        <h3 className="uppercase text-Orange text-xs font-bold">
          {product.brand}
        </h3>
        <h1 className="text-3xl mt-8  font-bold">{product.title}</h1>
        <p className="text-DarkGrayishBlue text-sm mt-8 ">
          {product.description}
        </p>
      </div>
      <div>
        <div className="flex flex-row md:flex-col md:justify-center md:items-start justify-between">
          <div className="flex justify-center items-center gap-4">
            <span className="text-2xl   font-bold">
              ${(product.price * (product.discount / 100)).toFixed(2)}
            </span>
            <span className="bg-Orange/20 tracking-wider py-1 px-2 rounded-sm text-Orange text-xs font-bold">
              {product.discount}%
            </span>
          </div>
          <span className="text-GrayishBlue md:mt-2 line-through text-sm font-bold">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <div className="mt-8 lg:flex  md:gap-4">
          <Counter qty={qty} increment={increment} decrement={decrement} />
          <button
            onClick={() => addToCart(product.id, qty)}
            className="mt-4 lg:mt-0 md:flex-1 inline-flex transition-opacity hover:bg-opacity-70 bg-Orange py-3 rounded-md px-8 w-full text-white justify-center items-center gap-4"
            aria-label="addto cart"
          >
            <svg
              className=""
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-white"
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D t"
                fillRule="nonzero"
              />
            </svg>
            <span className="font-bold">add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
