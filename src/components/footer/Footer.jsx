import React from "react";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Blog from "../../components/Swiper/Blog";
function Footer() {
  return (
    <footer
      className="pt-64 mt-10 border-t border-gray-300 text-sm font-[Vazirmatn] rounded-t-3xl"
      style={{
        background:
          "linear-gradient(180deg, #1B1B1D , #1B1B1DC7 ), url('/assets/home/footer-bg-min.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "visible",
      }}
    >
      {/* المانی که از بالا بیرون می‌زنه */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 z-10"
        style={{
          top: "-250px", // فاصله از بالای فوتر، قابل تنظیمه
          width: "100%",
          maxWidth: "1500px",
        }}
      >
        <Blog />
      </div>

      <div className="newsletter-container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="newsletter-text ">
          <h2 className="mb-2 text-2xl -mt-4">خبرنامه قهوه شاپ</h2>
          <p className="">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
        </div>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="آدرس ایمیل خود را وارد نمایید ..."
            className="email-input"
          />
          <button className="submit-button">عضویت</button>
        </div>

        <style jsx>{`
  .newsletter-container {
    display: flex;
    flex-direction: column; /* ستون‌بندی در موبایل */
    justify-content: center;
    align-items: center;
    background-color: #f1f1f3;
    border-radius: 20px;
    padding: 2rem;
    direction: rtl;
    gap: 1rem;
  }

  .newsletter-text {
    width: 100%;
    text-align: right;
  }

  .newsletter-form {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    border-radius: 30px;
    overflow: hidden;
    padding: 0.3rem;
  }

  .email-input {
    flex: 1;
    border: none;
    padding: 0.8rem;
    font-size: 1rem;
    outline: none;
    direction: rtl;
    min-width: 0; /* ✅ برای جلوگیری از overflow */
  }

  .submit-button {
    background-color: #007f5f;
    color: white;
    border: none;
    padding: 0.8rem 1.2rem;
    border-radius: 30px;
    cursor: pointer;
    font-weight: bold;
    white-space: nowrap; /* ✅ جلوگیری از شکست متن */
    font-size: 0.9rem;
  }

  .submit-button:hover {
    background-color: #005f43;
  }

  /* ✅ مخصوص موبایل‌های کوچکتر از 425px */
  @media (max-width: 425px) {
    .newsletter-form {
      flex-direction: column;
      align-items: stretch;
    }

    .email-input {
      width: 100%;
      margin-bottom: 0.5rem;
    }

    .submit-button {
      width: 100%;
    }
  }
`}</style>

      </div>

      <br />

      <div className="e-con-inner mx-auto w-full max-w-[1280px] h-full px-4 text-white text-center">
        {/* لوگو و توضیح */}
        <div className="w-full mb-8">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <img
              src="/assets/home/Logo.svg"
              alt="logo"
              className="size-12 p-1 invert"
            />
            <span className="text-xl text-[13px] font-bold">
              فروشگاه قهوه چی
            </span>
          </div>
          <p className="text-xs leading-6 text-right md:text-inherit mr-4 md:mr-0">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد...
          </p>
        </div>

        {/* ستون‌های لینک‌ها */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center md:justify-between gap-6 text-sm">
          {/* لینک‌های مفید */}
          <div className="flex flex-col gap-2 min-w-[140px]">
            <h4 className="font-bold text-xl mb-1">لینک‌های مفید</h4>
            {[
              { to: "/", label: "صفحه اصلی" },
              { to: "/shop", label: "فروشگاه" },
              { to: "/article", label: "مقالات" },
              { to: "/contact-us", label: "تماس با ما" },
              { to: "/about-us", label: "درباره ما" },
            ].map((item, idx) => (
              <NavLink
                key={idx}
                to={item.to}
                className="hover:text-blue-500 transition-colors"
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* خدمات مشتریان */}
          <div className="flex flex-col gap-2 min-w-[140px]">
            <h4 className="font-bold text-xl mb-1">خدمات مشتریان</h4>
            {[
              { to: "/", label: "باشگاه مشتریان" },
              { to: "/shop", label: "تخفیف‌ها" },
              { to: "/article", label: "همکاری در فروش" },
              { to: "/contact-us", label: "فرصت‌های شغلی" },
              { to: "/about-us", label: "سوالات متداول" },
            ].map((item, idx) => (
              <NavLink
                key={idx}
                to={item.to}
                className="hover:text-blue-500 transition-colors"
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* ما را دنبال کنید */}
          <div className="flex flex-col gap-2 min-w-[140px]">
            <h4 className="font-bold text-xl mb-1">ما را دنبال کنید</h4>
            {[
              { to: "#", label: "اینستاگرام" },
              { to: "#", label: "تلگرام" },
              { to: "#", label: "آپارات" },
              { to: "#", label: "لینکدین" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.to}
                className="hover:text-blue-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* راه‌های ارتباطی */}
          <div className="flex flex-col gap-2 min-w-[140px]">
            <h4 className="font-bold text-xl mb-1">راه‌های ارتباطی</h4>
            <p className="text-sm">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
            <p className="text-sm">ایمیل: info@example.com</p>
            <p className="text-sm">آدرس: تهران، خیابان مثال</p>
          </div>
        </div>
      </div>

     {/* کپی‌رایت */}
<div className="text-center text-xs text-white mt-8 border-t pt-4">
  © {new Date().getFullYear()} تمامی حقوق محفوظ است | تیم طراحی{" "}
  <a
    href="https://multiwb.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:underline"
  >
    مولتی وب
  </a>
</div>

    </footer>
  );
}

export default Footer;

