import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    text: "I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.",
    image: "https://www.soundscouts.com/img/single-page-img/testimonial-1.jpg",
    name: "Pebbles",
    location: "New York",
  },
  {
    text: "My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.",
    image: "https://market-resized.envatousercontent.com/previews-dam/EVA/TRX/f2/f3/40/fa/14/v1_E10/E1045T4B.jpg?w=200&h=200&cf_fit=crop&crop=face&format=jpeg&q=85&s=b11585024ae27467107daffa24be80843c8ee9b3054b5723a1f1207561ef1f3f",
    name: "Beverly",
    location: "Illinois",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="relative bg-[#ff6f61] h-[70vh] py-12">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={1}
        loop={true}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="text-white text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold">{item.text}</h2>
              <div className="mt-5 flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <p className="italic mt-2">{item.name}, {item.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    
      <div className="swiper-button-prev absolute top-1/2 left-5 -translate-y-1/2 z-10 cursor-pointer">
        <FaArrowLeft size={24} className="text-[#ff6f61]" />
      </div>
      <div className="swiper-button-next  absolute top-1/2 right-5 -translate-y-1/2 z-10 cursor-pointer">
        <FaArrowRight size={24} className="text-[#ff6f61] " />
      </div>

     
      <div className="flex justify-center mt-12 gap-10">
        <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_400/http://assets.designhill.com/design-blog/wp-content/uploads/2019/04/10.png" alt="tc-logo" className="h-8" />
        <img src="https://www.alphabetcreative.com/wp-content/uploads/2023/04/Ikea.jpg" alt="tnw-logo" className="h-12" />
        <img src="https://www.alphabetcreative.com/wp-content/uploads/2023/04/mcdonalds-1024x863.jpg" alt="business-insider" className="h-8" />
        <img src="https://www.alphabetcreative.com/wp-content/uploads/2023/04/Starbucks-1024x863.jpg" alt="mashable" className="h-10" />
      </div>
    </div>
  );
};

export default TestimonialCarousel;
