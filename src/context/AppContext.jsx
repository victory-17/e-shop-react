import { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AppContext = createContext(null);

export default function AppPovider({ children }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  function handleSetProducts(products) {
    console.log("Product");
  }

  return (
    <AppContext.Provider value={{ products, handleSetProducts }}>
      <h1 className="text-xl text-blue-500">Home Page </h1>
      <nav className="flex gap-2 bg-rose-400 text-white my-5 text-lg font-bold">
        <Link to="">Products</Link>
        <Link to="services">Services</Link>
      </nav>
      {children}
    </AppContext.Provider>
  );
}
