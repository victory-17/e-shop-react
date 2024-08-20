import React from "react";
import { Link } from "react-router-dom";
import Notification from "../Notifications/Notification";

function Project({ product, addItem }) {
  const notification = new Notification();

  return (
    <>
      <div className="relative group border rounded cursor-pointer overflow-hidden">
        <img src={product.thumbnail} className="w-full mb-2 img-btn" />
        <div className="px-2">
          <div>
            <h3 className="text-lg second-color">{product.title}</h3>
            <p>{product.description}</p>
          </div>
          <div className="flex flex-nowrap items-center gap-1 px-3 py-2">
            <i
              className="fa fa-star"
              style={{ color: "#F7C600" }}
              aria-hidden="true"
            />
            <p className="m-0 bg-danger bg-opacity-50 p-1 rounded-2">
              {product.rating}
            </p>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-full group-hover:translate-y-0">
          <div className="transition-transform duration-500 transform translate-y-10 group-hover:translate-y-0">
            <p className="text-white text-2xl font-bold">{product.price}</p>
          </div>
          <div className="flex flex-col gap-2 mt-2 ">
            <button
              className="transition-transform duration-700 transform translate-y-10 group-hover:translate-y-0 text-white hover:text-white border hover:border-red-700 border-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              data-product={JSON.stringify({
                id: product.id,
                title: product.title,
                image: product.thumbnail,
                price: product.price,
                stock: product.stock,
              })}
              onClick={() => {
                notification.createNotification(
                  "success",
                  `Product ${product.title} added`
                )();
                addItem(product.id);
              }}
            >
              Add To Cart
            </button>
            <Link to={`/${product.id}`}>
              <button className="transition-transform duration-1000 transform translate-y-10 group-hover:translate-y-0 bg-red-800 text-white hover:text-red-700 hover:bg-white border hover:border-white border-red-700 hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Notification />
    </>
  );
}

export default Project;
