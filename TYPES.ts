export type Product = {
  id: number;
  brand: string;
  title: string;
  description: string;

  discount: number;
  price: number;
  stock: number;
  images: ProductImages[];
};

type ProductImages = {
  img: string;
  thumb: string;
};

export type CartItemType = {
  id: number;
  qty: number;
};
