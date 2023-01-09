import { Fragment } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const BottomNav = () => {
  return (
    <div className="bottom-nav bg-[#243242] text-white flex items-center justify-between mt-4">
      <div className="links overflow-hidden">
        <ul className="flex items-center maxlg:hidden">
          <li className="font-bold cursor-pointer hover-item maxlg:hidden">
            <span className="fa-solid fa-bars ltr:mr-1 rtl:ml-1"></span>
            <span>All</span>
          </li>
          <li className="font-bold mx-3 hover-item maxlg:hover:text-mainColor duration-150 maxlg:hover:border-transparent">
            <Link to={"#"}>Today's Deals</Link>
          </li>
          <li className="font-bold mx-3 hover-item maxlg:hover:text-mainColor duration-150 maxlg:hover:border-transparent">
            <Link to={"#"}>Today's Deals</Link>
          </li>
        </ul>
        <Swiper
          breakpoints={{
            200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="w-full lg:hidden"
        >
          <SwiperSlide>
            <Link to={"#"}>Today's Deals</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"#"}>Today's Deals</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"#"}>Today's Deals</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"#"}>Today's Deals</Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="right hover-item maxlg:hidden">
        <Link to={"#"}>Shop holiday fashion deals</Link>
      </div>
    </div>
  );
};

export default BottomNav;
