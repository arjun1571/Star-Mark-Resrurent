import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../SectionTitle/SectionTitle";

const Categories = () => {
  return (
    <div>
        <div>
            <SectionTitle title={"From 11:00am to 10:00pm"} subtitle={"ORDER ONLINE"}></SectionTitle>
        </div>
        <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper my-10"
    >
      <SwiperSlide>
        <img src={slide1} alt="" className="" />
        <h1 className="text-2xl text-center font-bold text-white  -mt-24">SALAD</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h1 className="text-2xl text-center font-bold text-white  -mt-24">PIZZA</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h1 className="text-2xl text-center font-bold text-white  -mt-24">SUPES</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h1 className="text-2xl text-center font-bold text-white  -mt-24">DESSERTS</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h1 className="text-2xl text-center font-bold text-white  -mt-16">SALAD</h1>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Categories;
