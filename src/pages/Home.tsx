// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import slider1 from "../assets/images/slider-1.jpg";
import slider2 from "../assets/images/slider-2.jpg";
import slider3 from "../assets/images/slider-3.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Home = () => {
  return (
    <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="h-[610px] w-screen"
      >
          <SwiperSlide>
              <div className="relative w-full h-full">
                  <img className="w-full h-full object-cover object-[60%_0%]" src={slider1} alt="" />
                  <div className="absolute inset-0 bg-black/60 "></div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="relative w-full h-full">
                  <img className="w-full h-full object-cover object-[60%_0%]" src={slider3} alt="" />
                  <div className="absolute inset-0 bg-black/60"></div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="relative w-full h-full">
                  <img className="w-full h-full object-cover object-[60%_0%]" src={slider2} alt="" />
                  <div className="absolute inset-0 bg-black/60"></div>
              </div>
          </SwiperSlide>
    </Swiper>

  )
}

export default Home