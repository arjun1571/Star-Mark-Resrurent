import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import img from "../../assets/home/quote-left 1.png"

const TestiMonial = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div className="my-20">
      <SectionTitle
        title={"What Our Clients Say"}
        subtitle={"TESTIMONIALS"}
      ></SectionTitle>
      <div className="my-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {datas.map((data) => (
            <SwiperSlide key={data._id}>
              <div className="lg:mx-20 md:mx-12 mx-10 text-center items-center">
                <Rating style={{ maxWidth: 180 }} className="mx-auto" value={data.rating} readOnly />
                <img className="mx-auto my-5" src={img} alt="" />
                <p className="my-3">{data.details}</p>
                <h1 className="text-4xl font-bold text-yellow-500">
                  {data.name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestiMonial;
