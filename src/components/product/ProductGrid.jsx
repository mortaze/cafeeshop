import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: " پودر قهوه ترک ویژه عربیکا ۷۰ درصد مقدار ۲۵۰ گرم",
    price: "۲۵۰٬۰۰۰ تومان",
    image: "/assets/products/poodre-ghahve.png",
  },
  {
    id: 2,
    title: "دستگاه قهوه ترک ساز آرچلیک مدل TKM 3940 ",
    price: "۴۹۰٬۰۰۰ تومان",
    image: "/assets/products/1.png",
  },
  {
    id: 3,
    title: " بسته 60 عددی شکلات تلخ قهوه ویولتا فرمند ۵۵ گرمی",
    price: "۷۹۰٬۰۰۰ تومان",
    image: "/assets/products/2.png",
  },
  {
    id: 4,
    title: " ماگ در دار سیلیکونی با بدنه ی سرامیکی طرح استارباکس",
    price: "۳۲۰٬۰۰۰ تومان",
    image: "/assets/products/3.png",
  },
  {
    id: 5,
    title: " دانه قهوه ترکیبی 250 گرم HOUSE Blend 100% Arabica",
    price: "۳۲۰٬۰۰۰ تومان",
    image: "/assets/products/dan.png",
  },
];

const ProductGrid = () => {
  return (
    <div
      className="w-full min-h-screen py-8 px-4 text-right"
      dir="rtl"
      style={{ backgroundColor: "#f7f7f8" }}
    >
      <div className="container mx-auto">
      <h2 className="text-blak font-extrabold font-[Vazir] text-2xl my-5 text-center w-[90%] mx-auto">
        جدید ترین محصولات فروشگاه
        <span className="block mt-4 w-full h-1  bg-[#007e57] rounded-full"></span>
      </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl overflow-hidden shadow hover:shadow-md transition duration-300 flex flex-col"
              style={{ backgroundColor: "#efeff1" }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain  p-2"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="text-sm font-semibold mb-2">{product.title}</h3>
                <div className="mt-auto flex items-center justify-between">
                  <p className="text-green-600 font-bold">{product.price}</p>
                  <button className="flex items-center gap-2 bg-[#007e57] text-white py-1.5 px-3 rounded-xl hover:bg-[#00694a] transition text-sm">
                    افزودن به
                    <FaShoppingCart className="text-white text-sm" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
