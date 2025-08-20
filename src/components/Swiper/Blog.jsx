import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { NavLink } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";

const slideData = [
  {
    title: "چه دستگاهی برای گرفتن قهوه در خانه مناسب است",
    image: "/assets/post/post-1.jpg",
    link: "/",
    date: "۱۳ مهر ۱۴۰۳",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
  },
  {
    title: "راز ساخت قهوه با فوم بالا",
     image: "/assets/post/post-3.jpg",
    link: "/",
    date: "۸ مرداد ۱۴۰۳",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
  },
  {
    title: "گرون ترین قهوه دنیا در شکم فیل!",
    image: "/assets/post/post-2.jpg",
    link: "/",
    date: "۱۲ مرداد ۱۴۰۳",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
  },
  {
    title: "بهترین قهوه دنیا چه مزه ای دارد",
    image: "/assets/post/post-4-1.jpg",
    link: "/",
    date: "۱۵ شهریور ۱۴۰۳",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
  },
];

export default function App() {
  return (
    <>
      <h2 className="text-blak font-extrabold font-[Vazirmatn] text-2xl my-5 text-center w-[90%] mx-auto">
        جدید ترین مقالات فروشگاه
        <span className="block mt-4 w-full h-1  bg-[#007e57] rounded-full"></span>
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
        className="mySwiper w-[90%] mx-auto mb-16"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-between h-86 p-3 lg:h-[20.5rem] mx-auto rounded-2xl bg-white shadow-lg border border-white/20 transition-all duration-300 hover:scale-[0.98]">
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="object-contain rounded-xl"
              />

              {/* Title */}
              <span className="font-bold mt-2 text-black text-lg md:text-sm lg:text-base w-full text-start rounded-lg py-1">
                {slide.title}
              </span>
              {/* description */}
              <span className="font-bold text-gray-500 text-xs w-full text-start rounded-lg py-1">
                {slide.description}
              </span>

              {/* Price Box */}
              <NavLink
                to={slide.link}
                className="flex items-center justify-between bg-white rounded-xl  w-full mt-2"
              >
                <div className="w-2/3 text-right text-black font-semibold text-xs md:text-sm lg:text-base">
                  <span className="line-through text-gray-500 block">
                    {slide.price}
                  </span>
                  <span className="text-sm md:text-base">{slide.date}</span>
                </div>
                <div className="w-1/3 flex justify-end me-2">
                  <button className=" bg-[#007e57] rounded-xl p-2 text-xs flex gap-1 text-white ">
                    <FaClipboardList className="my-auto" />
                    ادامه مطالب
                  </button>
                </div>
              </NavLink>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}



