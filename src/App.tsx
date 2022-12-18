import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import { CartProvider } from "./context/cartContext";

const App = () => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen mx-auto max-w-6xl bg-white font-KumbhSans">
        <Header />
        <ProductPage />
      </div>
    </CartProvider>
  );
};
export default App;
