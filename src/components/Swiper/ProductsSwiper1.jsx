// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import { NavLink } from "react-router-dom";

// import { FaShoppingCart } from "react-icons/fa";
// const slideData = [
//   {
//     title: " پودر قهوه ترک ویژه عربیکا ۷۰ درصد مقدار ۲۵۰ گرم",
//     price: "۲۵۰٬۰۰۰ تومان",
//     image: "/assets/products/poodre-ghahve.png",
//     discountPrice: "۶,۰۰۰,۰۰۰",
//     discountPercent: "۱۳٪",
//   },
//   {
//     title: "دستگاه قهوه ترک ساز آرچلیک مدل TKM 3940 ",
//     price: "۴۹۰٬۰۰۰ تومان",
//     image: "/assets/products/1.png",
//     discountPrice: "۲,۲۰۰,۰۰۰",
//     discountPercent: "۱۲٪",
//   },
//   {
//     title: " بسته 60 عددی شکلات تلخ قهوه ویولتا فرمند ۵۵ گرمی",
//     price: "۷۹۰٬۰۰۰ تومان",
//     image: "/assets/products/2.png",
//     discountPrice: "۳,۰۰۰,۰۰۰",
//     discountPercent: "۱۲٪",
//   },
//   {
//     title: " ماگ در دار سیلیکونی با بدنه ی سرامیکی طرح استارباکس",
//     price: "۳۲۰٬۰۰۰ تومان",
//     image: "/assets/products/3.png",
//     discountPrice: "۹,۰۰۰,۰۰۰",
//     discountPercent: "۱۰٪",
//   },
//   {
//     title: " دانه قهوه ترکیبی 250 گرم HOUSE Blend 100% Arabica",
//     price: "۳۲۰٬۰۰۰ تومان",
//     image: "/assets/products/dan.png",
//     discountPrice: "۹,۰۰۰,۰۰۰",
//     discountPercent: "۱۰٪",
//   },
// ];

// export default function App() {
//   return (
//     <>
//       <h2 className="text-blak font-extrabold font-[Vazir] text-2xl  my-5 text-center w-[90%] mx-auto">
//         محصولات تخفیفی
//         <span className="block mt-2 w-full h-1 bg-[#007e57] rounded-full"></span>
//       </h2>
//       <Swiper
//         grabCursor={true}
//         centeredSlides={false}
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         spaceBetween={20} // اضافه کردن فاصله بین اسلایدها
//         modules={[Autoplay]}
//         breakpoints={{
//           0: { slidesPerView: 1 }, // موبایل
//           640: { slidesPerView: 2 }, // تبلت کوچک
//           1024: { slidesPerView: 3 }, // دسکتاپ
//           1280: { slidesPerView: 4 }, // نمایشگرهای خیلی بزرگ
//         }}
//         className="mySwiper px-4 w-[90%] mx-auto"
//       >
//         {slideData.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative flex flex-col items-center justify-between p-4 h-80 md:h-96 lg:h-[26rem] rounded-2xl bg-white shadow-lg border border-white/20 transition-all duration-300 hover:scale-[0.98]">
//               {/* Discount Badge */}
//               <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
//                 {slide.discountPercent} تخفیف
//               </div>

//               {/* Image */}
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="size-40 md:size-56 object-contain"
//               />

//               {/* Title */}
//               <span className="font-bold text-black text-xs md:text-sm lg:text-base w-full text-center rounded-lg py-1 shadow-lg">
//                 {slide.title}
//               </span>

//               {/* Price Box */}
//               <NavLink
//                 to={slide.link}
//                 className="flex items-center justify-between p-2 bg-white rounded-xl shadow-md w-full mt-2"
//               >
//                 <div className="w-2/3 text-right text-neutral-800 font-semibold text-xs md:text-sm lg:text-base">
//                   <span className="line-through text-gray-500 block">
//                     {slide.price} تومان
//                   </span>
//                   <span className="text-sm md:text-base">
//                     {slide.discountPrice} تومان
//                   </span>
//                 </div>
//                  <button className="flex items-center gap-2 bg-[#007e57] text-white py-1.5 px-3 rounded-xl hover:bg-[#00694a] transition text-sm">
//                                     افزودن به
//                                     <FaShoppingCart className="text-white text-sm" />
//                                   </button>
              
//               </NavLink>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const slideData = [
  {
    title: "پودر قهوه ترک ویژه عربیکا ۷۰ درصد مقدار ۲۵۰ گرم",
    price: "۲۵۰٬۰۰۰ تومان",
    image: "/assets/products/poodre-ghahve.png",
    discountPrice: "۶,۰۰۰,۰۰۰",
    discountPercent: "۱۳٪",
  },
  {
    title: "دستگاه قهوه ترک ساز آرچلیک مدل TKM 3940",
    price: "۴۹۰٬۰۰۰ تومان",
    image: "/assets/products/1.png",
    discountPrice: "۲,۲۰۰,۰۰۰",
    discountPercent: "۱۲٪",
  },
  {
    title: "بسته 60 عددی شکلات تلخ قهوه ویولتا فرمند ۵۵ گرمی",
    price: "۷۹۰٬۰۰۰ تومان",
    image: "/assets/products/2.png",
    discountPrice: "۳,۰۰۰,۰۰۰",
    discountPercent: "۱۲٪",
  },
  {
    title: "ماگ در دار سیلیکونی با بدنه ی سرامیکی طرح استارباکس",
    price: "۳۲۰٬۰۰۰ تومان",
    image: "/assets/products/3.png",
    discountPrice: "۹,۰۰۰,۰۰۰",
    discountPercent: "۱۰٪",
  },
  {
    title: "دانه قهوه ترکیبی 250 گرم HOUSE Blend 100% Arabica",
    price: "۳۲۰٬۰۰۰ تومان",
    image: "/assets/products/dan.png",
    discountPrice: "۹,۰۰۰,۰۰۰",
    discountPercent: "۱۰٪",
  },
];

export default function App() {
  return (
    <>
      <h2 className="text-black font-extrabold font-[Vazir] text-2xl my-5 text-center w-[90%] mx-auto">
        محصولات تخفیفی
        <span className="block mt-2 w-full h-1 bg-[#007e57] rounded-full"></span>
      </h2>
      <Swiper
        grabCursor={true}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        spaceBetween={20} // اضافه کردن فاصله بین اسلایدها
        modules={[Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 }, // موبایل
          640: { slidesPerView: 2 }, // تبلت کوچک
          1024: { slidesPerView: 3 }, // دسکتاپ
          1280: { slidesPerView: 3 }, // نمایشگرهای خیلی بزرگ
        }}
        className="mySwiper px-4 w-[90%] mx-auto"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex flex-col items-center justify-between p-4 h-80 md:h-96 lg:h-[26rem] rounded-2xl bg-[#efeff1] shadow-lg border border-white/20 transition-all duration-300 hover:scale-[0.98]"
            >
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
                {slide.discountPercent} تخفیف
              </div>

              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="size-40 md:size-56 object-contain"
              />

              {/* Title */}
              <span className="font-bold text-black text-xs md:text-sm lg:text-base w-full text-center rounded-lg py-1 shadow-lg">
                {slide.title}
              </span>

              {/* Price Box */}
              <NavLink
                to={slide.link}
                className="flex items-center justify-between p-2 bg-white rounded-xl shadow-md w-full mt-2"
              >
                <div className="w-2/3 text-right text-neutral-800 font-semibold text-xs md:text-sm lg:text-base">
                  <span className="line-through text-gray-500 block">
                    {slide.price} تومان
                  </span>
                  <span className="text-sm md:text-base">
                    {slide.discountPrice} تومان
                  </span>
                </div>
                <button className="flex items-center gap-2 bg-[#007e57] text-white py-1.5 px-3 rounded-xl hover:bg-[#00694a] transition text-sm">
                  افزودن به
                  <FaShoppingCart className="text-white text-sm" />
                </button>
              </NavLink>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
