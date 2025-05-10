import React from "react";
import { FaCoffee, FaMugHot, FaLeaf, FaTools, FaTruck } from "react-icons/fa";

const items = [
  {
    icon: <FaCoffee className="text-3xl text-white" />,
    title: "قهوه اصیل",
    desc: "ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است.",
  },
  {
    icon: <FaMugHot className="text-3xl text-white" />,
    title: "مشتقات قهوه",
    desc: "ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است.",
  },
  {
    icon: <FaLeaf className="text-3xl text-white" />,
    title: "چای ایرانی",
    desc: "ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است.",
  },
  {
    icon: <FaTruck className="text-3xl text-white" />,
    title: "قهوه عمده",
    desc: "ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است.",
  },
 
];

function Abzar1() {
  return (
    <div
      className="w-[90%] mx-auto rounded-[20px] bg-[#1B1B1D]  py-6 px-4 shadow-md"
      
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow hover:shadow-md transition duration-300 "
          >
            <div className="mb-2 flex justify-center">{item.icon}</div>
            <h3 className="title font-bold text-lg mb-1 text-white">
              {item.title}
            </h3>
            <p className="text-sm text text-white leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Abzar1;
