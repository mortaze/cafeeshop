import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ProductGrid from "../../components/product/ProductGrid";
import Abzar1 from "../../components/abzar/abzar1";
import ProductSwiper1 from "../../components/Swiper/ProductsSwiper1";

function CoffeeServices() {
 
  return (
    <>
 
 



 <div
  className="w-full h-auto flex flex-col md:flex-row flex-wrap justify-between items-center py-10 px-5 bg-[#f7f7f7]"
  style={{
    backgroundImage: 'url(/assets/home/vectors.svg)',
    backgroundSize: 'cover'
  }}
>
  {/* بخش متن و دکمه‌ها */}
  <div className="w-full md:w-1/2 text-right pr-4 space-y-6">
    <h2 className="text-2xl text-black mb-4">آنلاین شاپ تخصصی</h2>
    <h3 className="text-3xl font-bold text-black mb-6">انواع قـهوه و لـوازم کافـی شاپ</h3>
    <p className="text-black mb-6 leading-loose">
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز میباشد
    </p>
    <div className="flex gap-4 flex-wrap"> {/* فاصله بین دکمه‌ها */}
      <button className="bg-[#007e57] rounded-[20px] text-white px-6 py-3 shadow-md hover:bg-[#005a3b] transition">
        ترکیب سفارشی
      </button>
      <button
        className="bg-white rounded-[20px] px-6 py-3 shadow-md transition"
        style={{
          color: "#007e57", // رنگ متن سبز
          border: "1px solid #007e57"
        }}
      >
        خرید کنید
      </button>
    </div>
  </div>

  {/* بخش تصویر */}
  <div className="w-full md:w-1/2 mb-6 md:mb-0">
    <img
      src="/assets/home/hero-1-min.png"
      alt="Coffee"
      style={{
        width: "90%",
        height: "500px",
        objectFit: "contain",
        objectPosition: "center"
      }}
    />
  </div>
</div>


 <div>
      <Abzar1/>
    </div>
  <ProductSwiper1 />

    
   
    <div className="w-full bg-[#1B1B1D] py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
  {/* تصویر سمت چپ */}
  <div className="w-full md:w-1/2 mb-8 md:mb-0">
    <img
     src="/assets/home/ax-min.png"
      className="w-full h-[450px] object-contain object-center"
      style={{
        width: "100%",
        height: "500px",
        objectFit: "contain",
        objectPosition: "center"
      }}
    />
  </div>

  {/* متن و دکمه سمت راست */}
  <div className="w-full md:w-1/2 text-white text-right space-y-6 md:pl-12">
    <h2 className="text-3xl font-bold">درباره فروشگاه ما</h2>
    <p className="text-sm leading-relaxed text-gray-300">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی است. 
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4">
    <div className="flex gap-4 justify-center md:justify-start w-full">
  <button className="bg-[#007e57] text-white px-6 py-3 w-full sm:w-auto rounded-[20px] hover:bg-[#007e57] transition">
    فروشگاه ما
  </button>
  <button className="bg-white text-[#007e57] px-6 py-3 w-full sm:w-auto rounded-[20px] hover:bg-white transition">
    سوالی دارید؟
  </button>
</div>


    </div>
  </div>
</div>




<div className="w-full bg-[#1B1B1D] py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
  {/* متن و آیکن‌ها در سمت چپ */}
  <div className="w-full md:w-1/2 text-white text-right space-y-6 md:pr-12 order-2 md:order-1">
    <h2 className="text-3xl font-bold">مناسب ترین انتخاب</h2>

    <div className="space-y-4">
  {[
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
  ].map((text, idx) => (
    <div key={idx} className="flex items-start gap-2">
      <FaCheckCircle className="text-[#007e57] mt-1 text-2xl" /> {/* تغییر اندازه آیکن */}
      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
    </div>
  ))}
</div>

  </div>

  {/* تصویر سمت راست در دسکتاپ */}
  <div className="w-full md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
    <img
      src="/assets/home/ax2-min.png"
      alt="Best Choice"
      className="w-full h-[500px] object-contain object-center"
      style={{
        width: "100%",
        height: "500px",
        objectFit: "contain",
        objectPosition: "center"
      }}
    />
  </div>
</div>




      <ProductGrid />
    





















<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


    </>
  );
}

export default CoffeeServices;
