import { useState } from "react";
import classNames from "classnames";
import { useCart } from "../context/cartContext";
import ProductGallery from "./ProductGallery";
import LightBox from "./LightBox";
import ProductDetails from "./ProductDetails";

const ProductPage = () => {
  const { products } = useCart();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const openLightBox = () => setLightBoxOpen(false);
  const closeLightBox = () => setLightBoxOpen(false);
  const increment = () => {
    if (qty === products[0].stock) return;
    setQty((prev) => prev + 1);
  };
  const decrement = () => {
    if (qty === 1) return;
    setQty((prev) => prev - 1);
  };

  return (
    <>
      {lightBoxOpen && (
        <LightBox
          productImages={products[0].images}
          closeLightBox={closeLightBox}
        />
      )}

      <section
        className={classNames(
          "md:mx-24 md:mt-8 mb-8 flex flex-col md:flex-row items-center justify-center md:gap-20 "
        )}
      >
        <ProductGallery
          productImages={products[0].images}
          openLightBox={openLightBox}
        />
        <ProductDetails
          addToCart={addToCart}
          product={products[0]}
          qty={qty}
          decrement={decrement}
          increment={increment}
        />
      </section>
    </>
  );
};
export default ProductPage;
